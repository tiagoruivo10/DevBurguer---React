import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 136px);
  background-color: ${(props) => props.theme.mainBlack};
  padding-bottom: 80px;
`;

export const Banner = styled.section`
  padding: 48px 24px 32px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(11, 15, 23, 1) 100%);

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

  p {
    color: ${(props) => props.theme.lightGray};
    font-size: 15px;
    margin-top: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${(props) => props.theme.white};
  letter-spacing: -0.5px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  width: 100%;
  max-width: 1280px;
  padding: 40px 24px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  .cart-items-wrapper {
    overflow-x: auto;
  }

  .cart-resume-wrapper {
    position: sticky;
    top: 96px;
  }
`;

