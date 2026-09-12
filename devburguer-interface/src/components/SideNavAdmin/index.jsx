import { useLocation } from 'react-router-dom';
import { SignOut, ShieldCheck, X } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import {
  Container,
  NavLinkContainer,
  Footer,
  NavLink,
  AdminHeader,
  Overlay,
  CloseDrawerButton,
} from './styles';

export function SideNavAdmin({ isOpen = false, onClose = () => {} }) {
  const { logout, userInfo } = useUser();
  const { pathname } = useLocation();

  function handleLogout() {
    logout();
    onClose();
  }

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <Container $isOpen={isOpen}>
        <AdminHeader to="/admin/pedidos" onClick={onClose}>
          <div className="header-top">
            <div className="brand-title">
              🍔 <span>Dev</span>Burguer
            </div>
            <CloseDrawerButton
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              aria-label="Fechar menu lateral"
            >
              <X size={18} weight="bold" />
            </CloseDrawerButton>
          </div>
          <div className="admin-badge">
            <ShieldCheck size={16} weight="fill" />
            <span>Painel Admin</span>
          </div>
        </AdminHeader>

        <NavLinkContainer>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              $isActive={pathname === link.path}
              onClick={onClose}
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </NavLinkContainer>

        <Footer>
          <div className="user-info-admin">
            <p>Conectado como:</p>
            <strong>{userInfo?.name || 'Administrador'}</strong>
          </div>
          <NavLink to="/login" onClick={handleLogout} className="logout-btn">
            <SignOut size={22} weight="bold" />
            <span>Encerrar Sessão</span>
          </NavLink>
        </Footer>
      </Container>
    </>
  );
}

