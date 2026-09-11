import PropTypes from 'prop-types';
import { Trash, WarningCircle } from '@phosphor-icons/react';
import {
  Overlay,
  ModalCard,
  IconContainer,
  Title,
  Description,
  ActionsContainer,
  CancelButton,
  DeleteConfirmButton,
} from './styles';

export function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  productName,
  isLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <IconContainer>
          <WarningCircle size={36} weight="duotone" />
        </IconContainer>

        <Title>Excluir do Cardápio?</Title>

        <Description>
          Tem certeza que deseja excluir <strong>{productName}</strong> definitivamente? Esta ação não poderá ser desfeita.
        </Description>

        <ActionsContainer>
          <CancelButton type="button" onClick={onClose} disabled={isLoading}>
            Cancelar
          </CancelButton>

          <DeleteConfirmButton
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
          >
            <Trash size={18} weight="bold" />
            {isLoading ? 'Excluindo...' : 'Sim, Excluir'}
          </DeleteConfirmButton>
        </ActionsContainer>
      </ModalCard>
    </Overlay>
  );
}

ConfirmDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  productName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ConfirmDeleteModal;
