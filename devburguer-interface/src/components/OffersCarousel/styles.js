import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 64px;
  padding: 0 24px;

  .carousel-item {
    padding: 12px;
  }

  .react-multiple-carousel__arrow {
    background-color: rgba(30, 41, 59, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid ${(props) => props.theme.darkGray};
    min-width: 44px;
    min-height: 44px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.green};
      border-color: ${(props) => props.theme.green};
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
    }
  }

  .react-multiple-carousel__arrow--left {
    left: -10px;
  }

  .react-multiple-carousel__arrow--right {
    right: -10px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: 40px;

    .carousel-item {
      padding: 6px;
    }

    .react-multiple-carousel__arrow--left {
      left: 0;
    }

    .react-multiple-carousel__arrow--right {
      right: 0;
    }
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  letter-spacing: -0.5px;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 28px;
    background: linear-gradient(to bottom, ${(props) => props.theme.green}, #059669);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 16px;

    &::before {
      height: 22px;
    }
  }
`;

