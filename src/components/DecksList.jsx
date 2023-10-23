import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

DecksList.propTypes = {
  
};

function DecksList({ decks }) {
  return (
    <div>
      <ul>
        {
          decks ? decks.map((deck) => (
            <li key={ `${deck.id}-deck`}>
              <Link href={ `/decks/${deck.id}` }>
                <div>
                  <p>{ deck.name }</p>
                  <p>Created: { deck.created }</p>
                  <p>Updated: { deck.updated }</p>
                  <p>User: { deck.user.username }</p>
                </div>
              </Link>
            </li>
          )) : []
        }
      </ul>
    </div>
  );
}

export default DecksList;