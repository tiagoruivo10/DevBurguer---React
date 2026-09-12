import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Overlay = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 99998;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
`;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.secondBlack};
  border-right: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  padding: 24px 16px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  z-index: 100;

  @media (max-width: 960px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    height: 100vh;
    height: 100dvh;
    z-index: 99999;
    box-shadow: 10px 0 35px rgba(0, 0, 0, 0.85);
    transform: ${(props) =>
      props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s ease;
    overflow-y: auto;
  }
`;

export const CloseDrawerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.orange};
    border-color: ${(props) => props.theme.orange};
    color: #ffffff;
  }

  @media (max-width: 960px) {
    display: flex;
  }
`;

export const AdminHeader = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  padding: 8px 0;
  width: 100%;
  text-decoration: none;

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .brand-title {
    font-size: 22px;
    font-weight: 900;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 6px;
    letter-spacing: -0.5px;
    transition: transform 0.2s ease;

    span {
      color: ${(props) => props.theme.orange};
    }
  }

  &:hover .brand-title {
    transform: scale(1.05);
  }

  .admin-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
    color: ${(props) => props.theme.white};
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 4px 10px;
    border-radius: 12px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) =>
    props.$isActive ? props.theme.white : props.theme.lightGray};
  background: ${(props) =>
    props.$isActive
      ? `linear-gradient(135deg, ${props.theme.orange}, #ea580c)`
      : 'transparent'};
  box-shadow: ${(props) =>
    props.$isActive ? '0 4px 14px rgba(255, 107, 0, 0.35)' : 'none'};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.$isActive ? '' : 'rgba(255, 255, 255, 0.05)'};
    transform: translateX(4px);
  }

  &.logout-btn {
    color: ${(props) => props.theme.red};
    background-color: rgba(239, 68, 68, 0.1);

    &:hover {
      background-color: ${(props) => props.theme.red};
      color: ${(props) => props.theme.white};
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid ${(props) => props.theme.darkGray};

  .user-info-admin {
    padding: 0 8px;

    p {
      font-size: 11px;
      color: ${(props) => props.theme.lightGray};
    }

    strong {
      font-size: 13px;
      color: ${(props) => props.theme.white};
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

