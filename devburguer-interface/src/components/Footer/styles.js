import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${(props) => props.theme.mainBlack};
  border-top: 1px solid ${(props) => props.theme.darkGray};
  width: 100%;
  padding: 60px 24px 24px 24px;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 36px 16px 20px 16px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr 1.2fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .brand {
      font-size: 24px;
      font-weight: 900;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        color: ${(props) => props.theme.orange};
      }
    }

    .desc {
      font-size: 14px;
      color: ${(props) => props.theme.lightGray};
      line-height: 1.6;
      max-width: 320px;
    }

    h4 {
      font-size: 16px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 8px;

      &::after {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${(props) => props.theme.orange};
        border-radius: 2px;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        font-size: 14px;
        color: ${(props) => props.theme.lightGray};
        display: flex;
        align-items: center;
        gap: 8px;

        a {
          color: ${(props) => props.theme.lightGray};
          text-decoration: none;
          transition: all 0.2s ease;

          &:hover {
            color: ${(props) => props.theme.orange};
            transform: translateX(3px);
          }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 12px;
      margin-top: 4px;

      a {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.secondBlack};
        border: 1px solid ${(props) => props.theme.darkGray};
        color: ${(props) => props.theme.white};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;

        &:hover {
          background-color: ${(props) => props.theme.orange};
          border-color: ${(props) => props.theme.orange};
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 24px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: ${(props) => props.theme.lightGray};

  p {
    span {
      color: ${(props) => props.theme.orange};
      font-weight: 700;
    }
  }

  .badges {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      background-color: ${(props) => props.theme.secondBlack};
      border: 1px solid ${(props) => props.theme.darkGray};
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;
