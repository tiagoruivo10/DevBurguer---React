import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { api } from '../../../services/api';
import { formatDate } from '../../../utils/formatDate';
import { formatPrice } from '../../../utils/formatPrice';
import { formatImageUrl } from '../../../utils/formatImageUrl';
import { orderStatusOptions } from './OrderStatus';
import { ProductImage, SelectStatus, selectStatusStyles } from './styles';

export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function newStatusOrder(id, status) {
    try {
      setLoading(true);

      await api.put(`orders/${id}`, { status });

      const newOrders = orders.map((order) =>
        order._id === id ? { ...order, status } : order,
      );

      setOrders(newOrders);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <TableRow
        sx={{
          '& > *': { borderBottom: '1px solid rgba(255, 255, 255, 0.05)' },
          backgroundColor: open ? 'rgba(255, 255, 255, 0.02)' : 'inherit',
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: '#FF6B00' }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ color: '#F8FAFC', fontWeight: 600 }}>
          #{row.orderId.slice(-6).toUpperCase()}
        </TableCell>
        <TableCell sx={{ color: '#F8FAFC', fontWeight: 500 }}>{row.name}</TableCell>
        <TableCell sx={{ color: '#94A3B8' }}>{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus
            styles={selectStatusStyles}
            classNamePrefix="react-select"
            options={orderStatusOptions.filter((status) => status.id !== 0)}
            placeholder="Status"
            defaultValue={orderStatusOptions.find(
              (status) => status.value === row.status || null,
            )}
            onChange={(status) => newStatusOrder(row.orderId, status.value)}
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </TableCell>
      </TableRow>


      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 2,
                padding: 2,
                backgroundColor: '#111827',
                borderRadius: '12px',
                border: '1px solid #334155',
              }}
            >
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ color: '#FF6B00', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Itens do Pedido ({row.products.length} itens)
              </Typography>
              <Table size="small" aria-label="itens do pedido">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Foto</TableCell>
                    <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Produto</TableCell>
                    <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Categoria</TableCell>
                    <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Qtd</TableCell>
                    <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Preço Unit.</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id} sx={{ '&:last-child td': { border: 0 } }}>
                      <TableCell sx={{ width: '60px' }}>
                        <ProductImage
                          src={formatImageUrl(product.url)}
                          alt={product.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&q=80';
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {product.name}
                        {product.observation && (
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{
                              color: '#FF6B00',
                              fontWeight: 700,
                              backgroundColor: 'rgba(255, 107, 0, 0.12)',
                              border: '1px solid rgba(255, 107, 0, 0.3)',
                              borderRadius: '6px',
                              padding: '2px 8px',
                              marginTop: '4px',
                              width: 'fit-content',
                            }}
                          >
                            📝 Obs: {product.observation}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell sx={{ color: '#94A3B8' }}>{product.category}</TableCell>
                      <TableCell sx={{ color: '#FF6B00', fontWeight: 800 }}>{product.quantity}x</TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>{formatPrice(product.price)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
