import ReactSelect from 'react-select';
import styled from 'styled-components';
import { Button } from '../../../components';

export const Container = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding-bottom: 40px;

  @media (max-width: 640px) {
    padding: 0 4px 32px;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 24px;

  h2 {
    font-size: 26px;
    font-weight: 800;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 14px;

    svg {
      color: ${(props) => props.theme.orange};
    }
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.lightGray};
    margin-top: 4px;
  }

  @media (max-width: 640px) {
    margin-bottom: 18px;

    h2 {
      font-size: 20px;
      margin-top: 10px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${(props) => props.theme.lightGray};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    background: rgba(255, 107, 0, 0.12);
    border-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.orange};
    transform: translateX(-2px);
  }
`;

export const FormCard = styled.form`
  border-radius: 20px;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  padding: 36px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);

  @media (max-width: 640px) {
    padding: 20px 16px;
    border-radius: 16px;
    gap: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${(props) => props.theme.orange};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.white};
  font-size: 15px;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${(props) => props.theme.orange};
    box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.2);
  }

  &::placeholder {
    color: ${(props) => props.theme.lightGray};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 75px;
  border-radius: 10px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${(props) => props.theme.orange};
    box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.2);
    outline: none;
  }

  &::placeholder {
    color: #64748b;
  }
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 2px dashed ${(props) => props.theme.darkGray};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${(props) => props.theme.lightGray};
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  svg {
    color: ${(props) => props.theme.orange};
  }

  span {
    font-size: 13px;
    font-weight: 600;
    text-align: center;
  }

  &:hover {
    border-color: ${(props) => props.theme.orange};
    background-color: rgba(255, 107, 0, 0.05);
    color: ${(props) => props.theme.white};
  }

  input {
    display: none;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 10px;
  padding: 10px 14px;
  margin-top: 4px;

  img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  span {
    font-size: 13px;
    color: ${(props) => props.theme.lightGray};
    font-weight: 500;
  }
`;

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: '#0B0F17',
    borderColor: state.isFocused ? '#FF6B00' : '#334155',
    borderRadius: '10px',
    minHeight: '48px',
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
    padding: '12px 16px',
    fontSize: '14px',
    transition: 'all 0.15s ease',
    '&:active': {
      backgroundColor: '#EA580C',
      color: '#FFFFFF',
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
  }),
  placeholder: (base) => ({
    ...base,
    color: '#94A3B8',
    fontSize: '14px',
  }),
  input: (base) => ({
    ...base,
    color: '#FFFFFF',
  }),
};

export const Select = styled(ReactSelect)``;


export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.red};
  font-size: 12px;
  font-weight: 600;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 10px;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.orange};
    cursor: pointer;
  }

  label {
    font-size: 14px;
    color: ${(props) => props.theme.white};
    cursor: pointer;

    strong {
      color: ${(props) => props.theme.orange};
    }
  }
`;

