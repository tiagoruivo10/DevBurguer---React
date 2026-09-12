import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.mainBlack};
    overflow-y: auto;

    @media (max-width: 960px) {
      min-height: calc(100vh - 60px);
      overflow-x: hidden;
    }
  }

  section {
    margin: 0 auto;
    padding: 36px 32px 60px;
    max-width: 1320px;
    width: 100%;

    @media (max-width: 960px) {
      padding: 18px 14px 48px;
    }
  }
`;

export const MobileAdminHeader = styled.header`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #0b0f17;
  border-bottom: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 900;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);

  @media (max-width: 960px) {
    display: flex;
  }

  .left-group {
    display: flex;
    align-items: center;
    gap: 12px;

    .menu-toggle-btn {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.secondBlack};
      border: 1px solid ${(props) => props.theme.darkGray};
      color: ${(props) => props.theme.orange};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover,
      &:active {
        border-color: ${(props) => props.theme.orange};
        background-color: rgba(255, 107, 0, 0.15);
      }
    }

    .brand {
      font-size: 18px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      gap: 6px;

      span {
        color: ${(props) => props.theme.orange};
      }
    }
  }

  .right-group {
    display: flex;
    align-items: center;
    gap: 10px;

    .admin-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: linear-gradient(135deg, #8b5cf6, #6d28d9);
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 12px;
      letter-spacing: 0.5px;
    }

    .store-link {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.secondBlack};
      border: 1px solid ${(props) => props.theme.darkGray};
      color: ${(props) => props.theme.lightGray};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;

      &:hover {
        color: ${(props) => props.theme.orange};
        border-color: ${(props) => props.theme.orange};
      }
    }
  }
`;

