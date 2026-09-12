import styled, { keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.6);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 107, 0, 0);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 76px);
  background-color: ${(props) => props.theme.mainBlack};
  padding: 40px 24px 80px 24px;

  @media (max-width: 640px) {
    padding: 20px 14px 60px 14px;
  }
`;

export const Content = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 640px) {
    gap: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .badge-header {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 107, 0, 0.15);
    border: 1px solid rgba(255, 107, 0, 0.35);
    color: ${(props) => props.theme.orange};
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: fit-content;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${(props) => props.theme.white};
    letter-spacing: -0.5px;

    @media (max-width: 640px) {
      font-size: 26px;
    }

    span {
      color: ${(props) => props.theme.orange};
    }
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.lightGray};

    @media (max-width: 640px) {
      font-size: 13px;
    }
  }
`;

export const OrderCard = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 107, 0, 0.3);
  }
`;

export const OrderCardHeader = styled.div`
  padding: 20px 24px;
  background-color: rgba(11, 15, 23, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  .order-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;

    .order-code {
      font-size: 16px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      gap: 6px;

      span {
        color: ${(props) => props.theme.orange};
      }
    }

    .order-date {
      font-size: 13px;
      color: ${(props) => props.theme.lightGray};
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .status-pill {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;

    &.status-realizado {
      background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.35);
      color: #60a5fa;
    }

    &.status-preparacao {
      background: rgba(255, 107, 0, 0.15);
      border: 1px solid rgba(255, 107, 0, 0.35);
      color: ${(props) => props.theme.orange};
    }

    &.status-pronto {
      background: rgba(234, 179, 8, 0.15);
      border: 1px solid rgba(234, 179, 8, 0.35);
      color: #facc15;
    }

    &.status-caminho,
    &.status-entrega {
      background: rgba(168, 85, 247, 0.15);
      border: 1px solid rgba(168, 85, 247, 0.35);
      color: #c084fc;
    }

    &.status-entregue {
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.35);
      color: #4ade80;
    }

    &.status-cancelado {
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #f87171;
    }
  }
`;


export const StepperTrack = styled.div`
  padding: 28px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 640px) {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 18px 16px;
    gap: 16px;
    justify-content: flex-start;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  position: relative;
  z-index: 2;
  flex: 1;

  @media (max-width: 640px) {
    flex: 0 0 85px;
  }

  .step-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s ease;
    background: ${(props) =>
      props.$isCompleted
        ? props.theme.orange
        : props.$isActive
        ? props.theme.orange
        : props.theme.mainBlack};
    color: ${(props) =>
      props.$isCompleted || props.$isActive ? props.theme.white : props.theme.darkGray};
    border: 2px solid
      ${(props) =>
        props.$isCompleted || props.$isActive
          ? props.theme.orange
          : props.theme.darkGray};
    animation: ${(props) => (props.$isActive ? pulseGlow : 'none')} 2s infinite;

    @media (max-width: 640px) {
      width: 38px;
      height: 38px;
      font-size: 15px;
    }
  }

  .step-label {
    font-size: 12px;
    font-weight: ${(props) => (props.$isActive || props.$isCompleted ? 800 : 500)};
    color: ${(props) =>
      props.$isActive || props.$isCompleted
        ? props.theme.white
        : props.theme.lightGray};

    @media (max-width: 640px) {
      font-size: 11px;
      line-height: 1.2;
    }
  }
`;

export const OrderItemsList = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 640px) {
    padding: 16px;
    gap: 12px;
  }

  .item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .item-info {
      display: flex;
      align-items: center;
      gap: 14px;

      img {
        width: 52px;
        height: 52px;
        border-radius: 10px;
        object-fit: cover;
        background-color: rgba(255, 255, 255, 0.05);

        @media (max-width: 640px) {
          width: 44px;
          height: 44px;
        }
      }

      .name {
        font-size: 14px;
        font-weight: 700;
        color: ${(props) => props.theme.white};

        @media (max-width: 640px) {
          font-size: 13px;
        }
      }

      .category {
        font-size: 12px;
        color: ${(props) => props.theme.lightGray};
      }
    }

    .item-total {
      font-size: 14px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
      text-align: right;
      flex-shrink: 0;

      .qtd {
        font-size: 12px;
        color: ${(props) => props.theme.orange};
        margin-right: 6px;
      }
    }
  }
`;

export const OrderCardFooter = styled.div`
  padding: 18px 24px;
  background-color: rgba(11, 15, 23, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 640px) {
    padding: 16px;
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }

  .total-block {
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media (max-width: 640px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    span {
      font-size: 12px;
      color: ${(props) => props.theme.lightGray};
    }

    strong {
      font-size: 20px;
      font-weight: 900;
      color: ${(props) => props.theme.orange};
    }
  }

  .buttons-group {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 640px) {
      flex-direction: column;
      width: 100%;
      gap: 10px;
    }

    .btn-help {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 16px;
      border-radius: 12px;
      background-color: rgba(34, 197, 94, 0.12);
      border: 1px solid rgba(34, 197, 94, 0.3);
      color: #4ade80;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;

      @media (max-width: 640px) {
        width: 100%;
        justify-content: center;
        padding: 12px;
      }

      &:hover {
        background-color: #22c55e;
        color: #ffffff;
      }
    }

    .btn-reorder {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 12px;
      background: linear-gradient(135deg, ${(props) => props.theme.orange} 0%, #ea580c 100%);
      border: none;
      color: ${(props) => props.theme.white};
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);

      @media (max-width: 640px) {
        width: 100%;
        justify-content: center;
        padding: 12px;
      }

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(255, 107, 0, 0.5);
      }
    }
  }
`;

export const EmptyState = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 24px;
  padding: 64px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgba(255, 107, 0, 0.1);
    color: ${(props) => props.theme.orange};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 22px;
    font-weight: 800;
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.lightGray};
    max-width: 420px;
  }

  button {
    margin-top: 8px;
    padding: 12px 24px;
    border-radius: 14px;
    background: linear-gradient(135deg, ${(props) => props.theme.orange} 0%, #ea580c 100%);
    border: none;
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(255, 107, 0, 0.4);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 107, 0, 0.6);
    }
  }
`;
