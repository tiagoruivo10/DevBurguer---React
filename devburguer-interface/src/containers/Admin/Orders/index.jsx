import { useEffect, useState } from 'react';
import { Clock, Receipt } from '@phosphor-icons/react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { api } from '../../../services/api';
import { orderStatusOptions } from './OrderStatus';
import { Row } from './row';
import {
  Container,
  Filter,
  FilterOptions,
  HeaderContainer,
  TableWrapper,
} from './styles';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('orders');
        setOrders(data);
        setFilteredOrders(data);
      } catch (err) {
        console.error('Erro ao carregar pedidos:', err);
      }
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user?.name || 'Cliente',
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));
    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusOption = orderStatusOptions.find(
        (item) => item.id === activeStatus,
      );

      if (statusOption) {
        const newFilteredOrders = orders.filter(
          (order) => order.status === statusOption.value,
        );
        setFilteredOrders(newFilteredOrders);
      }
    }
  }, [orders, activeStatus]);

  const getStatusCount = (statusValue) => {
    if (statusValue === 'Todos') return orders.length;
    return orders.filter((o) => o.status === statusValue).length;
  };

  return (
    <Container>
      <HeaderContainer>
        <div>
          <h2>
            <Receipt size={28} weight="duotone" />
            Painel de Pedidos
          </h2>
          <p>Gerencie o fluxo de preparo e entrega em tempo real</p>
        </div>
        <div className="total-badge">
          <Clock size={18} />
          <span>{orders.length} pedidos no total</span>
        </div>
      </HeaderContainer>

      <Filter>
        {orderStatusOptions.map((status) => {
          const count = getStatusCount(status.value);
          return (
            <FilterOptions
              key={status.id}
              onClick={() => handleStatus(status)}
              $isActiveStatus={activeStatus === status.id}
            >
              <span>{status.label}</span>
              <span className="count-badge">{count}</span>
            </FilterOptions>
          );
        })}
      </Filter>

      <TableWrapper>
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: '#1E293B',
            color: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #334155',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Table aria-label="tabela de pedidos">
            <TableHead sx={{ backgroundColor: '#111827' }}>
              <TableRow>
                <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }} />
                <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                  Código do Pedido
                </TableCell>
                <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                  Cliente
                </TableCell>
                <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                  Data e Hora
                </TableCell>
                <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>
                  Status Atual
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <Row
                    key={row.orderId}
                    row={row}
                    orders={orders}
                    setOrders={setOrders}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    sx={{ color: '#94A3B8', textAlign: 'center', py: 6 }}
                  >
                    Nenhum pedido encontrado neste status.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </Container>
  );
}

