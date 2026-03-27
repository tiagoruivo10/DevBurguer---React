import { useLocation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';

import { CheckoutForm } from '../../components';
import stripePromisse from '../../config/stripeConfig';

export function Checkout() {
  const location = useLocation();

  const clientSecret = location.state?.clientSecret;

  if (!clientSecret) {
    return <div>Erro, volte e tente novamente</div>;
  }

  return (
    <Elements stripe={stripePromisse} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
