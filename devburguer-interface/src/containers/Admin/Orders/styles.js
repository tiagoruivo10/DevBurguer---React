import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;

  h2 {
    font-size: 26px;
    font-weight: 800;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: ${(props) => props.theme.orange};
    }
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.lightGray};
    margin-top: 4px;
  }

  .total-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.theme.secondBlack};
    border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
    color: ${(props) => props.theme.lightGray};
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin-bottom: 18px;
    gap: 12px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
    }

    .total-badge {
      width: 100%;
      justify-content: space-between;
      padding: 8px 14px;
      font-size: 12px;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
    margin-bottom: 18px;
    padding-bottom: 6px;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterOptions = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.$isActiveStatus
      ? `linear-gradient(135deg, ${props.theme.orange}, #ea580c)`
      : props.theme.secondBlack};
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.white : props.theme.lightGray};
  border: 1px solid
    ${(props) =>
      props.$isActiveStatus
        ? 'transparent'
        : props.theme.cardBorder || props.theme.darkGray};
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: ${(props) =>
    props.$isActiveStatus
      ? '0 4px 12px rgba(255, 107, 0, 0.35)'
      : '0 2px 6px rgba(0, 0, 0, 0.2)'};

  &:hover {
    color: ${(props) => props.theme.white};
    border-color: ${(props) => props.theme.orange};
    transform: translateY(-1px);
  }

  .count-badge {
    background-color: ${(props) =>
      props.$isActiveStatus ? 'rgba(0, 0, 0, 0.25)' : props.theme.darkGray};
    color: ${(props) => props.theme.white};
    font-size: 11px;
    font-weight: 800;
    padding: 2px 7px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    white-space: nowrap;
    flex-shrink: 0;
    padding: 6px 12px;
    font-size: 13px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const ProductImage = styled.img`
  height: 52px;
  width: 52px;
  object-fit: contain;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 4px;
`;

export const selectStatusStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: '#111827',
    borderColor: state.isFocused ? '#FF6B00' : '#334155',
    borderRadius: '10px',
    minHeight: '38px',
    color: '#FFFFFF',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(255, 107, 0, 0.2)' : 'none',
    '&:hover': {
      borderColor: '#FF6B00',
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#1E293B',
    border: '1px solid #334155',
    borderRadius: '12px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    zIndex: 9999,
    padding: '6px 0',
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#FF6B00'
      : state.isFocused
      ? 'rgba(255, 107, 0, 0.15)'
      : '#1E293B',
    color: state.isSelected ? '#FFFFFF' : state.isFocused ? '#FF6B00' : '#F8FAFC',
    fontWeight: state.isSelected ? 700 : 500,
    cursor: 'pointer',
    padding: '10px 14px',
    fontSize: '13px',
    transition: 'all 0.15s ease',
    '&:active': {
      backgroundColor: '#EA580C',
      color: '#FFFFFF',
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: 600,
  }),
  placeholder: (base) => ({
    ...base,
    color: '#94A3B8',
    fontSize: '13px',
  }),
};

export const SelectStatus = styled(Select)`
  width: 220px;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 16px;
  padding: 14px 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 12px 14px;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

export const DateFilterGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  .filter-title {
    font-size: 13px;
    font-weight: 700;
    color: #94a3b8;
    margin-right: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 4px;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const DateButton = styled.button`
  background: ${(props) =>
    props.$isActive ? 'rgba(255, 107, 0, 0.15)' : '#111827'};
  border: 1px solid
    ${(props) => (props.$isActive ? props.theme.orange : '#334155')};
  color: ${(props) => (props.$isActive ? props.theme.orange : '#94a3b8')};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    border-color: ${(props) => props.theme.orange};
  }

  .badge {
    background: ${(props) =>
      props.$isActive ? props.theme.orange : '#334155'};
    color: ${(props) => (props.$isActive ? '#ffffff' : '#cbd5e1')};
    font-size: 11px;
    padding: 1px 6px;
    border-radius: 10px;
    font-weight: 800;
  }

  @media (max-width: 768px) {
    white-space: nowrap;
    flex-shrink: 0;
    padding: 6px 11px;
    font-size: 12px;
  }
`;

export const LiveControl = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .live-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #10b981;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 20px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #10b981;
      box-shadow: 0 0 10px #10b981;
      animation: pulse 1.8s infinite;
    }
  }

  .sound-btn {
    background: #111827;
    border: 1px solid #334155;
    color: ${(props) => (props.$isMuted ? '#64748b' : '#f59e0b')};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: #f59e0b;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.85);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const DayGroup = styled.div`
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
`;

export const DayGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: ${(props) =>
    props.$isToday
      ? 'linear-gradient(90deg, rgba(255, 107, 0, 0.12) 0%, rgba(30, 41, 59, 0.4) 100%)'
      : 'rgba(255, 255, 255, 0.02)'};
  border-bottom: ${(props) => (props.$isOpen ? '1px solid #334155' : 'none')};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$isToday
        ? 'linear-gradient(90deg, rgba(255, 107, 0, 0.18) 0%, rgba(30, 41, 59, 0.6) 100%)'
        : 'rgba(255, 255, 255, 0.05)'};
  }

  .left-meta {
    display: flex;
    align-items: center;
    gap: 12px;

    .day-title {
      font-size: 16px;
      font-weight: 800;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${(props) => (props.$isToday ? props.theme.orange : '#94A3B8')};
      }
    }

    .today-tag {
      background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 10px;
      letter-spacing: 0.5px;
    }
  }

  .right-meta {
    display: flex;
    align-items: center;
    gap: 16px;

    .stats-pill {
      font-size: 13px;
      font-weight: 700;
      color: #cbd5e1;
      background-color: #111827;
      border: 1px solid #334155;
      padding: 5px 12px;
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;

      strong {
        color: ${(props) => props.theme.orange};
      }
    }

    .toggle-arrow {
      color: #94a3b8;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease;
      transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
  }

  @media (max-width: 768px) {
    padding: 14px 14px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .left-meta {
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;

      .day-title {
        font-size: 14px;
      }
    }

    .right-meta {
      width: 100%;
      justify-content: space-between;
      gap: 8px;

      .stats-pill {
        font-size: 11px;
        padding: 4px 8px;
      }
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  width: 100%;

  .stat-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: ${(props) => props.theme.secondBlack};
    border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    .icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background-color: rgba(255, 107, 0, 0.12);
      border: 1px solid rgba(255, 107, 0, 0.25);
      color: ${(props) => props.theme.orange};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      &.green {
        background-color: rgba(16, 185, 129, 0.12);
        border-color: rgba(16, 185, 129, 0.25);
        color: #10b981;
      }
    }

    .stat-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      overflow: hidden;

      .stat-label {
        font-size: 11px;
        color: #94a3b8;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .stat-value {
        font-size: 16px;
        font-weight: 800;
        color: #ffffff;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    &.highlight .stat-value {
      color: #10b981;
    }
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    .stat-card {
      padding: 10px 12px;
      gap: 8px;

      .icon-wrapper {
        width: 34px;
        height: 34px;
      }

      .stat-info .stat-value {
        font-size: 14px;
      }
    }
  }
`;

export const DesktopTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileOrdersContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 14px 12px 18px;
    background-color: #0b0f17;
  }
`;

export const MobileOrderCard = styled.div`
  background-color: #111827;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

  .order-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .order-number {
      font-size: 15px;
      font-weight: 800;
      color: #ffffff;

      span {
        color: ${(props) => props.theme.orange};
      }
    }

    .order-time {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      color: #94a3b8;
    }
  }

  .order-customer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;

    .label {
      color: #94a3b8;
      font-weight: 500;
    }

    .name {
      color: #f1f5f9;
      font-weight: 700;
    }
  }

  .status-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .status-label {
      font-size: 12px;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .toggle-items-btn {
    background-color: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 8px 12px;
    color: #cbd5e1;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
      color: ${(props) => props.theme.orange};
    }

    .rotate {
      transform: rotate(180deg);
    }
  }

  .mobile-items-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .item-entry {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 42px;
        height: 42px;
        object-fit: cover;
        border-radius: 8px;
        background-color: #1f2937;
        flex-shrink: 0;
      }

      .item-details {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        overflow: hidden;

        .item-name {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-sub {
          font-size: 12px;
          color: ${(props) => props.theme.orange};
          font-weight: 600;
        }

        .item-obs {
          font-size: 11px;
          color: #fca5a5;
          font-style: italic;
        }
      }
    }
  }

  .order-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    .footer-label {
      font-size: 12px;
      color: #94a3b8;
    }

    .total-value {
      font-size: 16px;
      font-weight: 900;
      color: #10b981;
    }
  }
`;



