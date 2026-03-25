import Logo from '../../assets/logo.png';
import { CartItems } from '../../components/CartItems';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo tiago burguer" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems></CartItems>
        {/* <CartResume /> */}
      </Content>
    </Container>
  );
}
