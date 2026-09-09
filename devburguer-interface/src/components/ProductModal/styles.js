import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalCard = styled.div`
  background-color: #111827;
  border: 1px solid rgba(255, 107, 0, 0.3);
  border-radius: 24px;
  max-width: 660px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 107, 0, 0.15);
  animation: ${scaleUp} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(11, 15, 23, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;

  &:hover {
    background-color: #ef4444;
    border-color: #ef4444;
    transform: scale(1.1);
  }
`;

export const ImageBanner = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #0b0f17;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(17, 24, 39, 0.95) 100%);
  }

  .badge-container {
    position: absolute;
    top: 14px;
    left: 16px;
    display: flex;
    gap: 8px;
    z-index: 2;

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      backdrop-filter: blur(8px);
    }

    .badge-orange {
      background: rgba(255, 107, 0, 0.2);
      border: 1px solid rgba(255, 107, 0, 0.6);
      color: #ff6b00;
    }

    .badge-green {
      background: rgba(16, 185, 129, 0.2);
      border: 1px solid rgba(16, 185, 129, 0.6);
      color: #34d399;
    }
  }
`;

export const ContentBody = styled.div`
  padding: 20px 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }

  .header-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;

    .titles {
      h2 {
        font-size: 24px;
        font-weight: 900;
        color: #ffffff;
        letter-spacing: -0.5px;
        margin-bottom: 4px;
      }

      .category-tag {
        font-size: 13px;
        color: #94a3b8;
        font-weight: 600;
      }
    }

    .price-tag {
      font-size: 24px;
      font-weight: 900;
      color: #ff6b00;
      white-space: nowrap;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.6;
    color: #cbd5e1;
  }

  .highlights-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .highlight-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }
  }

  .section-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    .section-title {
      font-size: 14px;
      font-weight: 800;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      span.optional {
        font-size: 11px;
        color: #94a3b8;
        font-weight: 500;
        text-transform: none;
      }
    }
  }

  /* Ponto da carne selector */
  .meat-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;

    .meat-card {
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 10px 14px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 2px;
      transition: all 0.2s ease;

      &.selected {
        background-color: rgba(255, 107, 0, 0.12);
        border-color: #ff6b00;
        box-shadow: 0 0 12px rgba(255, 107, 0, 0.2);

        .label {
          color: #ff6b00;
          font-weight: 800;
        }
      }

      &:hover:not(.selected) {
        background-color: rgba(255, 255, 255, 0.06);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .label {
        font-size: 13px;
        font-weight: 600;
        color: #f8fafc;
      }

      .sub {
        font-size: 11px;
        color: #94a3b8;
      }
    }
  }

  /* Lista de ingredientes com checks */
  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 8px;

    .ingredient-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #e2e8f0;
      background-color: rgba(255, 255, 255, 0.02);
      padding: 8px 12px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.05);

      svg {
        color: #10b981;
        flex-shrink: 0;
      }
    }
  }

  /* Checkboxes de remoção rápida */
  .remove-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .remove-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #cbd5e1;

      &.active {
        background-color: rgba(239, 68, 68, 0.15);
        border-color: #ef4444;
        color: #fca5a5;
      }

      &:hover:not(.active) {
        border-color: rgba(255, 255, 255, 0.25);
        background-color: rgba(255, 255, 255, 0.08);
      }
    }
  }

  /* Observação extra */
  .obs-textarea-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background-color: rgba(11, 15, 23, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 10px 14px;
    transition: all 0.2s ease;

    &:focus-within {
      border-color: #ff6b00;
      box-shadow: 0 0 10px rgba(255, 107, 0, 0.2);
    }

    textarea {
      background: transparent;
      border: none;
      color: #ffffff;
      font-size: 13px;
      width: 100%;
      resize: none;
      height: 48px;
      font-family: inherit;

      &::placeholder {
        color: #64748b;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export const FooterBar = styled.div`
  background-color: #0b0f17;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-shrink: 0;

  .counter-group {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #111827;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 4px 8px;

    span {
      font-size: 15px;
      font-weight: 800;
      color: #ffffff;
      min-width: 24px;
      text-align: center;
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.08);
      border: none;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: #ff6b00;
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.92);
      }
    }
  }

  .add-cart-btn {
    flex: 1;
    background: linear-gradient(135deg, #ff6b00 0%, #ea580c 100%);
    color: #ffffff;
    border: none;
    border-radius: 14px;
    padding: 14px 20px;
    font-size: 15px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(255, 107, 0, 0.4);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(255, 107, 0, 0.55);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
