import { useNavigate, useResolvedPath } from 'react-router-dom';
import { UserCircle, ShoppingCart, GearSix, SignIn } from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import {
  AdminBadge,
  Badge,
  Brand,
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { cartProducts } = useCart();
  const { pathname } = useResolvedPath();

  const totalCartItems = cartProducts?.reduce(
    (total, product) => total + product.quantity,
    0,
  ) || 0;

  function logoutUser() {
    logout();
    navigate('/login');
  }

  const isUserLogged = Boolean(userInfo && userInfo.name);

  return (
    <Container>
      <Content>
        <Navigation>
          <Brand to="/">
            🍔 <span>Dev</span>Burguer
          </Brand>
          <div className="nav-links">
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
            {isUserLogged && (
              <HeaderLink to="/meus-pedidos" $isActive={pathname === '/meus-pedidos'}>
                Meus Pedidos
              </HeaderLink>
            )}
            {userInfo?.admin && (
              <AdminBadge to="/admin/pedidos">
                <GearSix size={18} />
                Painel Admin
              </AdminBadge>
            )}

          </div>
        </Navigation>

        <Options>
          {isUserLogged ? (
            <Profile>
              <UserCircle color="#FF6B00" size={32} />
              <div>
                <p>
                  Olá, <span>{userInfo.name.split(' ')[0]}</span>
                </p>
                <Logout onClick={logoutUser}>Sair</Logout>
              </div>
            </Profile>
          ) : (
            <HeaderLink to="/login" className="login-btn">
              <SignIn size={20} />
              Entrar
            </HeaderLink>
          )}

          <LinkContainer to="/carrinho">
            <div className="cart-icon-wrapper">
              <ShoppingCart size={26} />
              {totalCartItems > 0 && <Badge>{totalCartItems}</Badge>}
            </div>
            <span>Carrinho</span>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}

