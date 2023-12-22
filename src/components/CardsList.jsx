import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

CardsList.propTypes = {
  
};

function CardsList({ cards }) {
  return (
    <div>
      <ul className="list">
        {   
          cards ? cards.map((card) => (
            <li key={ `${card.id}-card`}>
              <Link href={ `/decks/${card.deckId}` }>
                <div>
                  <p>{ card.name }</p>
                </div>
              </Link> 
            </li>
          )) : []
        }
      </ul>
    </div>
  );
}

export default CardsList;
