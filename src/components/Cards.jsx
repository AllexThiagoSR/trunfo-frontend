import React from 'react';
import Card from './Card';

function Cards({ cards, attributesNames }) {
  return (
    <ul>
      {
        cards ? cards.map((card) => (
          <li key={ card.id }>
            <div className="card-button-container">
              <Card
                {...card}
                attributesNames={ attributesNames }
              />
              <button>
                Excluir
              </button>
            </div>
          </li>
        )) : []
      }
    </ul>
  );
}

export default Cards;