import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label-title {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      color: ${(props) => props.theme.orange};
    }
  }

  .count-badge {
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 2px 8px;
    border-radius: 12px;
  }
`;

export const ChipsTrack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 14px;
  background-color: ${(props) => props.theme.mainBlack};
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 12px;
  min-height: 56px;
  align-items: center;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: ${(props) => props.theme.orange};
  }

  .empty-hint {
    font-size: 13px;
    color: #64748b;
    font-style: italic;
  }
`;

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #f1f5f9;
  transition: all 0.2s ease;

  background-color: ${(props) =>
    props.$variant === 'ingredient'
      ? 'rgba(16, 185, 129, 0.12)'
      : 'rgba(239, 68, 68, 0.12)'};

  border: 1px solid
    ${(props) =>
      props.$variant === 'ingredient'
        ? 'rgba(16, 185, 129, 0.35)'
        : 'rgba(239, 68, 68, 0.35)'};

  &:hover {
    border-color: ${(props) =>
      props.$variant === 'ingredient' ? '#10B981' : '#EF4444'};
    transform: translateY(-1px);
  }

  .chip-text {
    cursor: pointer;
    user-select: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .edit-input {
    background: #111827;
    border: 1px solid ${(props) => props.theme.orange};
    border-radius: 6px;
    color: #ffffff;
    font-size: 13px;
    padding: 2px 6px;
    outline: none;
    min-width: 120px;
  }

  .delete-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-radius: 50%;
    transition: all 0.15s ease;

    &:hover {
      color: #ffffff;
      background-color: #ef4444;
      transform: scale(1.15);
    }
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
    height: 42px;
    background-color: ${(props) => props.theme.mainBlack};
    border: 1px solid ${(props) => props.theme.darkGray};
    border-radius: 10px;
    padding: 0 14px;
    color: #ffffff;
    font-size: 13px;
    transition: all 0.2s ease;

    &::placeholder {
      color: #64748b;
    }

    &:focus {
      border-color: ${(props) => props.theme.orange};
      box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.15);
      outline: none;
    }
  }

  button {
    height: 42px;
    padding: 0 16px;
    border-radius: 10px;
    background: linear-gradient(135deg, ${(props) => props.theme.orange}, #ea580c);
    color: #ffffff;
    border: none;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const HelperText = styled.span`
  font-size: 11px;
  color: #64748b;
`;
