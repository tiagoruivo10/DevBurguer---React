import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import { CheckCircle, XCircle, Clock, ArrowRight } from '@phosphor-icons/react';
import '../../components/Stripe/styles.css';

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: 'Pagamento Aprovado com Sucesso! 🎉',
    subtext: 'Seu pedido já foi enviado para a nossa cozinha e você pode acompanhar cada etapa do preparo!',
    icon: <CheckCircle size={56} weight="fill" color="#10B981" />,
    buttonText: 'Acompanhar Meu Pedido',
    url: '/meus-pedidos',
  },

  processing: {
    text: 'Pagamento em Processamento',
    subtext: 'Aguardando a confirmação da sua instituição financeira.',
    icon: <Clock size={56} weight="duotone" color="#F59E0B" />,
    buttonText: 'Voltar para a Loja',
    url: '/',
  },
  requires_payment_method: {
    text: 'Falha na Autorização do Pagamento',
    subtext: 'Não conseguimos processar o pagamento com os dados informados. Tente novamente.',
    icon: <XCircle size={56} weight="fill" color="#EF4444" />,
    buttonText: 'Tentar Novamente no Carrinho',
    url: '/carrinho',
  },
  default: {
    text: 'Algo deu errado com o pagamento',
    subtext: 'Houve uma instabilidade. Por favor, tente novamente.',
    icon: <XCircle size={56} weight="fill" color="#EF4444" />,
    buttonText: 'Tentar Novamente',
    url: '/carrinho',
  },
};

export function CompletePayment() {
  const stripe = useStripe();
  const navigate = useNavigate();

  const [status, setStatus] = useState('default');
  const [intentId, setIntentId] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }

      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  const currentStatus = STATUS_CONTENT_MAP[status] || STATUS_CONTENT_MAP.default;

  return (
    <div className="container">
      <div id="payment-status">
        <div id="status-icon" style={{ height: 'auto', width: 'auto', background: 'transparent' }}>
          {currentStatus.icon}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 id="status-text" className="status-title">
            {currentStatus.text}
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '8px', lineHeight: '1.5' }}>
            {currentStatus.subtext}
          </p>
        </div>

        {intentId && (
          <div id="details-table">
            <table>
              <tbody>
                <tr>
                  <td className="TableLabel">ID da Transação</td>
                  <td id="intent-id" className="TableContent">
                    #{intentId.slice(-12)}
                  </td>
                </tr>
                <tr>
                  <td className="TableLabel">Status</td>
                  <td id="intent-status" className="TableContent" style={{ textTransform: 'capitalize' }}>
                    {status === 'succeeded' ? 'Aprovado' : status}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <button
          type="button"
          id="retry-button"
          onClick={() => navigate(currentStatus.url)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <span>{currentStatus.buttonText}</span>
          <ArrowRight size={18} weight="bold" />
        </button>
      </div>
    </div>
  );
}

