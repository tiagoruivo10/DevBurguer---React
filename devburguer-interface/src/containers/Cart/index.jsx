import { ShoppingCart } from '@phosphor-icons/react';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <div className="badge">
          <ShoppingCart size={18} weight="fill" />
          <span>Finalização de Pedido</span>
        </div>
        <Title>Seu Carrinho de Compras</Title>
        <p>Confira os itens selecionados antes de prosseguir para o pagamento.</p>
      </Banner>

      <Content>
        <div className="cart-items-wrapper">
          <CartItems />
        </div>
        <div className="cart-resume-wrapper">
          <CartResume />
        </div>
      </Content>
    </Container>
  );
}

