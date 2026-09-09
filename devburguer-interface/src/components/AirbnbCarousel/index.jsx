import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  CaretLeft,
  CaretRight,
  Heart,
  Star,
  ShoppingBag,
  Clock,
  Sparkle,
  Flame,
  ArrowRight,
} from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { ProductModal } from '../ProductModal';
import {
  Section,
  Header,
  NavButton,
  ViewAllLink,
  ScrollTrack,
  CardWrapper,
  Card,
  ImageContainer,
  CardContent,
  CardFooter,
} from './styles';

export function AirbnbCard({ item, isCategory = false, onOpenDetails }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { putProductInCart } = useCart();
  const navigate = useNavigate();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.info(
      !isFavorite
        ? `❤️ "${item.name}" adicionado aos favoritos!`
        : `Removido dos favoritos`,
    );
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    putProductInCart(item);
    toast.success(`🛒 "${item.name}" adicionado ao carrinho!`);
  };

  const handleCardClick = () => {
    if (isCategory) {
      navigate(`/cardapio?categoria=${item.id}`);
    } else if (onOpenDetails) {
      onOpenDetails(item);
    } else {
      navigate(`/cardapio`);
    }
  };

  return (
    <CardWrapper>
      <Card onClick={handleCardClick}>
        <ImageContainer $isFavorite={isFavorite}>
          <img
            src={item.url || item.image}
            alt={item.name}
            className="card-img"
            loading="lazy"
          />

          {/* Badge flutuante */}
          {item.badge ? (
            <div className="badge-pill">
              <Sparkle size={12} weight="fill" />
              <span>{item.badge}</span>
            </div>
          ) : item.offer ? (
            <div className="badge-pill">
              <Flame size={12} weight="fill" />
              <span>Oferta Especial</span>
            </div>
          ) : null}

          {/* Botão de Favoritar */}
          <button
            type="button"
            className="favorite-btn"
            onClick={handleFavoriteClick}
            aria-label="Favoritar"
          >
            <Heart size={18} weight={isFavorite ? 'fill' : 'bold'} />
          </button>
        </ImageContainer>

        <CardContent>
          <h3 className="card-title" title={item.name}>
            {item.name}
          </h3>

          <span className="card-category">
            {item.category?.name ||
              item.categoryName ||
              (isCategory ? 'Explorar Cardápio' : 'Hambúrguer Artesanal')}
          </span>

          <div className="delivery-eta">
            <Clock size={13} weight="bold" />
            <span>25 - 35 min &bull; Entrega Express</span>
          </div>
        </CardContent>

        <CardFooter>
          <div className="rating-group">
            <Star size={14} weight="fill" />
            <span>{item.rating || '4.9'}</span>
            <span className="review-count">({item.reviews || '120+'})</span>
          </div>

          {!isCategory && (
            <div className="price-group">
              <span className="price-value">{formatPrice(item.price)}</span>
              <button
                type="button"
                className="add-btn"
                onClick={handleAddToCart}
                title="Adicionar ao carrinho"
              >
                <ShoppingBag size={16} weight="bold" />
              </button>
            </div>
          )}
        </CardFooter>
      </Card>
    </CardWrapper>
  );
}

export function AirbnbCarouselSection({
  title = 'Destaques ›',
  items = [],
  viewAllHref = '/cardapio',
  isCategory = false,
}) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <Section>
      <Header>
        <div className="title-group" onClick={() => navigate(viewAllHref)}>
          <h2>
            {title}
            <span className="arrow">›</span>
          </h2>
        </div>

        <div className="controls-group">
          <NavButton
            onClick={handleScrollLeft}
            aria-label="Rolar para esquerda"
          >
            <CaretLeft size={18} weight="bold" />
          </NavButton>

          <NavButton
            onClick={handleScrollRight}
            aria-label="Rolar para direita"
          >
            <CaretRight size={18} weight="bold" />
          </NavButton>

          <ViewAllLink to={viewAllHref}>
            <span>Ver todos</span>
            <ArrowRight size={14} weight="bold" />
          </ViewAllLink>
        </div>
      </Header>

      <ScrollTrack ref={scrollRef}>
        {items.map((item) => (
          <AirbnbCard
            key={item.id}
            item={item}
            isCategory={isCategory}
            onOpenDetails={setSelectedProduct}
          />
        ))}
      </ScrollTrack>

      {!isCategory && (
        <ProductModal
          product={selectedProduct}
          isOpen={Boolean(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Section>
  );
}

export function AirbnbCarousel() {
  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [categoriesRes, productsRes] = await Promise.all([
          api.get('/categories'),
          api.get('/products'),
        ]);

        const getCategoryBadge = (name = '') => {
          const n = name.toLowerCase();
          if (n.includes('hamb') || n.includes('burger')) return 'Mais Pedido';
          if (
            n.includes('acompanha') ||
            n.includes('batata') ||
            n.includes('porca')
          )
            return 'Crocantes';
          if (n.includes('bebida')) return 'Refrescante';
          if (n.includes('sobremesa') || n.includes('doce'))
            return 'Irresistível';
          return 'Popular';
        };

        const categoryOrder = ['hamb', 'acompanha', 'bebida', 'sobremesa'];

        const sortedCategories = [...categoriesRes.data].sort((a, b) => {
          const nameA = (a.name || '').toLowerCase();
          const nameB = (b.name || '').toLowerCase();
          const idxA = categoryOrder.findIndex((prefix) =>
            nameA.includes(prefix),
          );
          const idxB = categoryOrder.findIndex((prefix) =>
            nameB.includes(prefix),
          );
          return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
        });

        const formattedCategories = sortedCategories.map((cat, idx) => ({
          ...cat,
          badge: getCategoryBadge(cat.name),
          rating: (4.9 + (idx % 2) * 0.05).toFixed(1),
          reviews: 140 + idx * 35,
        }));

        const onlyOffers = productsRes.data
          .filter((p) => p.offer)
          .map((p, idx) => ({
            ...p,
            badge: idx === 0 ? 'Chef Special' : 'Oferta do Dia',
            rating: (4.9 + (idx % 3) * 0.03).toFixed(2),
            reviews: 90 + idx * 25,
          }));

        setCategories(formattedCategories);
        setOffers(
          onlyOffers.length > 0 ? onlyOffers : productsRes.data.slice(0, 6),
        );
      } catch (err) {
        console.error('Erro ao carregar itens do carrossel Airbnb:', err);
      }
    }

    loadData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <AirbnbCarouselSection
        title="Categorias em Destaque"
        items={categories}
        viewAllHref="/cardapio"
        isCategory={true}
      />

      <AirbnbCarouselSection
        title="Ofertas do Dia & Mais Pedidos"
        items={offers}
        viewAllHref="/cardapio"
        isCategory={false}
      />
    </div>
  );
}

export default AirbnbCarousel;
