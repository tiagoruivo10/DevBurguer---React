import styled from 'styled-components';

import Background from '../../assets/background.png';
import BannerHome from '../../assets/banner-home.jpg';

export const Banner = styled.div`
  background: url(${BannerHome});
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    right: 11%;
    top: 17%;
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${Background});
  background-size: cover;
  min-height: 100vh;
  margin: 0;
`;
