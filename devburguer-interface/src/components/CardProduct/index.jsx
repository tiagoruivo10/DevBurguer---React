import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Clock, Flame, Heart, ShoppingBag, Sparkle, Star } from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  ImageContainer,
  CardContent,
  CardFooter,
} from './styles';

export function CardProduct({ product, onOpenDetails }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { putProductInCart } = useCart();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.info(
      !isFavorite
        ? `❤️ "${product.name}" adicionado aos favoritos!`
        : `Removido dos favoritos`
    );
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    putProductInCart(product);
    toast.success(`🛒 "${product.name}" adicionado ao carrinho!`);
  };

  const handleCardClick = () => {
    if (onOpenDetails) {
      onOpenDetails(product);
    }
  };

  return (
    <Container onClick={handleCardClick}>
      <ImageContainer $isFavorite={isFavorite}>
        <img
          src={product.url}
          alt={product.name}
          className="card-img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'http://localhost:3001/product-file/double-cheese.png';
          }}
        />

        {/* Badge Flutuante */}
        {product.offer ? (
          <div className="badge-pill">
            <Flame size={12} weight="fill" />
            <span>Oferta Especial</span>
          </div>
        ) : (
          <div className="badge-pill" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF' }}>
            <Sparkle size={12} weight="fill" />
            <span>Artesanal</span>
          </div>
        )}

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
        <h3 className="card-title" title={product.name}>
          {product.name}
        </h3>

        <span className="card-category">
          {product.category?.name || product.category || 'Hambúrguer Artesanal'}
        </span>

        <div className="delivery-eta">
          <Clock size={13} weight="bold" />
          <span>25 - 35 min &bull; Feito na hora</span>
        </div>
      </CardContent>

      <CardFooter>
        <div className="rating-group">
          <Star size={14} weight="fill" />
          <span>4.9</span>
          <span className="review-count">(120+)</span>
        </div>

        <div className="price-group">
          <span className="price-value">
            {product.currencyValue || formatPrice(product.price)}
          </span>
          <button
            type="button"
            className="add-btn"
            onClick={handleAddToCart}
            title="Adicionar ao carrinho"
          >
            <ShoppingBag size={17} weight="bold" />
          </button>
        </div>
      </CardFooter>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardProduct;
