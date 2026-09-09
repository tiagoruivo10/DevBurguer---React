import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBlack};

  @media (max-width: 960px) {
    grid-template-columns: 80px 1fr;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.mainBlack};
    overflow-y: auto;
  }

  section {
    margin: 0 auto;
    padding: 36px 32px 60px;
    max-width: 1320px;
    width: 100%;
  }
`;

