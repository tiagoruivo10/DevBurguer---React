import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  CheckCircle,
  PencilSimple,
  Plus,
  Trash,
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
import { ConfirmDeleteModal } from '../../../components/ConfirmDeleteModal';
import { formatPrice } from '../../../utils/formatPrice';
import {
  ActionButtons,
  Container,
  DeleteButton,
  DesktopTableWrapper,
  MobileProductsContainer,
  MobileProductCard,
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
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  async function handleDeleteProduct() {
    if (!productToDelete) return;

    try {
      setIsDeleting(true);
      await toast.promise(api.delete(`/products/${productToDelete.id}`), {
        pending: 'Excluindo produto do cardápio...',
        success: 'Produto excluído com sucesso! 🗑️',
        error: 'Falha ao excluir produto, tente novamente.',
      });

      setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
      setProductToDelete(null);
    } catch {
      // Toast already notifies error
    } finally {
      setIsDeleting(false);
    }
  }

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

      <DesktopTableWrapper>
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
                      <ActionButtons>
                        <EditButton
                          type="button"
                          onClick={() => editProduct(product)}
                          title="Editar Produto"
                        >
                          <PencilSimple size={18} weight="bold" />
                        </EditButton>
                        <DeleteButton
                          type="button"
                          onClick={() => setProductToDelete(product)}
                          title="Excluir Produto"
                        >
                          <Trash size={18} weight="bold" />
                        </DeleteButton>
                      </ActionButtons>
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
      </DesktopTableWrapper>

      {/* Cards Otimizados para Celular */}
      <MobileProductsContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <MobileProductCard key={product.id}>
              <div className="card-top">
                <img
                  src={product.url}
                  alt={product.name}
                  className="prod-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&q=80';
                  }}
                />
                <div className="prod-info">
                  <span className="prod-name">{product.name}</span>
                  <span className="prod-price">{formatPrice(product.price)}</span>
                </div>
              </div>

              <div className="card-badge-row">
                <span className="badge-label">Status no Cardápio:</span>
                {isOffer(product.offer)}
              </div>

              <div className="mobile-actions">
                <button
                  type="button"
                  className="mobile-edit-btn"
                  onClick={() => editProduct(product)}
                >
                  <PencilSimple size={18} weight="bold" />
                  Editar
                </button>
                <button
                  type="button"
                  className="mobile-delete-btn"
                  onClick={() => setProductToDelete(product)}
                >
                  <Trash size={18} weight="bold" />
                  Excluir
                </button>
              </div>
            </MobileProductCard>
          ))
        ) : (
          <div className="empty-state">
            Nenhum produto cadastrado ou encontrado na busca.
          </div>
        )}
      </MobileProductsContainer>

      <ConfirmDeleteModal
        isOpen={Boolean(productToDelete)}
        onClose={() => setProductToDelete(null)}
        onConfirm={handleDeleteProduct}
        productName={productToDelete?.name}
        isLoading={isDeleting}
      />
    </Container>
  );
}

