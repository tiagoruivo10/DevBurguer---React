import styled from 'styled-components';

export const CouponBox = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 16px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  .coupon-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.orange};
    }
  }

  .coupon-input-group {
    display: flex;
    gap: 8px;

    input {
      flex: 1;
      background-color: ${(props) => props.theme.mainBlack};
      border: 1px solid ${(props) => props.theme.darkGray};
      border-radius: 10px;
      padding: 10px 14px;
      color: ${(props) => props.theme.white};
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.2s ease;

      &::placeholder {
        color: ${(props) => props.theme.lightGray};
        font-weight: 400;
        text-transform: none;
      }

      &:focus {
        border-color: ${(props) => props.theme.orange};
        box-shadow: 0 0 10px rgba(255, 107, 0, 0.2);
      }
    }

    button {
      padding: 10px 18px;
      border-radius: 10px;
      background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
      color: ${(props) => props.theme.white};
      border: none;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);
      }
    }
  }

  .active-coupon-badge {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.35);
    border-radius: 10px;
    padding: 8px 12px;
    color: #34d399;
    font-size: 13px;
    font-weight: 700;

    .tag-info {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .remove-coupon-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 2px;
      transition: color 0.2s ease;

      &:hover {
        color: #ef4444;
      }
    }
  }

  .coupon-hint {
    font-size: 11px;
    color: #64748b;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;

  .container-top {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    .title {
      font-size: 18px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
      padding-bottom: 12px;
      border-bottom: 1px solid ${(props) => props.theme.darkGray};
      margin-bottom: 4px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: ${(props) => props.theme.lightGray};
        font-size: 14px;
      }

      strong {
        color: ${(props) => props.theme.white};
        font-size: 15px;
      }

      &.discount-row {
        span {
          color: #34d399;
        }

        strong {
          color: #34d399;
        }
      }
    }
  }

  .container-bottom {
    background-color: ${(props) => props.theme.black};
    border-top: 1px solid ${(props) => props.theme.darkGray};
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 16px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
    }

    strong {
      font-size: 22px;
      font-weight: 900;
      color: ${(props) => props.theme.orange};
    }
  }
`;
