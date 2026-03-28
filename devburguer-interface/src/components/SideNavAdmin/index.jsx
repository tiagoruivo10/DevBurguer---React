import { useLocation } from 'react-router-dom';

import { SignOut } from '@phosphor-icons/react';

import Logo from '../../assets/logo.png';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, NavLinkContainer, Footer, NavLink } from './styles';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useLocation();

  return (
    <Container>
      <img src={Logo} alt="logo Tiago Burguers" />
      <NavLinkContainer>
        {navLinks.map((Link) => (
          <NavLink
            key={Link.id}
            to={Link.path}
            $isActive={pathname === Link.path}
          >
            {Link.icon}
            <span>{Link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
