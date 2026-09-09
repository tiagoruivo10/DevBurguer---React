import { List, ListPlus, Receipt, Storefront } from '@phosphor-icons/react';

export const navLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icon: <Receipt size={22} weight="duotone" />,
  },
  {
    id: 2,
    label: 'Produtos',
    path: '/admin/produtos',
    icon: <List size={22} weight="duotone" />,
  },
  {
    id: 3,
    label: 'Novo Produto',
    path: '/admin/novo-produto',
    icon: <ListPlus size={22} weight="duotone" />,
  },
  {
    id: 4,
    label: 'Ver Loja',
    path: '/',
    icon: <Storefront size={22} weight="duotone" />,
  },
];

