import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import React from 'react';

function DeckCard({ name, created, updated, id }) {
  return (
      <div>
        <p className="deck-name">{ name }</p>
        <p>Criado: { formatDate(created) }</p>
        <p>Atualizado: { formatDate(updated) }</p>
      </div>
  );
}

export default DeckCard;