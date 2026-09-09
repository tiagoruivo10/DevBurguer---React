import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(11, 15, 23, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
  width: 100%;
  height: 76px;
  padding: 0 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export const Brand = styled(Link)`
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: -0.5px;
  margin-right: 32px;

  span {
    color: ${(props) => props.theme.orange};
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  .nav-links {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? props.theme.orange : props.theme.lightGray};
  background-color: ${(props) =>
    props.$isActive ? 'rgba(255, 107, 0, 0.1)' : 'transparent'};
  border: 1px solid
    ${(props) => (props.$isActive ? 'rgba(255, 107, 0, 0.3)' : 'transparent')};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: rgba(255, 255, 255, 0.05);
  }

  &.login-btn {
    border: 1px solid ${(props) => props.theme.orange};
    color: ${(props) => props.theme.orange};
    &:hover {
      background-color: ${(props) => props.theme.orange};
      color: ${(props) => props.theme.white};
    }
  }
`;

export const AdminBadge = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: ${(props) => props.theme.white};
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 2px 10px rgba(139, 92, 246, 0.3);

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  padding: 6px 12px;
  background-color: rgba(30, 41, 59, 0.5);
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.darkGray};

  p {
    color: ${(props) => props.theme.secondWhite};
    font-size: 13px;
    font-weight: 400;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.orange};
    }
  }
`;

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 15px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 24px;
  transition: all 0.2s ease-in-out;

  .cart-icon-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.orange};
  }

  &:hover {
    border-color: ${(props) => props.theme.orange};
    box-shadow: ${(props) => props.theme.shadowGlowOrange};
    transform: translateY(-1px);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  font-size: 11px;
  font-weight: 800;
  height: 18px;
  min-width: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid ${(props) => props.theme.mainBlack};
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.red};
  font-size: 12px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  display: block;
  text-align: left;
  margin-top: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

