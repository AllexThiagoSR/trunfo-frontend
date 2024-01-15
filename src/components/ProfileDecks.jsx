import React from 'react';
import DeckCard from './DeckCard';
import { useRouter } from 'next/router';

function ProfileDecks({ decks }) {
  const router = useRouter();
  return (
    <ul className="list decks-list">
      {
        decks.map((deck) => (
         <li  className="deck-list-card" key={ deck.id } onClick={ () => router.push(`/decks/${deck.id}`) } >
            <DeckCard { ...deck }/>
          </li>
        ))
      }
    </ul>
  );
}

export default ProfileDecks;
