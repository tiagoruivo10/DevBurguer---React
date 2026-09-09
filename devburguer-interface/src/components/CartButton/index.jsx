import { ShoppingCartSimple } from '@phosphor-icons/react';
import { ContainerButton } from './styles';

export function CartButton({ ...props }) {
  return (
    <ContainerButton type="button" title="Adicionar ao carrinho" {...props}>
      <ShoppingCartSimple size={20} weight="bold" />
    </ContainerButton>
  );
}

