import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 40px auto 60px auto;
  padding: 0 24px;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 36px;

  .badge-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.35);
    color: #4ade80;
    padding: 6px 16px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 12px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #22c55e;
      animation: ${pulse} 2s infinite;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${(props) => props.theme.white};
    letter-spacing: -0.5px;

    span {
      color: ${(props) => props.theme.orange};
    }
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.lightGray};
    margin-top: 8px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

export const InfoCard = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${(props) => props.theme.orange}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 107, 0, 0.4);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 107, 0, 0.15);

    &::before {
      opacity: 1;
    }

    .icon-box {
      background: ${(props) => props.theme.orange};
      color: ${(props) => props.theme.white};
      transform: scale(1.08);
    }
  }

  .card-top {
    display: flex;
    align-items: center;
    gap: 14px;

    .icon-box {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background-color: rgba(255, 107, 0, 0.12);
      border: 1px solid rgba(255, 107, 0, 0.3);
      color: ${(props) => props.theme.orange};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    h3 {
      font-size: 18px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.lightGray};
    line-height: 1.5;

    .highlight {
      color: ${(props) => props.theme.white};
      font-weight: 600;
    }

    .row-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }

  .payment-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;

    span {
      background: ${(props) => props.theme.mainBlack};
      border: 1px solid ${(props) => props.theme.darkGray};
      padding: 5px 10px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .action-btn {
    margin-top: auto;
    padding: 10px 16px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid ${(props) => props.theme.darkGray};
    color: ${(props) => props.theme.white};
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.orange};
      border-color: ${(props) => props.theme.orange};
      color: ${(props) => props.theme.white};
    }
  }
`;
