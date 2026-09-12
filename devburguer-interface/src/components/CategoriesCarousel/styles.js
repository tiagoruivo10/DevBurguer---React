import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 48px;
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
      background-color: ${(props) => props.theme.orange};
      border-color: ${(props) => props.theme.orange};
      box-shadow: 0 0 15px rgba(255, 107, 0, 0.5);
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
    margin-bottom: 32px;

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
    background: linear-gradient(to bottom, ${(props) => props.theme.orange}, #ea580c);
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

export const ContainerItems = styled.div`
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%),
    url('${(props) => props.$imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  height: 220px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.orange};
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.2);
  }
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(11, 15, 23, 0.75);
  backdrop-filter: blur(8px);
  padding: 10px 24px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease;

  ${ContainerItems}:hover & {
    background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
    border-color: transparent;
    box-shadow: 0 4px 14px rgba(255, 107, 0, 0.4);
  }
`;

