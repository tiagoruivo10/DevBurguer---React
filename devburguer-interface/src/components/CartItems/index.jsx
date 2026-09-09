import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash, ShoppingBag, NotePencil, X } from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  ItemCard,
  ButtonGroup,
  ProductTotalPrice,
  TrashButton,
  ObservationBox,
  EmptyCart,
} from './styles';

export function CartItems() {
  const {
    cartProducts,
    increaseProducts,
    decreaseProducts,
    deleteProducts,
    updateProductObservation,
  } = useCart();

  const [openedObsId, setOpenedObsId] = useState(null);
  const navigate = useNavigate();

  const toggleObs = (id) => {
    setOpenedObsId((prev) => (prev === id ? null : id));
  };

  if (!cartProducts?.length) {
    return (
      <EmptyCart>
        <div className="icon-box">
          <ShoppingBag size={38} weight="duotone" />
        </div>
        <p>Seu carrinho está vazio</p>
        <span>Que tal escolher um delicioso hambúrguer artesanal para começar?</span>
        <button type="button" onClick={() => navigate('/cardapio')}>
          Explorar Cardápio
        </button>
      </EmptyCart>
    );
  }

  return (
    <Container>
      {cartProducts.map((product) => {
        const isObsOpen = openedObsId === product.id || Boolean(product.observation);

        return (
          <ItemCard key={product.id}>
            <div className="main-row">
              <div className="product-info">
                <img
                  src={product.url}
                  alt={product.name}
                  className="product-thumb"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'http://localhost:3001/product-file/double-cheese.png';
                  }}
                />
                <div className="details">
                  <h4>{product.name}</h4>
                  <span className="unit-price">
                    {formatPrice(product.price)} cada
                  </span>
                </div>
              </div>

              <div className="actions-group">
                <ButtonGroup>
                  <button
                    type="button"
                    onClick={() => decreaseProducts(product.id)}
                    title="Diminuir quantidade"
                  >
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    type="button"
                    onClick={() => increaseProducts(product.id)}
                    title="Aumentar quantidade"
                  >
                    <Plus size={14} weight="bold" />
                  </button>
                </ButtonGroup>

                <ProductTotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </ProductTotalPrice>

                <TrashButton
                  type="button"
                  onClick={() => deleteProducts(product.id)}
                  title="Remover produto"
                >
                  <Trash size={18} />
                </TrashButton>
              </div>
            </div>

            {/* Campo de Observação do Item */}
            <ObservationBox $hasObs={Boolean(product.observation)}>
              {!isObsOpen ? (
                <button
                  type="button"
                  className="obs-trigger"
                  onClick={() => toggleObs(product.id)}
                >
                  <NotePencil size={14} weight="bold" />
                  <span>Adicionar observação (ex: sem cebola, ponto da carne)</span>
                </button>
              ) : (
                <div className="obs-input-wrapper">
                  <NotePencil size={16} color="#FF6B00" weight="bold" />
                  <input
                    type="text"
                    value={product.observation || ''}
                    placeholder="Ex: sem cebola, carne bem passada, sem gelo no refri..."
                    onChange={(e) => updateProductObservation(product.id, e.target.value)}
                    autoFocus={openedObsId === product.id}
                  />
                  {product.observation && (
                    <button
                      type="button"
                      className="clear-btn"
                      onClick={() => updateProductObservation(product.id, '')}
                      title="Limpar observação"
                    >
                      <X size={14} weight="bold" />
                    </button>
                  )}
                </div>
              )}
            </ObservationBox>
          </ItemCard>
        );
      })}
    </Container>
  );
}

export default CartItems;
