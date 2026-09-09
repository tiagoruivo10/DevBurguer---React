import React from 'react';
import {
  Clock,
  MapPin,
  CreditCard,
  WhatsappLogo,
  ArrowSquareOut,
  Moped,
  Storefront,
  QrCode,
  ShieldCheck,
} from '@phosphor-icons/react';

import {
  Container,
  HeaderSection,
  Grid,
  InfoCard,
} from './styles';

export function RestaurantInfo() {
  // Lógica de verificação do status da loja (Terça a Domingo, das 18h às 23h30)
  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;

  // Aberto de Terça (2) a Domingo (0), das 18:00 (1080 min) às 23:59
  const isMonday = day === 1;
  const isOpen = !isMonday && currentTimeInMinutes >= 18 * 60 && currentTimeInMinutes <= 23 * 60 + 59;

  return (
    <Container id="informacoes">
      <HeaderSection>
        <div className="badge-status">
          <span className="dot" style={{ backgroundColor: isOpen ? '#22c55e' : '#ef4444' }} />
          <span>{isOpen ? 'Aberto Agora &bull; Aceitando Pedidos' : 'Fechado no momento &bull; Abre às 18:00'}</span>
        </div>

        <h2>
          Informações da <span>Hamburgueria</span>
        </h2>

        <p>
          Tudo o que você precisa saber sobre nosso atendimento, formas de entrega, modalidades de pagamento e localização.
        </p>
      </HeaderSection>

      <Grid>
        {/* Card 1: Horários */}
        <InfoCard>
          <div className="card-top">
            <div className="icon-box">
              <Clock size={24} weight="duotone" />
            </div>
            <div>
              <h3>Horários</h3>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Funcionamento da cozinha</span>
            </div>
          </div>

          <div className="card-body">
            <div className="row-item">
              <span>Terça a Quinta:</span>
              <span className="highlight">18:00 às 23:30</span>
            </div>
            <div className="row-item">
              <span>Sexta e Sábado:</span>
              <span className="highlight">18:00 à 00:30</span>
            </div>
            <div className="row-item">
              <span>Domingo:</span>
              <span className="highlight">18:00 às 23:30</span>
            </div>
            <div className="row-item">
              <span>Segunda-feira:</span>
              <span style={{ color: '#ef4444', fontWeight: 600 }}>Fechado (Descanso)</span>
            </div>
          </div>
        </InfoCard>

        {/* Card 2: Localização & Retirada */}
        <InfoCard>
          <div className="card-top">
            <div className="icon-box">
              <MapPin size={24} weight="duotone" />
            </div>
            <div>
              <h3>Localização & Entrega</h3>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Onde nos encontrar</span>
            </div>
          </div>

          <div className="card-body">
            <p>
              <strong className="highlight">Av. Paulista, 1000 - Bela Vista</strong>
              <br />
              São Paulo - SP &bull; CEP: 01310-100
            </p>

            <div className="row-item">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Moped size={16} color="#FF6B00" /> Delivery Express:
              </span>
              <span className="highlight">Raio até 10 km</span>
            </div>

            <div className="row-item">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Storefront size={16} color="#FF6B00" /> Retirada no Balcão:
              </span>
              <span className="highlight">Pronto em 20 min</span>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
          >
            <span>Ver no Google Maps</span>
            <ArrowSquareOut size={16} />
          </a>
        </InfoCard>

        {/* Card 3: Formas de Pagamento */}
        <InfoCard>
          <div className="card-top">
            <div className="icon-box">
              <CreditCard size={24} weight="duotone" />
            </div>
            <div>
              <h3>Pagamentos Aceitos</h3>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Sem complicação</span>
            </div>
          </div>

          <div className="card-body">
            <p>Aceitamos as principais bandeiras no app e na maquininha na entrega:</p>

            <div className="payment-badges">
              <span>⚡ Pix Instantâneo</span>
              <span>💳 Crédito / Débito</span>
              <span>🍴 VR / Sodexo / Alelo</span>
              <span>💵 Dinheiro com Troco</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4ade80', marginTop: '6px' }}>
              <ShieldCheck size={16} weight="bold" />
              <span>Ambiente 100% Seguro e Criptografado</span>
            </div>
          </div>
        </InfoCard>

        {/* Card 4: Atendimento & WhatsApp */}
        <InfoCard>
          <div className="card-top">
            <div className="icon-box">
              <WhatsappLogo size={24} weight="duotone" />
            </div>
            <div>
              <h3>Fale Conosco</h3>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Dúvidas ou encomendas</span>
            </div>
          </div>

          <div className="card-body">
            <p>Precisa de suporte com seu pedido ou quer fazer uma encomenda para eventos e festas?</p>

            <div className="row-item">
              <span>WhatsApp:</span>
              <span className="highlight">(11) 99999-8888</span>
            </div>

            <div className="row-item">
              <span>Tempo de resposta:</span>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>Menos de 5 minutos</span>
            </div>
          </div>

          <a
            href="https://wa.me/5511999998888?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20DevBurguer!"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn"
            style={{ backgroundColor: '#16a34a', borderColor: '#16a34a' }}
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>Conversar no WhatsApp</span>
          </a>
        </InfoCard>
      </Grid>
    </Container>
  );
}

export default RestaurantInfo;
