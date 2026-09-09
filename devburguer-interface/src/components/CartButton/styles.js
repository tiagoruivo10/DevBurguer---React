import styled from 'styled-components';

export const ContainerButton = styled.button`
  background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 12px;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.35);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;

  &:hover {
    background: linear-gradient(135deg, #fb923c, ${(props) => props.theme.orange});
    transform: scale(1.08);
    box-shadow: 0 6px 16px rgba(255, 107, 0, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;

