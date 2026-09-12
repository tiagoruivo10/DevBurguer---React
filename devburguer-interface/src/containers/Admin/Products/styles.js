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

  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 12px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const NewProductButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
  color: ${(props) => props.theme.white};
  border: none;
  padding: 12px 22px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(255, 107, 0, 0.35);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(255, 107, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 12px 16px;
  }
`;

export const SearchWrapper = styled.div`
  margin-bottom: 20px;

  .search-input {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.secondBlack};
    border: 1px solid ${(props) => props.theme.cardBorder || props.theme.darkGray};
    border-radius: 12px;
    padding: 12px 16px;
    max-width: 400px;
    color: ${(props) => props.theme.orange};

    @media (max-width: 768px) {
      max-width: 100%;
    }

    &:focus-within {
      border-color: ${(props) => props.theme.orange};
      box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.2);
    }

    input {
      background: transparent;
      border: none;
      width: 100%;
      color: ${(props) => props.theme.white};
      font-size: 14px;

      &::placeholder {
        color: ${(props) => props.theme.lightGray};
      }
    }
  }
`;

export const ProductImage = styled.img`
  height: 52px;
  width: 52px;
  object-fit: contain;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 4px;
`;

export const OfferBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${(props) =>
    props.$isOffer ? 'rgba(16, 185, 129, 0.15)' : 'rgba(148, 163, 184, 0.1)'};
  color: ${(props) => (props.$isOffer ? props.theme.green : props.theme.lightGray)};
  border: 1px solid
    ${(props) =>
      props.$isOffer ? 'rgba(16, 185, 129, 0.3)' : 'rgba(148, 163, 184, 0.2)'};
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const EditButton = styled.button`
  border: 0;
  background-color: rgba(255, 255, 255, 0.08);
  height: 36px;
  width: 36px;
  border-radius: 10px;
  color: ${(props) => props.theme.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};
    transform: scale(1.1);
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  background-color: rgba(239, 68, 68, 0.12);
  height: 36px;
  width: 36px;
  border-radius: 10px;
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ef4444;
    color: #ffffff;
    transform: scale(1.1);
  }
`;

