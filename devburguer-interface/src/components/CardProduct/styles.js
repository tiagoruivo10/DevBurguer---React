import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 107, 0, 0.5);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.2);

    .card-img {
      transform: scale(1.08);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: ${(props) => props.theme.mainBlack};

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .badge-pill {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(11, 15, 23, 0.85);
    border: 1px solid rgba(255, 107, 0, 0.5);
    color: ${(props) => props.theme.orange};
    font-size: 11px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 2;
  }

  .favorite-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(11, 15, 23, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: ${(props) => (props.$isFavorite ? '#EF4444' : props.theme.white)};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.2s ease;
    z-index: 2;

    &:hover {
      background: rgba(11, 15, 23, 0.95);
      transform: scale(1.15);
      color: #ef4444;
    }
  }
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;

  .card-title {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.orange};
    }
  }

  .card-category {
    font-size: 12px;
    color: ${(props) => props.theme.lightGray};
    font-weight: 500;
  }

  .delivery-eta {
    font-size: 11px;
    color: #94a3b8;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 2px;
  }
`;

export const CardFooter = styled.div`
  padding: 12px 16px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: auto;

  .rating-group {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    svg {
      color: #fbbf24;
    }

    .review-count {
      color: ${(props) => props.theme.lightGray};
      font-weight: 500;
      font-size: 11px;
    }
  }

  .price-group {
    display: flex;
    align-items: center;
    gap: 10px;

    .price-value {
      font-size: 17px;
      font-weight: 900;
      color: ${(props) => props.theme.orange};
      letter-spacing: -0.5px;
    }

    .add-btn {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      background: linear-gradient(135deg, ${(props) => props.theme.orange} 0%, #ea580c 100%);
      border: none;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(255, 107, 0, 0.4);
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 14px rgba(255, 107, 0, 0.6);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
