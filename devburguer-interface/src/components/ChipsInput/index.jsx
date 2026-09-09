import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Check, CheckCircle, Plus, X, XCircle } from '@phosphor-icons/react';

import {
  Container,
  LabelGroup,
  ChipsTrack,
  Chip,
  InputRow,
  HelperText,
} from './styles';

export function ChipsInput({
  label,
  icon: Icon,
  chips = [],
  onChange,
  placeholder = 'Digite um item e aperte Enter...',
  variant = 'ingredient', // 'ingredient' | 'removable'
  helperText,
}) {
  const [newText, setNewText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    const trimmed = newText.trim();
    if (!trimmed) return;

    if (!chips.includes(trimmed)) {
      onChange([...chips, trimmed]);
    }
    setNewText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleRemove = (indexToRemove) => {
    const updated = chips.filter((_, idx) => idx !== indexToRemove);
    onChange(updated);
    if (editingIndex === indexToRemove) {
      setEditingIndex(null);
    }
  };

  const startEditing = (index, currentText) => {
    setEditingIndex(index);
    setEditText(currentText);
  };

  const saveEdit = (index) => {
    const trimmed = editText.trim();
    if (trimmed) {
      const updated = [...chips];
      updated[index] = trimmed;
      onChange(updated);
    } else {
      handleRemove(index);
    }
    setEditingIndex(null);
    setEditText('');
  };

  const handleEditKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveEdit(index);
    } else if (e.key === 'Escape') {
      setEditingIndex(null);
    }
  };

  return (
    <Container>
      <LabelGroup>
        <span className="label-title">
          {Icon && <Icon size={16} />}
          {label}
        </span>
        <span className="count-badge">
          {chips.length} {chips.length === 1 ? 'item' : 'itens'}
        </span>
      </LabelGroup>

      {/* Balõezinhos Interativos */}
      <ChipsTrack>
        {chips.length === 0 ? (
          <span className="empty-hint">
            Nenhum item adicionado. Digite no campo abaixo para criar o primeiro balãozinho.
          </span>
        ) : (
          chips.map((chip, idx) => {
            const isEditing = editingIndex === idx;

            return (
              <Chip key={`${chip}-${idx}`} $variant={variant}>
                {variant === 'ingredient' ? (
                  <CheckCircle size={15} color="#10B981" weight="fill" />
                ) : (
                  <XCircle size={15} color="#F87171" weight="fill" />
                )}

                {isEditing ? (
                  <input
                    type="text"
                    className="edit-input"
                    value={editText}
                    autoFocus
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => saveEdit(idx)}
                    onKeyDown={(e) => handleEditKeyDown(e, idx)}
                  />
                ) : (
                  <span
                    className="chip-text"
                    title="Clique para editar este item"
                    onClick={() => startEditing(idx, chip)}
                  >
                    {chip}
                  </span>
                )}

                {isEditing ? (
                  <button
                    type="button"
                    className="delete-btn"
                    title="Confirmar alteração"
                    onClick={() => saveEdit(idx)}
                  >
                    <Check size={13} weight="bold" color="#10B981" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="delete-btn"
                    title="Remover balãozinho"
                    onClick={() => handleRemove(idx)}
                  >
                    <X size={13} weight="bold" />
                  </button>
                )}
              </Chip>
            );
          })
        )}
      </ChipsTrack>

      {/* Input para adicionar novo balãozinho */}
      <InputRow>
        <input
          type="text"
          value={newText}
          placeholder={placeholder}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleAdd}>
          <Plus size={15} weight="bold" />
          Adicionar
        </button>
      </InputRow>

      {helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
}

ChipsInput.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  chips: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['ingredient', 'removable']),
  helperText: PropTypes.string,
};

export default ChipsInput;
