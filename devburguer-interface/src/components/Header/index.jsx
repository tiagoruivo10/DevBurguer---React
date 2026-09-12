import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import {
  UserCircle,
  ShoppingCart,
  GearSix,
  SignIn,
  SignOut,
  House,
  ForkKnife,
  Receipt,
  List,
  X,
} from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import {
  AdminBadge,
  Badge,
  Brand,
  Container,
  Content,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerLink,
  DrawerLoginButton,
  DrawerLogoutButton,
  DrawerNav,
  DrawerProfile,
  HamburgerButton,
  HeaderLink,
  LinkContainer,
  Logout,
  MobileActions,
  MobileCartButton,
  MobileDrawer,
  MobileOverlay,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { cartProducts } = useCart();
  const { pathname } = useResolvedPath();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalCartItems =
    cartProducts?.reduce((total, product) => total + product.quantity, 0) || 0;

  function logoutUser() {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/login');
  }

  // Fechar o menu mobile ao navegar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Travar o scroll do body quando o drawer estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isUserLogged = Boolean(userInfo && userInfo.name);
  const firstName = userInfo?.name ? userInfo.name.split(' ')[0] : '';

  return (
    <>
      <Container>
        <Content>
          <Navigation>
            <Brand to="/" onClick={() => setIsMobileMenuOpen(false)}>
              🍔 <span>Dev</span>Burguer
            </Brand>

            {/* Links Desktop */}
            <div className="nav-links">
              <HeaderLink to="/" $isActive={pathname === '/'}>
                Home
              </HeaderLink>
              <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                Cardápio
              </HeaderLink>
              {isUserLogged && (
                <HeaderLink
                  to="/meus-pedidos"
                  $isActive={pathname === '/meus-pedidos'}
                >
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

          {/* Opções Desktop */}
          <Options>
            {isUserLogged ? (
              <Profile>
                <UserCircle color="#FF6B00" size={32} />
                <div>
                  <p>
                    Olá, <span>{firstName}</span>
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

          {/* Botões Visíveis Apenas no Mobile */}
          <MobileActions>
            <MobileCartButton
              to="/carrinho"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Meu Carrinho"
            >
              <ShoppingCart size={22} weight="bold" />
              {totalCartItems > 0 && <Badge>{totalCartItems}</Badge>}
            </MobileCartButton>

            <HamburgerButton
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              $isOpen={isMobileMenuOpen}
              aria-label="Abrir Menu de Navegação"
            >
              {isMobileMenuOpen ? (
                <X size={22} weight="bold" />
              ) : (
                <List size={22} weight="bold" />
              )}
            </HamburgerButton>
          </MobileActions>
        </Content>
      </Container>

      {/* Portal direto no document.body para que nenhum backdrop-filter ou container interfira */}
      {typeof document !== 'undefined' &&
        createPortal(
          <>
            <MobileOverlay
              $isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <MobileDrawer $isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
              <DrawerHeader>
                <div className="drawer-brand">
                  🍔 <span>Dev</span>Burguer
                </div>
                <DrawerCloseButton
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X size={20} weight="bold" />
                </DrawerCloseButton>
              </DrawerHeader>

              <DrawerProfile>
                {isUserLogged ? (
                  <>
                    <UserCircle color="#FF6B00" size={38} weight="duotone" />
                    <div className="info">
                      <span className="name">Olá, {firstName}!</span>
                      <span className="role">
                        {userInfo?.admin ? 'Administrador' : 'Cliente Vip'}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="login-prompt">
                    <div className="prompt-text">
                      <span className="title">Seja bem-vindo(a)!</span>
                      <span className="sub">Acesse sua conta para pedir</span>
                    </div>
                    <DrawerLoginButton
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <SignIn size={18} weight="bold" />
                      <span>Entrar</span>
                    </DrawerLoginButton>
                  </div>
                )}
              </DrawerProfile>

              <DrawerNav>
                <DrawerLink
                  to="/"
                  $isActive={pathname === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <House size={20} weight="bold" />
                  <span>Home</span>
                </DrawerLink>

                <DrawerLink
                  to="/cardapio"
                  $isActive={pathname === '/cardapio'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ForkKnife size={20} weight="bold" />
                  <span>Cardápio</span>
                </DrawerLink>

                <DrawerLink
                  to="/meus-pedidos"
                  $isActive={pathname === '/meus-pedidos'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Receipt size={20} weight="bold" />
                  <span>Meus Pedidos</span>
                </DrawerLink>

                <DrawerLink
                  to="/carrinho"
                  $isActive={pathname === '/carrinho'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart size={20} weight="bold" />
                  <span>Meu Carrinho</span>
                  {totalCartItems > 0 && (
                    <span className="badge-count">{totalCartItems}</span>
                  )}
                </DrawerLink>

                {userInfo?.admin && (
                  <DrawerLink
                    to="/admin/pedidos"
                    $isActive={pathname.startsWith('/admin')}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(109, 40, 217, 0.2))',
                      borderColor: 'rgba(139, 92, 246, 0.4)',
                      color: '#C084FC',
                    }}
                  >
                    <GearSix size={20} weight="bold" />
                    <span>Painel Admin</span>
                  </DrawerLink>
                )}
              </DrawerNav>

              {isUserLogged && (
                <DrawerFooter>
                  <DrawerLogoutButton type="button" onClick={logoutUser}>
                    <SignOut size={18} weight="bold" />
                    <span>Sair da Conta</span>
                  </DrawerLogoutButton>
                </DrawerFooter>
              )}
            </MobileDrawer>
          </>,
          document.body,
        )}
    </>
  );
}


