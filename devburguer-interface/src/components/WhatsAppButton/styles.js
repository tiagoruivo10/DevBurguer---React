import styled, { keyframes } from 'styled-components';

const pulseWhatsapp = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`;

export const FloatingButton = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(22, 163, 74, 0.45);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulseWhatsapp} 2.5s infinite;

  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 10px 25px rgba(22, 163, 74, 0.6);

    .tooltip {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  .tooltip {
    position: absolute;
    right: 68px;
    background-color: #1e293b;
    border: 1px solid #334155;
    color: #ffffff;
    padding: 8px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transform: translateX(10px);
    transition: all 0.2s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);

    &::after {
      content: '';
      position: absolute;
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 0 6px 6px;
      border-style: solid;
      border-color: transparent transparent transparent #1e293b;
    }
  }
`;
