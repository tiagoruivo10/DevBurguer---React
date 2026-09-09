import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

