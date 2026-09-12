import { useState, useEffect } from 'react';
import { Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { List, ShieldCheck, Storefront } from '@phosphor-icons/react';
import { SideNavAdmin } from '../../components';
import { Container, MobileAdminHeader } from './styles';

export function AdminLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { pathname } = useLocation();

  const rawUserData = localStorage.getItem('devburguer:userData');
  let isAdmin = false;

  if (rawUserData) {
    try {
      const parsed = JSON.parse(rawUserData);
      isAdmin = Boolean(parsed?.admin);
    } catch {
      isAdmin = false;
    }
  }

  // Fechar gaveta ao navegar
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  return isAdmin ? (
    <Container>
      {/* Barra superior exibida apenas em mobile (< 960px) */}
      <MobileAdminHeader>
        <div className="left-group">
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Abrir menu de navegação do admin"
          >
            <List size={22} weight="bold" />
          </button>
          <div className="brand">
            🍔 <span>Dev</span>Burguer
          </div>
        </div>

        <div className="right-group">
          <div className="admin-badge">
            <ShieldCheck size={16} weight="fill" />
            <span>Admin</span>
          </div>
          <Link to="/" className="store-link" title="Ver Loja">
            <Storefront size={20} weight="bold" />
          </Link>
        </div>
      </MobileAdminHeader>

      <SideNavAdmin
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
}

