import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
  font-family: ${(props) => props.theme.poppinsFont};
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 16px rgba(255, 107, 0, 0.3);
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, #fb923c, ${(props) => props.theme.orange});
    box-shadow: 0 6px 20px rgba(255, 107, 0, 0.45);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

