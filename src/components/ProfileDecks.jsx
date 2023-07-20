import React from 'react';
import DeckCard from './DeckCard';

function ProfileDecks({ decks }) {
  return (
    <ul className="decks-list">
      {
        decks.map((deck) => (<li key={ deck.id } ><DeckCard { ...deck }/></li>))
      }
    </ul>
  );
}

export default ProfileDecks;
