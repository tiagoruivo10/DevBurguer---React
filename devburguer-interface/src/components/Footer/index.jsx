import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  ShieldCheck,
} from '@phosphor-icons/react';

import { Container, FooterContent, FooterBottom } from './styles';

export function Footer() {
  return (
    <Container>
      <FooterContent>
        {/* Coluna 1: Sobre */}
        <div className="col">
          <div className="brand">
            🍔 <span>Dev</span>Burguer
          </div>
          <p className="desc">
            O autêntico hambúrguer artesanal preparado com carnes 100% Angus, pães artesanais selados na manteiga e receitas exclusivas.
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogo size={20} weight="bold" />
            </a>
            <a
              href="https://wa.me/5511999998888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={20} weight="fill" />
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="col">
          <h4>Navegação</h4>
          <ul>
            <li>
              <Link to="/">Página Inicial</Link>
            </li>
            <li>
              <Link to="/cardapio">Cardápio Completo</Link>
            </li>
            <li>
              <Link to="/carrinho">Meu Carrinho</Link>
            </li>
            <li>
              <Link to="/login">Área do Cliente</Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Horários */}
        <div className="col">
          <h4>Atendimento</h4>
          <ul>
            <li>
              <Clock size={16} color="#FF6B00" />
              <span>Ter a Qui: 18h às 23h30</span>
            </li>
            <li>
              <Clock size={16} color="#FF6B00" />
              <span>Sex e Sáb: 18h à 00h30</span>
            </li>
            <li>
              <Clock size={16} color="#FF6B00" />
              <span>Dom: 18h às 23h30</span>
            </li>
            <li>
              <span style={{ color: '#ef4444', fontWeight: 600 }}>Segunda: Fechado</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Endereço & Contato */}
        <div className="col">
          <h4>Contato & Local</h4>
          <ul>
            <li>
              <MapPin size={16} color="#FF6B00" />
              <span>Av. Paulista, 1000 - SP</span>
            </li>
            <li>
              <Phone size={16} color="#FF6B00" />
              <span>(11) 99999-8888</span>
            </li>
            <li>
              <EnvelopeSimple size={16} color="#FF6B00" />
              <span>contato@devburguer.com</span>
            </li>
          </ul>
        </div>
      </FooterContent>

      <FooterBottom>
        <p>
          &copy; {new Date().getFullYear()} <span>DevBurguer</span> — Todos os direitos reservados.
        </p>

        <div className="badges">
          <span>⚡ Pix</span>
          <span>💳 Cartões</span>
          <span>🍴 VR / Alelo</span>
          <span>🔒 Checkout Seguro</span>
        </div>
      </FooterBottom>
    </Container>
  );
}

export default Footer;
