import React from 'react';
import DeckCard from './DeckCard';

function ProfileDecks({ decks }) {
  return (
    <section>
      <ul>
        {
          decks.map((deck) => (<li key={ deck.id } ><DeckCard { ...deck }/></li>))
        }
      </ul>
    </section>
  );
}

export default ProfileDecks;
