import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(11, 15, 23, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
  width: 100%;
  height: 76px;
  padding: 0 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 900px) {
    padding: 0 16px;
    height: 68px;
  }
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

  @media (max-width: 900px) {
    font-size: 20px;
    margin-right: 0;
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

    @media (max-width: 900px) {
      display: none;
    }
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

  @media (max-width: 900px) {
    display: none;
  }
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
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/* ===== COMPONENTES MOBILE ===== */
export const MobileActions = styled.div`
  display: none;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const MobileCartButton = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.orange};
  transition: all 0.2s ease;

  &:hover,
  &:active {
    border-color: ${(props) => props.theme.orange};
    transform: scale(1.05);
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.$isOpen ? props.theme.orange : props.theme.secondBlack};
  border: 1px solid
    ${(props) => (props.$isOpen ? props.theme.orange : props.theme.darkGray)};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.orange};
    color: ${(props) => (props.$isOpen ? props.theme.white : props.theme.orange)};
  }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  top: 68px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 998;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transition: all 0.25s ease-in-out;
`;

export const MobileDrawer = styled.div`
  position: fixed;
  top: 68px;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px;
  background-color: #0d131f;
  border-left: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 18px;
  overflow-y: auto;
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.8);
  transform: ${(props) =>
    props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DrawerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background-color: rgba(30, 41, 59, 0.6);
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 16px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;

    .name {
      font-size: 15px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .role {
      font-size: 12px;
      color: ${(props) => props.theme.orange};
      font-weight: 600;
    }
  }

  .login-prompt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 14px;
      font-weight: 700;
      color: ${(props) => props.theme.white};
    }
  }
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const DrawerLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => (props.$isActive ? props.theme.orange : props.theme.white)};
  background-color: ${(props) =>
    props.$isActive ? 'rgba(255, 107, 0, 0.12)' : 'transparent'};
  border: 1px solid
    ${(props) => (props.$isActive ? 'rgba(255, 107, 0, 0.3)' : 'transparent')};
  transition: all 0.2s ease;

  svg {
    color: ${(props) =>
      props.$isActive ? props.theme.orange : props.theme.lightGray};
    flex-shrink: 0;
  }

  .badge-count {
    margin-left: auto;
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};
    font-size: 11px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 12px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: ${(props) => props.theme.orange};

    svg {
      color: ${(props) => props.theme.orange};
    }
  }
`;

export const DrawerFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const DrawerLogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background-color: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ef4444;
    color: #ffffff;
  }
`;


