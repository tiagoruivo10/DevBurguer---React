import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ArrowRight, Lock, Ticket, X } from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container, CouponBox } from './styles';

export function CartResume() {
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryTax] = useState(500); // 500 centavos = R$ 5,00
  const [couponInput, setCouponInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    cartProducts,
    coupon,
    applyCoupon,
    removeCoupon,
    calculateDiscount,
  } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setSubtotal(sumAllItems);
  }, [cartProducts]);

  const discount = calculateDiscount(subtotal, deliveryTax);
  const isFreeDelivery = coupon?.type === 'delivery';
  const effectiveDeliveryTax = isFreeDelivery ? 0 : deliveryTax;
  const totalToPay = Math.max(
    0,
    subtotal +
      effectiveDeliveryTax -
      (coupon?.type === 'delivery' ? 0 : discount),
  );

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (applyCoupon(couponInput)) {
      setCouponInput('');
    }
  };

  const submitOrder = async () => {
    if (!cartProducts.length) {
      toast.warn('Adicione produtos ao carrinho para continuar!');
      return;
    }

    const products = cartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price,
      observation: product.observation || '',
    }));

    try {
      setIsLoading(true);
      const { data } = await api.post('/create-payment-intent', {
        products,
        discount: discount,
        deliveryTax: effectiveDeliveryTax,
      });

      navigate('/checkout', {
        state: data,
      });
    } catch {
      toast.error('Erro ao iniciar pagamento. Tente novamente!', {
        theme: 'dark',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Bloco do Cupom de Desconto */}
      <CouponBox>
        <div className="coupon-header">
          <Ticket size={18} weight="fill" />
          <span>Cupom de Desconto</span>
        </div>

        {coupon ? (
          <div className="active-coupon-badge">
            <div className="tag-info">
              <Ticket size={16} weight="bold" />
              <span>
                {coupon.code} • {coupon.label}
              </span>
            </div>
            <button
              type="button"
              className="remove-coupon-btn"
              onClick={removeCoupon}
              title="Remover cupom"
            >
              <X size={15} weight="bold" />
            </button>
          </div>
        ) : (
          <form className="coupon-input-group" onSubmit={handleApplyCoupon}>
            <input
              type="text"
              placeholder="Digite seu cupom..."
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
            />
            <button type="submit">Aplicar</button>
          </form>
        )}

        <span className="coupon-hint">
          💡 Dica: use <strong>BURGER10</strong> (10% OFF), <strong>FRETEGRATIS</strong> ou <strong>PRIMEIRACOMPRA</strong>
        </span>
      </CouponBox>

      {/* Resumo Financeiro do Pedido */}
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>

          <div className="row">
            <span>Subtotal ({cartProducts.length} itens)</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>

          {discount > 0 && (
            <div className="row discount-row">
              <span>Desconto ({coupon?.code})</span>
              <strong>- {formatPrice(discount)}</strong>
            </div>
          )}

          <div className="row">
            <span>Taxa de Entrega</span>
            <strong>
              {isFreeDelivery ? (
                <span style={{ color: '#34d399', fontWeight: 800 }}>GRÁTIS</span>
              ) : (
                formatPrice(deliveryTax)
              )}
            </strong>
          </div>
        </div>

        <div className="container-bottom">
          <p>Total a Pagar</p>
          <strong>{formatPrice(totalToPay)}</strong>
        </div>
      </Container>

      <Button
        onClick={submitOrder}
        disabled={!cartProducts.length || isLoading}
      >
        <Lock size={18} weight="bold" />
        {isLoading ? 'Processando...' : 'Finalizar Pedido'}
        <ArrowRight size={18} weight="bold" />
      </Button>
    </div>
  );
}

export default CartResume;
