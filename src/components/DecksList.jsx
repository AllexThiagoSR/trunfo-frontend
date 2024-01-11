import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PLACEHOLDER = `https://st3.depositphotos.com
/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`;

DecksList.propTypes = {
  
};

function DecksList({ decks }) {
  const router = useRouter();

  return (
    <div>
      <ul className="list">
        {
          decks ? decks.map((deck) => (
            <li
              key={ `${deck.id}-deck`}
              className="deck-list-card"
              value={ deck.id }
              onClick={ () => router.push(`/decks/${deck.id}`) }
            >
              <div>
                <p className="deck-name">{ deck.name }</p>
                <p>Created: { deck.created }</p>
                <p>Updated: { deck.updated }</p>
              </div>
              <div className="user-container">
                <img className="user-image" src={ deck.user.image || PLACEHOLDER }/>
                <p>{ deck.user.username }</p>
              </div>
            </li>
          )) : []
        }
      </ul>
    </div>
  );
}

export default DecksList;