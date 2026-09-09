import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.thead`
  background-color: ${(props) => props.theme.black};
`;

export const Tr = styled.tr`
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

export const Th = styled.th`
  padding: 16px 20px;
  text-align: left;
  color: ${(props) => props.theme.lightGray};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${(props) => props.theme.darkGray};
`;

export const Td = styled.td`
  padding: 16px 20px;
  color: ${(props) => props.theme.white};
  font-size: 15px;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  vertical-align: middle;
`;

export const Body = styled.tbody``;

