import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Check,
  CheckCircle,
  Clock,
  Flame,
  Minus,
  NotePencil,
  Plus,
  ShoppingBag,
  Sparkle,
  Star,
  X,
} from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { getProductDetails } from '../../data/productsInfo';
import { formatPrice } from '../../utils/formatPrice';
import {
  Overlay,
  ModalCard,
  CloseButton,
  ImageBanner,
  ContentBody,
  FooterBar,
} from './styles';

export function ProductModal({ product, isOpen, onClose }) {
  const { putProductInCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [meatDoneness, setMeatDoneness] = useState('Ao ponto');
  const [removedIngredients, setRemovedIngredients] = useState([]);
  const [extraNotes, setExtraNotes] = useState('');

  // Reset states when a new product is opened
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setMeatDoneness('Ao ponto');
      setRemovedIngredients([]);
      setExtraNotes('');
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const defaultDetails = getProductDetails(product.name);

  const description =
    product.description && product.description.trim()
      ? product.description
      : defaultDetails.description;

  const ingredients =
    product.ingredients && product.ingredients.trim()
      ? product.ingredients
          .split(',')
          .map((i) => i.trim())
          .filter(Boolean)
      : defaultDetails.ingredients || [];

  const removable =
    product.removable !== undefined &&
    product.removable !== null &&
    product.removable !== ''
      ? product.removable
          .split(',')
          .map((r) => r.trim())
          .filter(Boolean)
      : defaultDetails.removable || [];

  const isBurger =
    defaultDetails.isBurger ||
    (product.category?.name || product.category || '')
      .toLowerCase()
      .includes('hamb') ||
    product.name.toLowerCase().includes('burger');

  const toggleRemovedIngredient = (item) => {
    setRemovedIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleAddToCart = () => {
    const obsParts = [];

    if (isBurger && meatDoneness) {
      obsParts.push(`Ponto: ${meatDoneness}`);
    }

    if (removedIngredients.length > 0) {
      obsParts.push(removedIngredients.join(', '));
    }

    if (extraNotes.trim()) {
      obsParts.push(`Obs: ${extraNotes.trim()}`);
    }

    const finalObservation = obsParts.join(' • ');

    putProductInCart({
      ...product,
      quantity,
      observation: finalObservation,
    });

    toast.success(
      `🛒 ${quantity}x "${product.name}" adicionado ao carrinho!`,
    );
    onClose();
  };

  const totalPrice = product.price * quantity;

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Fechar">
          <X size={18} weight="bold" />
        </CloseButton>

        <ImageBanner>
          <img
            src={product.url}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'http://localhost:3001/product-file/double-cheese.png';
            }}
          />
          <div className="gradient-overlay" />

          <div className="badge-container">
            {product.offer ? (
              <span className="badge badge-orange">
                <Flame size={13} weight="fill" />
                Oferta Especial
              </span>
            ) : (
              <span className="badge badge-green">
                <Sparkle size={13} weight="fill" />
                Artesanal
              </span>
            )}
          </div>
        </ImageBanner>

        <ContentBody>
          {/* Header Info */}
          <div className="header-info">
            <div className="titles">
              <h2>{product.name}</h2>
              <span className="category-tag">
                {product.category?.name || product.category || 'Cardápio Especial'}
              </span>
            </div>
            <div className="price-tag">{formatPrice(product.price)}</div>
          </div>

          {/* Description */}
          {description && <p className="description">{description}</p>}

          {/* Highlights */}
          {defaultDetails.highlights?.length > 0 && (
            <div className="highlights-row">
              <div className="highlight-pill">
                <Star size={14} weight="fill" color="#FBBF24" />
                <span>4.9 (120+ avaliações)</span>
              </div>
              <div className="highlight-pill">
                <Clock size={14} weight="bold" color="#FF6B00" />
                <span>25 - 35 min</span>
              </div>
              {defaultDetails.highlights.map((tag) => (
                <div className="highlight-pill" key={tag}>
                  <span>✨ {tag}</span>
                </div>
              ))}
            </div>
          )}

          {/* Ingredientes Inclusos */}
          {ingredients?.length > 0 && (
            <div className="section-block">
              <span className="section-title">
                Ingredientes & Composição
              </span>
              <div className="ingredients-grid">
                {ingredients.map((ing) => (
                  <div className="ingredient-item" key={ing}>
                    <CheckCircle size={16} weight="fill" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ponto da Carne (apenas para hambúrgueres) */}
          {isBurger && (
            <div className="section-block">
              <span className="section-title">
                Ponto da Carne
              </span>
              <div className="meat-options">
                {[
                  { id: 'Ao ponto', label: 'Ao Ponto', sub: 'Rosadinho no centro (Recomendado)' },
                  { id: 'Bem passado', label: 'Bem Passado', sub: 'Carne firme e bem tostada' },
                  { id: 'Mal passado', label: 'Ao Ponto p/ Mal', sub: 'Muito suculento e macio' },
                ].map((item) => (
                  <div
                    key={item.id}
                    className={`meat-card ${meatDoneness === item.id ? 'selected' : ''}`}
                    onClick={() => setMeatDoneness(item.id)}
                  >
                    <span className="label">{item.label}</span>
                    <span className="sub">{item.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Remover Ingredientes (Personalização rápida) */}
          {removable?.length > 0 && (
            <div className="section-block">
              <span className="section-title">
                Prefere sem algum item?
                <span className="optional">(Clique para retirar)</span>
              </span>
              <div className="remove-chips">
                {removable.map((rem) => {
                  const isActive = removedIngredients.includes(rem);
                  return (
                    <button
                      type="button"
                      key={rem}
                      className={`remove-chip ${isActive ? 'active' : ''}`}
                      onClick={() => toggleRemovedIngredient(rem)}
                    >
                      {isActive ? <Check size={14} weight="bold" /> : <X size={14} />}
                      <span>{rem}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Observação Adicional */}
          <div className="section-block">
            <span className="section-title">
              Observações Adicionais
              <span className="optional">(Opcional)</span>
            </span>
            <div className="obs-textarea-wrapper">
              <NotePencil size={18} color="#FF6B00" weight="bold" />
              <textarea
                placeholder="Ex: sem picles, maionese à parte, caprichar no guardanapo..."
                value={extraNotes}
                onChange={(e) => setExtraNotes(e.target.value)}
              />
            </div>
          </div>
        </ContentBody>

        {/* Footer com contador e botão */}
        <FooterBar>
          <div className="counter-group">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              disabled={quantity <= 1}
              title="Diminuir quantidade"
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              title="Aumentar quantidade"
            >
              <Plus size={14} weight="bold" />
            </button>
          </div>

          <button
            type="button"
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={18} weight="bold" />
            <span>Adicionar ao Pedido &bull; {formatPrice(totalPrice)}</span>
          </button>
        </FooterBar>
      </ModalCard>
    </Overlay>
  );
}

ProductModal.propTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
