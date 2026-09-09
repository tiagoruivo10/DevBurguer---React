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
`;

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
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


