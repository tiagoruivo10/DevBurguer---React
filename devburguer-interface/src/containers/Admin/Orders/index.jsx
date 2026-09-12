import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import {
  CalendarBlank,
  CalendarCheck,
  CaretDown,
  Clock,
  CurrencyCircleDollar,
  Receipt,
  SpeakerHigh,
  SpeakerSlash,
} from '@phosphor-icons/react';
import { toast } from 'react-toastify';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { api } from '../../../services/api';
import { formatDate } from '../../../utils/formatDate';
import { formatImageUrl } from '../../../utils/formatImageUrl';
import { formatPrice } from '../../../utils/formatPrice';
import { playNewOrderSound } from '../../../utils/playOrderSound';
import { orderStatusOptions } from './OrderStatus';
import { Row } from './row';
import {
  Container,
  DateButton,
  DateFilterGroup,
  DayGroup,
  DayGroupHeader,
  DesktopTableWrapper,
  Filter,
  FilterOptions,
  HeaderContainer,
  LiveControl,
  MobileOrderCard,
  MobileOrdersContainer,
  SelectStatus,
  selectStatusStyles,
  StatsGrid,
  TableWrapper,
  Toolbar,
} from './styles';

function isSameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function getDayHeaderInfo(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  if (isSameDay(d, now)) {
    return {
      title: 'Hoje',
      isToday: true,
      formattedDate: d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
      }),
    };
  }

  if (isSameDay(d, yesterday)) {
    return {
      title: 'Ontem',
      isYesterday: true,
      formattedDate: d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
      }),
    };
  }

  return {
    title: d.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    }),
    isToday: false,
    formattedDate: d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  };
}

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [dateFilter, setDateFilter] = useState('todos'); // 'hoje' | 'ontem' | '7dias' | 'todos'
  const [openDays, setOpenDays] = useState({});
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('devburguer:orders_muted') === 'true';
  });
  const [expandedOrders, setExpandedOrders] = useState({});
  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  const ordersCountRef = useRef(null);

  async function handleStatusChange(orderId, status) {
    try {
      setUpdatingOrderId(orderId);
      await api.put(`orders/${orderId}`, { status });

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId || order.id === orderId
            ? { ...order, status }
            : order,
        ),
      );
      toast.success('Status do pedido atualizado!');
    } catch (err) {
      console.error(err);
      toast.error('Erro ao atualizar status do pedido.');
    } finally {
      setUpdatingOrderId(null);
    }
  }

  function toggleOrderItems(orderId) {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  }

  const toggleSound = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem('devburguer:orders_muted', String(next));
      toast.info(next ? '🔕 Som de novos pedidos silenciado.' : '🔔 Som de novos pedidos ativado!');
      return next;
    });
  };

  const loadOrders = useCallback(async (isSilent = false) => {
    try {
      const { data } = await api.get('orders');

      // Detecta novos pedidos durante o auto-refresh para tocar a campainha
      if (isSilent && ordersCountRef.current !== null && data.length > ordersCountRef.current) {
        if (!isMuted) {
          playNewOrderSound();
        }
        const newestOrder = data[0];
        const code = (newestOrder?.id || '').slice(-6).toUpperCase();
        toast.success(`🔔 Novo pedido recebido! #${code || ''}`, {
          autoClose: 5000,
        });
      }

      ordersCountRef.current = data.length;
      setOrders(data);
    } catch (err) {
      console.error('Erro ao carregar pedidos:', err);
    }
  }, [isMuted]);

  // Carregamento inicial e auto-refresh em tempo real a cada 5 segundos
  useEffect(() => {
    loadOrders(false);

    const interval = setInterval(() => {
      loadOrders(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [loadOrders]);

  // Cálculo das contagens por data
  const dateCounts = useMemo(() => {
    const now = new Date();
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterdayMidnight = new Date(todayMidnight);
    yesterdayMidnight.setDate(todayMidnight.getDate() - 1);
    const sevenDaysAgo = new Date(todayMidnight);
    sevenDaysAgo.setDate(todayMidnight.getDate() - 6);

    let hoje = 0;
    let ontem = 0;
    let seteDias = 0;

    orders.forEach((o) => {
      const d = new Date(o.createdAt || o.created_at);
      if (d >= todayMidnight) hoje++;
      if (d >= yesterdayMidnight && d < todayMidnight) ontem++;
      if (d >= sevenDaysAgo) seteDias++;
    });

    return {
      hoje,
      ontem,
      seteDias,
      todos: orders.length,
    };
  }, [orders]);

  // Filtragem combinada: Período de Data + Status do Pedido
  const filteredOrders = useMemo(() => {
    const now = new Date();
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterdayMidnight = new Date(todayMidnight);
    yesterdayMidnight.setDate(todayMidnight.getDate() - 1);
    const sevenDaysAgo = new Date(todayMidnight);
    sevenDaysAgo.setDate(todayMidnight.getDate() - 6);

    return orders.filter((order) => {
      const orderDate = new Date(order.createdAt || order.created_at);

      // Filtro de Data
      if (dateFilter === 'hoje' && orderDate < todayMidnight) return false;
      if (
        dateFilter === 'ontem' &&
        (orderDate < yesterdayMidnight || orderDate >= todayMidnight)
      ) {
        return false;
      }
      if (dateFilter === '7dias' && orderDate < sevenDaysAgo) return false;

      // Filtro de Status
      if (activeStatus !== 0) {
        const statusOption = orderStatusOptions.find((item) => item.id === activeStatus);
        if (statusOption && order.status !== statusOption.value) {
          return false;
        }
      }

      return true;
    });
  }, [orders, dateFilter, activeStatus]);

  // Agrupamento dos pedidos filtrados por dia (decrescente)
  const groupedOrders = useMemo(() => {
    const groups = {};

    filteredOrders.forEach((order) => {
      const d = new Date(order.createdAt || order.created_at);
      const key = !isNaN(d.getTime()) ? d.toISOString().slice(0, 10) : 'Sem data';

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(order);
    });

    // Ordena as chaves por data decrescente
    const sortedKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));

    return sortedKeys.map((key) => ({
      key,
      orders: groups[key],
    }));
  }, [filteredOrders]);

  // Abre automaticamente o primeiro dia se ainda não estiver definido
  useEffect(() => {
    if (groupedOrders.length > 0) {
      const firstKey = groupedOrders[0].key;
      setOpenDays((prev) => ({
        ...prev,
        [firstKey]: prev[firstKey] !== undefined ? prev[firstKey] : true,
      }));
    }
  }, [groupedOrders]);

  const toggleDay = (key) => {
    setOpenDays((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getStatusCount = (statusValue) => {
    if (statusValue === 'Todos') return filteredOrders.length;
    return filteredOrders.filter((o) => o.status === statusValue).length;
  };

  function createData(order) {
    return {
      name: order.user?.name || 'Cliente',
      orderId: order._id || order.id,
      date: order.createdAt || order.created_at,
      status: order.status,
      products: order.products || [],
    };
  }

  // Faturamento total do período selecionado
  const totalRevenue = useMemo(() => {
    return filteredOrders.reduce((acc, order) => {
      const orderTotal = (order.products || []).reduce(
        (sub, p) => sub + (p.price || 0) * (p.quantity || 1),
        0,
      );
      return acc + orderTotal;
    }, 0);
  }, [filteredOrders]);

  return (
    <Container>
      <HeaderContainer>
        <div>
          <h2>
            <Receipt size={28} weight="duotone" />
            Painel de Pedidos da Cozinha
          </h2>
          <p>Gerencie o fluxo de preparo e entrega em tempo real</p>
        </div>

        <StatsGrid>
          <div className="stat-card">
            <div className="icon-wrapper">
              <Clock size={20} weight="bold" />
            </div>
            <div className="stat-info">
              <span className="stat-label">Pedidos Exibidos</span>
              <span className="stat-value">{filteredOrders.length}</span>
            </div>
          </div>

          <div className="stat-card highlight">
            <div className="icon-wrapper green">
              <CurrencyCircleDollar size={20} weight="bold" />
            </div>
            <div className="stat-info">
              <span className="stat-label">Faturamento Total</span>
              <span className="stat-value">{formatPrice(totalRevenue)}</span>
            </div>
          </div>
        </StatsGrid>
      </HeaderContainer>

      {/* Barra de Ferramentas: Filtros de Período + Indicador Ao Vivo + Som */}
      <Toolbar>
        <DateFilterGroup>
          <span className="filter-title">
            <CalendarBlank size={16} />
            Período:
          </span>

          <DateButton
            type="button"
            $isActive={dateFilter === 'hoje'}
            onClick={() => setDateFilter('hoje')}
          >
            <span>Hoje</span>
            <span className="badge">{dateCounts.hoje}</span>
          </DateButton>

          <DateButton
            type="button"
            $isActive={dateFilter === 'ontem'}
            onClick={() => setDateFilter('ontem')}
          >
            <span>Ontem</span>
            <span className="badge">{dateCounts.ontem}</span>
          </DateButton>

          <DateButton
            type="button"
            $isActive={dateFilter === '7dias'}
            onClick={() => setDateFilter('7dias')}
          >
            <span>Últimos 7 dias</span>
            <span className="badge">{dateCounts.seteDias}</span>
          </DateButton>

          <DateButton
            type="button"
            $isActive={dateFilter === 'todos'}
            onClick={() => setDateFilter('todos')}
          >
            <span>Todos</span>
            <span className="badge">{dateCounts.todos}</span>
          </DateButton>
        </DateFilterGroup>

        <LiveControl $isMuted={isMuted}>
          <div className="live-pill" title="Atualização contínua automática a cada 5 segundos">
            <span className="dot" />
            <span>Ao Vivo</span>
          </div>

          <button
            type="button"
            className="sound-btn"
            onClick={toggleSound}
            title={isMuted ? 'Clique para ativar a campainha' : 'Clique para silenciar'}
          >
            {isMuted ? <SpeakerSlash size={16} /> : <SpeakerHigh size={16} />}
            <span>{isMuted ? 'Mudo' : 'Som Ativo'}</span>
          </button>
        </LiveControl>
      </Toolbar>

      {/* Filtro por Status do Pedido */}
      <Filter>
        {orderStatusOptions.map((status) => {
          const count = getStatusCount(status.value);
          return (
            <FilterOptions
              key={status.id}
              onClick={() => setActiveStatus(status.id)}
              $isActiveStatus={activeStatus === status.id}
            >
              <span>{status.label}</span>
              <span className="count-badge">{count}</span>
            </FilterOptions>
          );
        })}
      </Filter>

      {/* Listagem Agrupada por Dias (Accordion) */}
      {groupedOrders.length === 0 ? (
        <TableWrapper>
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: '#1E293B',
              color: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #334155',
              padding: '48px 24px',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <CalendarCheck size={44} color="#64748B" weight="duotone" />
              <h3 style={{ color: '#F1F5F9', fontSize: '18px', fontWeight: 700 }}>
                Nenhum pedido encontrado neste período
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', maxWidth: '400px' }}>
                Tente selecionar outro período acima ou clique em <strong>Todos</strong> para ver os pedidos anteriores.
              </p>
            </div>
          </TableContainer>
        </TableWrapper>
      ) : (
        groupedOrders.map((group) => {
          const dayMeta = getDayHeaderInfo(group.key);
          const isOpen = openDays[group.key] !== false;

          const dayTotalRevenue = group.orders.reduce((acc, order) => {
            const sub = (order.products || []).reduce(
              (s, p) => s + (p.price || 0) * (p.quantity || 1),
              0,
            );
            return acc + sub;
          }, 0);

          return (
            <DayGroup key={group.key}>
              <DayGroupHeader
                $isOpen={isOpen}
                $isToday={dayMeta.isToday}
                onClick={() => toggleDay(group.key)}
              >
                <div className="left-meta">
                  <span className="day-title">
                    <CalendarBlank size={20} weight="duotone" />
                    {dayMeta.title}
                    <span style={{ fontSize: '13px', fontWeight: 500, color: '#94A3B8' }}>
                      ({dayMeta.formattedDate})
                    </span>
                  </span>
                  {dayMeta.isToday && <span className="today-tag">Hoje</span>}
                </div>

                <div className="right-meta">
                  <span className="stats-pill">
                    {group.orders.length} {group.orders.length === 1 ? 'pedido' : 'pedidos'}
                  </span>

                  <span className="stats-pill">
                    Total: <strong>{formatPrice(dayTotalRevenue)}</strong>
                  </span>

                  <span className="toggle-arrow">
                    <CaretDown size={18} weight="bold" />
                  </span>
                </div>
              </DayGroupHeader>

              {isOpen && (
                <>
                  <DesktopTableWrapper>
                    <TableContainer
                      component={Paper}
                      sx={{
                        backgroundColor: 'transparent',
                        color: '#FFFFFF',
                        boxShadow: 'none',
                      }}
                    >
                      <Table aria-label="tabela de pedidos" sx={{ minWidth: 620 }}>
                        <TableHead sx={{ backgroundColor: '#111827' }}>
                          <TableRow>
                            <TableCell sx={{ color: '#94A3B8', fontWeight: 700, width: '40px' }} />
                            <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                              Código do Pedido
                            </TableCell>
                            <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                              Cliente
                            </TableCell>
                            <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                              Horário
                            </TableCell>
                            <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                              Status Atual
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {group.orders.map((order) => (
                            <Row
                              key={order._id || order.id}
                              row={createData(order)}
                              orders={orders}
                              setOrders={setOrders}
                            />
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </DesktopTableWrapper>

                  {/* Cards Exclusivos e Otimizados para Celular */}
                  <MobileOrdersContainer>
                    {group.orders.map((order) => {
                      const id = order._id || order.id;
                      const code = (order.id || order._id || '').slice(-6).toUpperCase();
                      const isExpanded = Boolean(expandedOrders[id]);
                      const orderTotal = (order.products || []).reduce(
                        (sum, p) => sum + (p.price || 0) * (p.quantity || 1),
                        0,
                      );

                      return (
                        <MobileOrderCard key={id}>
                          <div className="order-card-top">
                            <span className="order-number">
                              Pedido <span>#{code}</span>
                            </span>
                            <span className="order-time">
                              <Clock size={14} color="#FF6B00" />
                              {formatDate(order.createdAt || order.created_at)}
                            </span>
                          </div>

                          <div className="order-customer">
                            <span className="label">Cliente:</span>
                            <span className="name">
                              {order.user?.name || order.userName || 'Cliente'}
                            </span>
                          </div>

                          <div className="status-wrapper">
                            <span className="status-label">Status do Pedido:</span>
                            <SelectStatus
                              options={orderStatusOptions.filter((s) => s.id !== 0)}
                              placeholder="Alterar status..."
                              defaultValue={orderStatusOptions.find(
                                (s) => s.value === order.status,
                              )}
                              onChange={(newOption) =>
                                handleStatusChange(id, newOption.value)
                              }
                              isLoading={updatingOrderId === id}
                              styles={selectStatusStyles}
                              menuPortalTarget={document.body}
                            />
                          </div>

                          <button
                            type="button"
                            className="toggle-items-btn"
                            onClick={() => toggleOrderItems(id)}
                          >
                            <span>
                              {isExpanded
                                ? 'Ocultar Produtos'
                                : `Ver Produtos (${order.products?.length || 0})`}
                            </span>
                            <CaretDown
                              size={14}
                              className={isExpanded ? 'rotate' : ''}
                            />
                          </button>

                          {isExpanded && (
                            <div className="mobile-items-list">
                              {(order.products || []).map((p) => (
                                <div className="item-entry" key={p.id}>
                                  <img
                                    src={formatImageUrl(p.url)}
                                    alt={p.name}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src =
                                        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&q=80';
                                    }}
                                  />
                                  <div className="item-details">
                                    <span className="item-name">{p.name}</span>
                                    <span className="item-sub">
                                      {p.quantity}x {formatPrice(p.price)}
                                    </span>
                                    {p.observation && (
                                      <span className="item-obs">
                                        📝 {p.observation}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="order-card-footer">
                            <span className="footer-label">Total do Pedido:</span>
                            <span className="total-value">
                              {formatPrice(orderTotal)}
                            </span>
                          </div>
                        </MobileOrderCard>
                      );
                    })}
                  </MobileOrdersContainer>
                </>
              )}
            </DayGroup>
          );
        })
      )}
    </Container>
  );
}

export default Orders;
