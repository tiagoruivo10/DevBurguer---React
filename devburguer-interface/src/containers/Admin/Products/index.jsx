import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  PencilSimple,
  Plus,
  XCircle,
  List,
  MagnifyingGlass,
} from '@phosphor-icons/react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import {
  Container,
  ProductImage,
  EditButton,
  HeaderContainer,
  NewProductButton,
  OfferBadge,
  SearchWrapper,
} from './styles';

export function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (err) {
        console.error('Erro ao carregar produtos:', err);
      }
    }

    loadProducts();
  }, []);

  function isOffer(offer) {
    if (offer) {
      return (
        <OfferBadge $isOffer={true}>
          <CheckCircle size={16} weight="fill" />
          Em Oferta
        </OfferBadge>
      );
    }
    return (
      <OfferBadge $isOffer={false}>
        <XCircle size={16} weight="fill" />
        Preço Normal
      </OfferBadge>
    );
  }

  function editProduct(product) {
    navigate('/admin/editar-produto', { state: { product } });
  }

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container>
      <HeaderContainer>
        <div>
          <h2>
            <List size={28} weight="duotone" />
            Gestão de Cardápio & Produtos
          </h2>
          <p>Cadastre, edite preços e gerencie ofertas ativas no cardápio</p>
        </div>
        <NewProductButton onClick={() => navigate('/admin/novo-produto')}>
          <Plus size={20} weight="bold" />
          Novo Produto
        </NewProductButton>
      </HeaderContainer>

      <SearchWrapper>
        <div className="search-input">
          <MagnifyingGlass size={20} />
          <input
            type="text"
            placeholder="Buscar produto por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </SearchWrapper>

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
        <Table sx={{ minWidth: 650 }} aria-label="tabela de produtos">
          <TableHead sx={{ backgroundColor: '#111827' }}>
            <TableRow>
              <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Foto</TableCell>
              <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }}>Nome do Produto</TableCell>
              <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }} align="center">
                Preço
              </TableCell>
              <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }} align="center">
                Status Oferta
              </TableCell>
              <TableCell sx={{ color: '#94A3B8', fontWeight: 700 }} align="center">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '& > *': { borderBottom: '1px solid rgba(255, 255, 255, 0.05)' },
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.02)' },
                  }}
                >
                  <TableCell sx={{ width: '80px' }}>
                    <ProductImage src={product.url} alt={product.name} />
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                    {product.name}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#FF6B00', fontWeight: 800, fontSize: '15px' }}>
                    {formatPrice(product.price)}
                  </TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <EditButton
                      type="button"
                      onClick={() => editProduct(product)}
                      title="Editar Produto"
                    >
                      <PencilSimple size={18} weight="bold" />
                    </EditButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  sx={{ color: '#94A3B8', textAlign: 'center', py: 6 }}
                >
                  Nenhum produto cadastrado ou encontrado na busca.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

