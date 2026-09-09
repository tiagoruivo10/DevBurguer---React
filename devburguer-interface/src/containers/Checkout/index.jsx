import { useLocation, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { WarningCircle, ArrowLeft } from '@phosphor-icons/react';

import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const clientSecret = location.state?.clientSecret;

  if (!clientSecret) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          gap: '16px',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <WarningCircle size={48} color="#FF6B00" />
        <h2 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 800 }}>
          Sessão de pagamento não iniciada
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '400px' }}>
          Para realizar o pagamento, finalize seu pedido através do carrinho de compras.
        </p>
        <button
          type="button"
          onClick={() => navigate('/carrinho')}
          style={{
            background: 'linear-gradient(135deg, #FF6B00, #EA580C)',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            marginTop: '8px',
          }}
        >
          <ArrowLeft size={18} weight="bold" />
          Voltar para o Carrinho
        </button>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'night',
          variables: {
            colorPrimary: '#FF6B00',
            colorBackground: '#1E293B',
            colorText: '#FFFFFF',
            colorDanger: '#EF4444',
            borderRadius: '12px',
          },
        },
      }}
    >
      <CheckoutForm />
    </Elements>
  );
}

