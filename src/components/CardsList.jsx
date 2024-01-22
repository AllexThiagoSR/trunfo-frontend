import React from 'react';
import Card from './Card';

function CardsList({ cards }) {
  return (
    <div className="saved-cards-container">
      <ul>
      {
        cards ? cards.map((card) => (
          <li key={ card.id }>
            <div className="card-button-container">
              <Card
                {...card}
                attributesNames={ [...Object.values(card.deck)] }
              />
            </div>
          </li>
        )) : []
      }
    </ul>
    </div>
  );
}

export default CardsList;
