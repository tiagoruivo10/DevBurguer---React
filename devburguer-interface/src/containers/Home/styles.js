import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.jpg';

export const Banner = styled.section`
  position: relative;
  background: linear-gradient(
      90deg,
      rgba(11, 15, 23, 0.95) 0%,
      rgba(11, 15, 23, 0.75) 50%,
      rgba(11, 15, 23, 0.4) 100%
    ),
    url(${BannerHome});
  background-size: cover;
  background-position: center right;
  min-height: 520px;
  display: flex;
  align-items: center;
  padding: 60px 32px;
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
`;

export const BannerContent = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto 0 calc((100vw - 1280px) / 2);

  @media (max-width: 1340px) {
    margin: 0 auto;
  }

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(255, 107, 0, 0.15);
    border: 1px solid rgba(255, 107, 0, 0.4);
    color: ${(props) => props.theme.orange};
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 18px;
  }

  h1 {
    font-size: 48px;
    font-weight: 900;
    color: ${(props) => props.theme.white};
    line-height: 1.15;
    letter-spacing: -1px;
    margin-bottom: 16px;

    span {
      color: ${(props) => props.theme.orange};
      display: inline;
    }

    @media (max-width: 768px) {
      font-size: 34px;
    }
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme.lightGray};
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 540px;
  }
`;

export const HeroButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
  color: ${(props) => props.theme.white};
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(255, 107, 0, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #fb923c, ${(props) => props.theme.orange});
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(255, 107, 0, 0.55);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FeaturesBar = styled.section`
  max-width: 1280px;
  margin: -32px auto 48px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 10;
`;

export const FeatureItem = styled.div`
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: rgba(255, 107, 0, 0.15);
    color: ${(props) => props.theme.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  h4 {
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    margin-bottom: 2px;
  }

  p {
    font-size: 13px;
    color: ${(props) => props.theme.lightGray};
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 16px;
`;

