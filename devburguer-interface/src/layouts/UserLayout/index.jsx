import { Outlet } from 'react-router-dom';

import { Footer, Header, WhatsAppButton } from '../../components';

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

