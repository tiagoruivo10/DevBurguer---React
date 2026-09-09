import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CaretLeft, CaretRight, Sparkle, Flame, ShoppingBag } from '@phosphor-icons/react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const defaultBurgerDishes = [
  {
    tag: '🔥 #DestaqueDoChefe',
    titleLine1: 'CLASSIC BURGER',
    titleLine2: '– SMASH ARTESANAL',
    desc: 'Smash bovino, queijo cheddar derretido, alface, tomate fresco e molho especial no pão brioche com gergelim.',
    img: `${apiUrl}/product-file/classic-burger.png`,
    ctaText: 'Ver no Cardápio',
    ctaUrl: '/cardapio',
  },
  {
    tag: '🥓 #MaisVendido',
    titleLine1: 'DOUBLE CHEESE',
    titleLine2: '– DUPLO CHEDDAR',
    desc: 'Duas carnes smash suculentas de 150g, dobro de queijo cheddar derretendo e molho exclusivo da casa.',
    img: `${apiUrl}/product-file/double-cheese.png`,
    ctaText: 'Pedir Agora',
    ctaUrl: '/cardapio',
  },
  {
    tag: '👑 #FavoritoDaGalera',
    titleLine1: 'BACON SUPREME',
    titleLine2: '– CRISPY & CHEDDAR',
    desc: 'Smash bovino artesanal, cheddar cremoso, fatias crocantes de bacon e molho especial defumado.',
    img: `${apiUrl}/product-file/bacon-supreme.png`,
    ctaText: 'Ver no Cardápio',
    ctaUrl: '/cardapio',
  },
  {
    tag: '🍔 #EdicaoLimitada',
    titleLine1: 'BBQ BURGER',
    titleLine2: '– CEBOLA CRISPY & BBQ',
    desc: 'Smash bovino alto, queijo derretido, tiras de bacon crocante, cebola crispy e barbecue artesanal.',
    img: `${apiUrl}/product-file/bbq-burger.jpg`,
    ctaText: 'Pedir Agora',
    ctaUrl: '/cardapio',
  },
  {
    tag: '🍟 #ComboImperdivel',
    titleLine1: 'BATATA CHEDDAR & BACON',
    titleLine2: '– CROCÂNCIA PERFEITA',
    desc: 'Batatas rústicas crocantes e douradas, cobertas com cheddar cremoso artesanal e bacon crocante.',
    img: `${apiUrl}/product-file/batata-cheddar-bacon.jpg`,
    ctaText: 'Ver Acompanhamentos',
    ctaUrl: '/cardapio',
  },
];


export function CoverFlowCarousel({
  items = defaultBurgerDishes,
  sectionLabel = 'DESTAQUES DO CHEFE',
  autoplay = true,
  autoplayDelay = 4500,
  className = '',
  onCtaClick,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const navigate = useNavigate();
  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section
      className={`coverflow-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '740px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '48px 0',
        userSelect: 'none',
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambience with Smooth Blur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <img
          src={items[currentIndex]?.img}
          alt="ambience background"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${apiUrl}/product-file/double-cheese.png`;
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.18) blur(36px)',
            transform: 'scale(1.2)',
            transition: 'opacity 800ms ease, filter 800ms ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(11, 15, 23, 0.4) 0%, rgba(11, 15, 23, 0.95) 100%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow / Seção */}
        {sectionLabel && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #FF6B00)',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#FF6B00',
              }}
            >
              <Sparkle size={16} weight="fill" />
              <span>{sectionLabel}</span>
            </div>
            <span
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #FF6B00, transparent)',
              }}
            />
          </div>
        )}

        {/* 3D Coverflow Stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '520px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '32px',
            perspective: '1400px',
          }}
        >
          {items.map((item, idx) => {
            const offset = (idx - currentIndex + total) % total;

            let transform = 'translateX(0px) scale(0.4) rotateY(0deg)';
            let opacity = 0;
            let zIndex = 0;
            let filter = 'brightness(0.4) blur(2px)';
            let isCenter = false;

            if (offset === 0) {
              isCenter = true;
              transform = 'translateX(0px) scale(1) rotateY(0deg)';
              opacity = 1;
              zIndex = 30;
              filter = 'brightness(1)';
            } else if (offset === 1) {
              transform = 'translateX(300px) scale(0.85) rotateY(-24deg)';
              opacity = 0.65;
              zIndex = 20;
              filter = 'brightness(0.75)';
            } else if (offset === 2) {
              transform = 'translateX(530px) scale(0.68) rotateY(-38deg)';
              opacity = 0.35;
              zIndex = 10;
              filter = 'brightness(0.55) blur(1px)';
            } else if (offset === total - 1) {
              transform = 'translateX(-300px) scale(0.85) rotateY(24deg)';
              opacity = 0.65;
              zIndex = 20;
              filter = 'brightness(0.75)';
            } else if (offset === total - 2) {
              transform = 'translateX(-530px) scale(0.68) rotateY(38deg)';
              opacity = 0.35;
              zIndex = 10;
              filter = 'brightness(0.55) blur(1px)';
            }

            return (
              <div
                key={idx}
                onClick={() => !isCenter && goToSlide(idx)}
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: '500px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: '#1E293B',
                  border: isCenter
                    ? '2px solid rgba(255, 107, 0, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformOrigin: 'center center',
                  transition: 'all 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                  boxShadow: isCenter
                    ? '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(255, 107, 0, 0.3)'
                    : '0 15px 35px rgba(0,0,0,0.5)',
                  cursor: isCenter ? 'default' : 'pointer',
                }}
              >
                {/* Burger Photo */}
                <img
                  src={item.img}
                  alt={item.titleLine1}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${apiUrl}/product-file/double-cheese.png`;
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Dark Vignette Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(11,15,23,0.3) 0%, rgba(11,15,23,0.1) 30%, rgba(11,15,23,0.75) 65%, rgba(11,15,23,0.98) 100%)',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    zIndex: 20,
                    opacity: isCenter ? 1 : 0,
                    transform: isCenter ? 'translateY(0px)' : 'translateY(16px)',
                    transition: 'opacity 400ms ease, transform 400ms ease',
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                >
                  {/* Tag Pill */}
                  <div style={{ textAlign: 'right', width: '100%' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        color: '#FFFFFF',
                        background: 'rgba(0, 0, 0, 0.65)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 107, 0, 0.4)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: 'auto',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '1.65rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        color: '#FFFFFF',
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: '0 3px 12px rgba(0,0,0,0.95)',
                      }}
                    >
                      {item.titleLine1}
                    </h2>

                    {item.titleLine2 && (
                      <span
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: '#FF6B00',
                          lineHeight: 1.2,
                          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                        }}
                      >
                        {item.titleLine2}
                      </span>
                    )}

                    <div
                      style={{
                        width: '36px',
                        height: '3px',
                        backgroundColor: '#FF6B00',
                        borderRadius: '2px',
                        margin: '6px auto',
                        boxShadow: '0 0 10px rgba(255, 107, 0, 0.8)',
                      }}
                    />

                    {item.desc && (
                      <p
                        style={{
                          fontSize: '0.84rem',
                          color: '#E2E8F0',
                          maxWidth: '290px',
                          margin: '0 0 14px',
                          lineHeight: 1.4,
                          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                        }}
                      >
                        {item.desc}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onCtaClick) {
                          onCtaClick(item);
                        } else {
                          navigate(item.ctaUrl || '/cardapio');
                        }
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 22px',
                        borderRadius: '30px',
                        background: 'linear-gradient(135deg, #FF6B00 0%, #EA580C 100%)',
                        color: '#FFFFFF',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: 'none',
                        boxShadow: '0 4px 16px rgba(255, 107, 0, 0.4)',
                        cursor: 'pointer',
                        transition: 'transform 200ms ease, box-shadow 200ms ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 0, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 0, 0.4)';
                      }}
                    >
                      <ShoppingBag size={16} weight="bold" />
                      <span>{item.ctaText || 'Ver no Cardápio'}</span>
                      <ArrowRight size={16} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Slide anterior"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 24, 39, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            zIndex: 40,
            transition: 'all 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FF6B00';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39, 0.75)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <CaretLeft size={24} weight="bold" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Próximo slide"
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 24, 39, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            zIndex: 40,
            transition: 'all 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FF6B00';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39, 0.75)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <CaretRight size={24} weight="bold" />
        </button>

        {/* Pagination Dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            zIndex: 30,
          }}
        >
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir para o slide ${idx + 1}`}
              style={{
                height: '8px',
                width: idx === currentIndex ? '32px' : '8px',
                borderRadius: '9999px',
                backgroundColor: idx === currentIndex ? '#FF6B00' : 'rgba(255,255,255,0.25)',
                border: 'none',
                cursor: 'pointer',
                boxShadow:
                  idx === currentIndex ? '0 0 12px rgba(255, 107, 0, 0.8)' : 'none',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoverFlowCarousel;
