import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, MagnifyingGlass, Sparkle } from '@phosphor-icons/react';

import { CardProduct } from '../../components/CardProduct';
import { ProductModal } from '../../components/ProductModal';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Banner,
  BannerContent,
  CategoryButton,
  CategoryMenu,
  Container,
  EmptyState,
  ProductsContainer,
  ReturnButton,
  SearchContainer,
} from './styles';

function getCategoryIcon(name = '') {
  const n = (name || '').toLowerCase();
  if (n === 'todos') return '🍽️';
  if (n.includes('hamb') || n.includes('burger')) return '🍔';
  if (n.includes('acompanha') || n.includes('batata') || n.includes('porca')) return '🍟';
  if (n.includes('bebida')) return '🥤';
  if (n.includes('sobremesa') || n.includes('doce')) return '🍫';
  return '✨';
}

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');
    return categoryId || 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      const newCategories = [{ id: 0, name: 'Todos' }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');
      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));
      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 0 || product.category_id === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      <Banner>
        <ReturnButton onClick={() => navigate('/')}>
          <ArrowLeft size={18} weight="bold" />
          Voltar para Home
        </ReturnButton>

        <BannerContent>
          <div className="badge">
            <Sparkle weight="fill" size={16} />
            <span>Cardápio Artesanal</span>
          </div>
          <h1>Nosso Cardápio</h1>
          <p>Feito na hora com ingredientes frescos e carnes nobres selecionadas.</p>
        </BannerContent>
      </Banner>

      <SearchContainer>
        <div className="search-box">
          <MagnifyingGlass size={22} />
          <input
            type="text"
            placeholder="Buscar por nome do hambúrguer, bebida ou sobremesa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </SearchContainer>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            <span>{getCategoryIcon(category.name)}</span>
            <span>{category.name}</span>
          </CategoryButton>
        ))}
      </CategoryMenu>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto 20px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>
          {filteredProducts.length}{' '}
          {filteredProducts.length === 1
            ? 'delícia encontrada'
            : 'delícias encontradas'}
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <CardProduct
              product={product}
              key={product.id}
              onOpenDetails={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </ProductsContainer>
      ) : (
        <EmptyState>
          <p>🍔 Nenhum produto encontrado.</p>
          <span>Tente mudar de categoria ou pesquisar por outro termo.</span>
        </EmptyState>
      )}

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </Container>
  );
}

