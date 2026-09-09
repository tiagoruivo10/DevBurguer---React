import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { FloatingButton } from './styles';

export function WhatsAppButton() {
  const whatsappNumber = '5511999998888';
  const defaultMessage = encodeURIComponent(
    'Olá, DevBurguer! Gostaria de tirar uma dúvida sobre o cardápio e os pedidos.'
  );

  return (
    <FloatingButton
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento via WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
      <span className="tooltip">Dúvidas? Fale conosco no WhatsApp!</span>
    </FloatingButton>
  );
}

export default WhatsAppButton;
