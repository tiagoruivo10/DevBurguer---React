import { useNavigate } from 'react-router-dom';
import { ArrowRight, Flame, ShieldCheck, Truck } from '@phosphor-icons/react';

import {
  AirbnbCarousel,
  CoverFlowCarousel,
  RestaurantInfo,
} from '../../components';
import {
  Banner,
  BannerContent,
  Container,
  FeaturesBar,
  FeatureItem,
  HeroButton,
} from './styles';

export function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Banner>
        <BannerContent>
          <div className="badge-pill">
            <Flame weight="fill" size={18} />
            <span>O Melhor Hambúrguer da Região</span>
          </div>
          <h1>
            O Verdadeiro Sabor do <span>Hambúrguer Artesanal</span>
          </h1>
          <p>
            Blend especial de carnes nobres, queijo derretido no ponto perfeito, molhos exclusivos e pães artesanais fresquinhos todo dia.
          </p>
          <HeroButton onClick={() => navigate('/cardapio')}>
            Ver Cardápio Completo
            <ArrowRight weight="bold" size={20} />
          </HeroButton>
        </BannerContent>
      </Banner>

      <FeaturesBar>
        <FeatureItem>
          <div className="icon-wrapper">
            <Flame size={24} weight="duotone" />
          </div>
          <div>
            <h4>Carne 100% Angus</h4>
            <p>Blend fresco grelhado no fogo</p>
          </div>
        </FeatureItem>

        <FeatureItem>
          <div className="icon-wrapper">
            <Truck size={24} weight="duotone" />
          </div>
          <div>
            <h4>Entrega Express</h4>
            <p>Seu pedido quentinho e rápido</p>
          </div>
        </FeatureItem>

        <FeatureItem>
          <div className="icon-wrapper">
            <ShieldCheck size={24} weight="duotone" />
          </div>
          <div>
            <h4>Qualidade Garantida</h4>
            <p>Ingredientes premium selecionados</p>
          </div>
        </FeatureItem>
      </FeaturesBar>

      {/* 3D CoverFlow Carousel Showcase */}
      <CoverFlowCarousel sectionLabel="DESTAQUES DO CHEFE" />

      {/* Modern Airbnb-Style Snap Carousel (Categorias & Ofertas) */}
      <Container>
        <AirbnbCarousel />
      </Container>

      {/* Informações da Hamburgueria */}
      <RestaurantInfo />
    </main>
  );
}




