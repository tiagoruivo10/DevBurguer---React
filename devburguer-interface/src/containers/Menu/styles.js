import styled from 'styled-components';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBlack};
  padding-bottom: 80px;
`;

export const Banner = styled.section`
  position: relative;
  height: 320px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(11, 15, 23, 0.7) 0%, rgba(11, 15, 23, 0.95) 100%),
    url(${BannerHamburguer}) center/cover no-repeat;
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
  padding: 0 24px;
`;

export const BannerContent = styled.div`
  text-align: center;
  max-width: 600px;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background-color: rgba(255, 107, 0, 0.15);
    border: 1px solid rgba(255, 107, 0, 0.3);
    color: ${(props) => props.theme.orange};
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 38px;
    font-weight: 900;
    color: ${(props) => props.theme.white};
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.lightGray};
  }
`;

export const ReturnButton = styled.button`
  position: absolute;
  top: 24px;
  left: 32px;
  background-color: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(8px);
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.darkGray};
  padding: 10px 18px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.orange};
    border-color: ${(props) => props.theme.orange};
    box-shadow: 0 0 12px rgba(255, 107, 0, 0.4);
    transform: translateX(-3px);
  }

  @media (max-width: 640px) {
    top: 16px;
    left: 16px;
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const SearchContainer = styled.div`
  max-width: 600px;
  margin: -24px auto 32px;
  padding: 0 24px;
  position: relative;
  z-index: 10;

  .search-box {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: ${(props) => props.theme.secondBlack};
    border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
    border-radius: 28px;
    padding: 14px 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    color: ${(props) => props.theme.orange};
    transition: all 0.2s ease;

    &:focus-within {
      border-color: ${(props) => props.theme.orange};
      box-shadow: 0 0 16px rgba(255, 107, 0, 0.25);
    }

    input {
      background: transparent;
      border: none;
      width: 100%;
      color: ${(props) => props.theme.white};
      font-size: 15px;
      font-weight: 500;

      &::placeholder {
        color: ${(props) => props.theme.lightGray};
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1280px;
  margin: 0 auto 36px;
  padding: 0 24px;
`;

export const CategoryButton = styled.button`
  background: ${(props) =>
    props.$isActiveCategory
      ? `linear-gradient(135deg, ${props.theme.orange}, #ea580c)`
      : props.theme.secondBlack};
  color: ${(props) =>
    props.$isActiveCategory ? props.theme.white : props.theme.lightGray};
  border: 1px solid
    ${(props) =>
      props.$isActiveCategory
        ? 'transparent'
        : props.theme.cardBorder || props.theme.darkGray};
  padding: 10px 22px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isActiveCategory
      ? '0 4px 14px rgba(255, 107, 0, 0.35)'
      : '0 2px 8px rgba(0, 0, 0, 0.2)'};
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.white};
    border-color: ${(props) => props.theme.orange};
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(255, 107, 0, 0.3);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 24px;
  max-width: 400px;
  margin: 0 auto;

  p {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.lightGray};
  }
`;

