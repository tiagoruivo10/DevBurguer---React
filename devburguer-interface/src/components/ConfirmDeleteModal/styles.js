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
    transform: scale(0.92) translateY(12px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalCard = styled.div`
  background-color: #111827;
  border: 1px solid rgba(239, 68, 68, 0.35);
  border-radius: 20px;
  max-width: 460px;
  width: 100%;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 30px rgba(239, 68, 68, 0.15);
  animation: ${scaleUp} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(239, 68, 68, 0.15);
  border: 2px solid rgba(239, 68, 68, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #94a3b8;
  margin-bottom: 24px;

  strong {
    color: #ff6b00;
    font-weight: 700;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  width: 100%;
  height: 46px;
  border-radius: 12px;
  background-color: #1e293b;
  border: 1px solid #334155;
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #334155;
    color: #ffffff;
  }
`;

export const DeleteConfirmButton = styled.button`
  flex: 1;
  width: 100%;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4);
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(239, 68, 68, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
