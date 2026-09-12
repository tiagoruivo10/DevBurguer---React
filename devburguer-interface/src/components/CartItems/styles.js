import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ItemCard = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 18px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 580px) {
    padding: 14px;
  }

  &:hover {
    border-color: rgba(255, 107, 0, 0.3);
  }

  .main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;

    @media (max-width: 580px) {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }
  }

  .product-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
    min-width: 220px;

    @media (max-width: 580px) {
      min-width: 0;
      width: 100%;
    }

    .product-thumb {
      width: 64px;
      height: 64px;
      border-radius: 14px;
      object-fit: cover;
      background-color: ${(props) => props.theme.mainBlack};
      border: 1px solid rgba(255, 255, 255, 0.08);
      flex-shrink: 0;

      @media (max-width: 580px) {
        width: 56px;
        height: 56px;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 2px;

      h4 {
        font-size: 15px;
        font-weight: 700;
        color: ${(props) => props.theme.white};
        line-height: 1.3;
      }

      .unit-price {
        font-size: 13px;
        color: ${(props) => props.theme.lightGray};
      }
    }
  }

  .actions-group {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 580px) {
      width: 100%;
      justify-content: space-between;
      gap: 12px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 20px;
  padding: 4px 8px;
  width: fit-content;

  span {
    font-weight: 800;
    font-size: 14px;
    min-width: 24px;
    text-align: center;
    color: ${(props) => props.theme.white};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.08);
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.orange};
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const ProductTotalPrice = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: ${(props) => props.theme.orange};
  min-width: 85px;
  text-align: right;
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #ef4444;
    background-color: rgba(239, 68, 68, 0.12);
    transform: scale(1.1);
  }
`;

export const ObservationBox = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .obs-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: ${(props) => (props.$hasObs ? props.theme.orange : props.theme.lightGray)};
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s ease;
    width: fit-content;

    &:hover {
      color: ${(props) => props.theme.orange};
    }
  }

  .obs-input-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(11, 15, 23, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 8px 12px;
    transition: all 0.2s ease;

    &:focus-within {
      border-color: ${(props) => props.theme.orange};
      box-shadow: 0 0 10px rgba(255, 107, 0, 0.2);
    }

    input {
      background: transparent;
      border: none;
      color: ${(props) => props.theme.white};
      font-size: 13px;
      width: 100%;

      &::placeholder {
        color: #64748b;
        font-size: 12px;
      }
    }

    .clear-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #ef4444;
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  text-align: center;
  gap: 14px;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 24px;

  .icon-box {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(255, 107, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.orange};
  }

  p {
    font-size: 20px;
    font-weight: 800;
    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.lightGray};
    max-width: 320px;
  }

  button {
    margin-top: 6px;
    background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
    color: ${(props) => props.theme.white};
    border: none;
    padding: 12px 28px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(255, 107, 0, 0.35);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(255, 107, 0, 0.5);
    }
  }
`;
