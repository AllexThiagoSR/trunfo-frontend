import React from 'react';

function DeckHeader({ name, created, updated, canEdit }) {
  return (
    <header>
      <h3>Nome: { name }</h3>
      <p>Criado: { created }</p>
      <p>Atualizado: { updated }</p>
      {
        canEdit ? <button>Editar</button> : ''
      }
    </header>
  );
}

export default DeckHeader;