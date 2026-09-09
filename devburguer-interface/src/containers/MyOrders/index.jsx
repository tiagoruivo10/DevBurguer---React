import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Receipt,
  Clock,
  CheckCircle,
  CookingPot,
  Moped,
  House,
  WhatsappLogo,
  ArrowClockwise,
  ShoppingBagOpen,
  Sparkle,
} from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  Content,
  Header,
  OrderCard,
  OrderCardHeader,
  StepperTrack,
  StepItem,
  OrderItemsList,
  OrderCardFooter,
  EmptyState,
} from './styles';

const STEPS = [
  { key: 'Pedido Realizado', label: 'Pedido Realizado', icon: Receipt },
  { key: 'Em Preparação', label: 'Na Chapa / Preparo', icon: CookingPot },
  { key: 'Pedido Pronto', label: 'Pedido Pronto', icon: Sparkle },
  { key: 'Pedido à Caminho', label: 'Saiu para Entrega', icon: Moped },
  { key: 'Entregue', label: 'Entregue', icon: House },
];

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { userInfo } = useUser();
  const { putProductInCart } = useCart();
  const navigate = useNavigate();

  const loadOrders = useCallback(async (isSilent = false) => {
    try {
      if (!isSilent) setLoading(true);
      else setIsRefreshing(true);

      const { data } = await api.get('/orders');
      setOrders(data);
      setHasError(false);
    } catch (err) {
      console.error('Erro ao carregar pedidos:', err);
      setHasError(true);
      if (!isSilent) {
        if (err.response?.status === 401) {
          toast.warn('Sua sessão expirou. Faça login novamente para acompanhar seus pedidos.');
          navigate('/login');
        } else {
          toast.error('Não foi possível carregar seus pedidos.');
        }
      }
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (!userInfo?.name) {
      navigate('/login');
      return;
    }

    loadOrders();

    // Auto-refresh a cada 6 segundos para acompanhar a cozinha em tempo real
    const interval = setInterval(() => {
      loadOrders(true);
    }, 6000);

    return () => clearInterval(interval);
  }, [userInfo, navigate, loadOrders]);

  function getStepStatus(currentStatus, stepIndex) {
    const s = normalize(currentStatus);

    let currentIndex = 0;
    if (s.includes('entregue')) {
      currentIndex = 4;
    } else if (s.includes('caminho') || s.includes('saiu') || s.includes('entrega')) {
      currentIndex = 3;
    } else if (s.includes('pronto')) {
      currentIndex = 2;
    } else if (s.includes('prepar')) {
      currentIndex = 1;
    } else {
      currentIndex = 0;
    }

    return {
      isCompleted: stepIndex < currentIndex,
      isActive: stepIndex === currentIndex,
    };
  }

  function getStatusClass(status) {
    const s = normalize(status);

    if (s.includes('cancelado')) return 'status-cancelado';
    if (s.includes('entregue')) return 'status-entregue';
    if (s.includes('caminho') || s.includes('entrega') || s.includes('saiu')) return 'status-caminho';
    if (s.includes('pronto')) return 'status-pronto';
    if (s.includes('prepar')) return 'status-preparacao';
    return 'status-realizado';
  }

  function handleReorder(products) {
    products.forEach((product) => {
      putProductInCart(product);
    });

    toast.success('Itens adicionados ao seu carrinho! 🛒');
    navigate('/carrinho');
  }

  return (
    <Container>
      <Content>
        <Header>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div className="badge-header">
              <Receipt size={16} weight="bold" />
              <span>Rastreamento ao Vivo</span>
            </div>

            <button
              type="button"
              onClick={() => loadOrders(false)}
              disabled={isRefreshing}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid #334155',
                color: '#94A3B8',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <ArrowClockwise size={14} className={isRefreshing ? 'spin' : ''} />
              <span>{isRefreshing ? 'Atualizando...' : 'Atualizar Status'}</span>
            </button>
          </div>

          <h1>
            Meus <span>Pedidos</span>
          </h1>

          <p>
            Acompanhe o status do seu lanche em tempo real e consulte o histórico de compras.
          </p>
        </Header>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94A3B8' }}>
            <p>Carregando seus pedidos...</p>
          </div>
        ) : hasError && orders.length === 0 ? (
          <EmptyState>
            <div className="icon-wrapper" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#EF4444' }}>
              <Receipt size={40} weight="duotone" />
            </div>
            <h3>Sessão Expirada ou Falha de Conexão</h3>
            <p>
              Não conseguimos carregar seus pedidos. Sua sessão pode ter expirado por segurança.
            </p>
            <button type="button" onClick={() => navigate('/login')}>
              Fazer Login Novamente
            </button>
          </EmptyState>
        ) : orders.length === 0 ? (
          <EmptyState>
            <div className="icon-wrapper">
              <ShoppingBagOpen size={40} weight="duotone" />
            </div>
            <h3>Nenhum pedido encontrado</h3>
            <p>
              Você ainda não fez nenhum pedido no DevBurguer. Que tal explorar nossos lanches artesanais quentinhos agora mesmo?
            </p>
            <button type="button" onClick={() => navigate('/cardapio')}>
              Ver Cardápio Completo
            </button>
          </EmptyState>
        ) : (
          orders.map((order) => {
            const orderCode = (order.id || '').slice(-6).toUpperCase();
            const isCancelled = normalize(order.status).includes('cancelado');

            const totalOrderPrice = (order.products || []).reduce(
              (acc, p) => acc + p.price * p.quantity,
              0,
            );

            return (
              <OrderCard key={order.id}>
                <OrderCardHeader>
                  <div className="order-meta">
                    <div className="order-code">
                      Pedido <span>#{orderCode}</span>
                    </div>
                    <div className="order-date">
                      <Clock size={16} color="#FF6B00" />
                      <span>{formatDate(order.created_at || order.createdAt)}</span>
                    </div>
                  </div>

                  <div className={`status-pill ${getStatusClass(order.status)}`}>
                    <span>{order.status}</span>
                  </div>
                </OrderCardHeader>

                {/* Stepper de Acompanhamento em 5 Passos */}
                {!isCancelled && (
                  <StepperTrack>
                    {STEPS.map((step, idx) => {
                      const { isCompleted, isActive } = getStepStatus(order.status, idx);
                      const IconComponent = step.icon;

                      return (
                        <StepItem
                          key={step.key}
                          $isCompleted={isCompleted}
                          $isActive={isActive}
                        >
                          <div className="step-icon">
                            {isCompleted ? (
                              <CheckCircle size={22} weight="fill" />
                            ) : (
                              <IconComponent size={20} weight={isActive ? 'fill' : 'regular'} />
                            )}
                          </div>
                          <span className="step-label">{step.label}</span>
                        </StepItem>
                      );
                    })}
                  </StepperTrack>
                )}

                {/* Lista de Itens do Pedido */}
                <OrderItemsList>
                  {(order.products || []).map((prod) => (
                    <div className="item-row" key={prod.id}>
                      <div className="item-info">
                        <img src={prod.url} alt={prod.name} />
                        <div>
                          <div className="name">{prod.name}</div>
                          <div className="category">{prod.category}</div>
                          {prod.observation && (
                            <div
                              style={{
                                fontSize: '12px',
                                color: '#FF6B00',
                                marginTop: '3px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              <span>📝 Obs:</span>
                              <span style={{ color: '#E2E8F0' }}>{prod.observation}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="item-total">
                        <span className="qtd">{prod.quantity}x</span>
                        <span>{formatPrice(prod.price * prod.quantity)}</span>
                      </div>
                    </div>
                  ))}
                </OrderItemsList>

                <OrderCardFooter>
                  <div className="total-block">
                    <span>Total do Pedido</span>
                    <strong>{formatPrice(totalOrderPrice)}</strong>
                  </div>

                  <div className="buttons-group">
                    <a
                      href={`https://wa.me/5511999998888?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20o%20pedido%20%23${orderCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-help"
                    >
                      <WhatsappLogo size={18} weight="fill" />
                      <span>Ajuda no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      className="btn-reorder"
                      onClick={() => handleReorder(order.products || [])}
                    >
                      <ArrowClockwise size={16} weight="bold" />
                      <span>Pedir Novamente</span>
                    </button>
                  </div>
                </OrderCardFooter>
              </OrderCard>
            );
          })
        )}
      </Content>
    </Container>
  );
}

export default MyOrders;
