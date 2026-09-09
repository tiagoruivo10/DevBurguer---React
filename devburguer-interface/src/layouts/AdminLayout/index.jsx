import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
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

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
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

