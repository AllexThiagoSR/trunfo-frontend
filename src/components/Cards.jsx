import React from 'react';

function Cards({ cards }) {
  return (
    <div>
      <ul>
        {
          cards ? cards.map(({ name, id }) => <li key={ id }>{ name }</li>) : []
        }
      </ul>
    </div>
  );
}

export default Cards;