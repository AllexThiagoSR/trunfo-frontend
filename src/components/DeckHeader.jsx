import React from 'react';

function DeckHeader({ name, created, updated}) {
  return (
    <header>
      <h3>Nome: { name }</h3>
      <p>Criado: { created }</p>
      <p>Atualizado: { updated }</p>
    </header>
  );
}

export default DeckHeader;