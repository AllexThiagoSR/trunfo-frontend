import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import React from 'react';

function DeckHeader({ name, created, updated, canEdit }) {
  return (
    <header className='deck-header'>
      <section>
        <h3>Nome: { name }</h3>
        <p>Criado: { formatDate(created) }</p>
        <p>Atualizado: { formatDate(updated) }</p>
        {
          canEdit ? <button>Editar</button> : ''
        }
      </section>
      <nav>
        <ul className="nav-list">
          <li><Link href="/cards">Cards Page</Link></li>
          <li><Link href="/decks">Decks Page</Link></li>
          <li><Link href="/profile/self" >Your Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default DeckHeader;