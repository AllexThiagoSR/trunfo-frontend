import Link from 'next/link';
import React from 'react';

function DeckCard({ name, created, updated, id }) {
  return (
    <Link href={`/decks/${id}`}>
      <div className="deck-card">
        <p>{ name }</p>
        <p>Criado: { created }</p>
        <p>Atualizado: { updated }</p>
      </div>
    </Link>
  );
}

export default DeckCard;