import formatDate from '@/utils/formatDate';
import React from 'react';

function DeckHeader({ name, created, updated, canEdit }) {
  return (
    <header>
      <h3>Nome: { name }</h3>
      <p>Criado: { formatDate(created) }</p>
      <p>Atualizado: { formatDate(updated) }</p>
      {
        canEdit ? <button>Editar</button> : ''
      }
    </header>
  );
}

export default DeckHeader;