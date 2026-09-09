import { useLocation } from 'react-router-dom';
import { SignOut, ShieldCheck } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, NavLinkContainer, Footer, NavLink, AdminHeader } from './styles';

export function SideNavAdmin() {
  const { logout, userInfo } = useUser();
  const { pathname } = useLocation();

  return (
    <Container>
      <AdminHeader to="/admin/pedidos">
        <div className="brand-title">
          🍔 <span>Dev</span>Burguer
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
        <NavLink to="/login" onClick={logout} className="logout-btn">
          <SignOut size={22} weight="bold" />
          <span>Encerrar Sessão</span>
        </NavLink>
      </Footer>
    </Container>
  );
}

