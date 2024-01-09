import React from 'react';
// import PropTypes from 'prop-types';

// Card.propTypes = {
  
// };

function Card(props) {
  const {
    image,
    attributeOne,
    attributeTwo,
    attributeThree,
    description,
    name,
    rarity,
    id,
    attributesNames,
    isTrunfo,
  } = props;
  return (
    <div className="card">
      <div className="img-container">
        <img
          src={ image }
          alt={ name }
          data-testid="image-card"
        />
      </div>
      <div className="info-container">
        <h2 data-testid="name-card" className="card-name">{ name }</h2>
        <p data-testid="description-card" className="desc-card">{ description }</p>
        <div className="attribute-container">
          <p data-testid="attr1-crd">
            { `${attributesNames[0]}: ${attributeOne}` }
          </p>
          <p data-testid="attr2-card">
            { `${attributesNames[1]}: ${attributeTwo}` }
          </p>
          <p data-testid="attr3-card">
            { `${attributesNames[2]}: ${attributeThree}` }
          </p>
        </div>
        <div className="trunfo">
          {
            isTrunfo ? (
              <p data-testid="trunfo-card" className="trunfo-text">Super Trunfo</p>
            ) : ''
          }
          <p data-testid="rare-card">{ `Raridade: ${rarity.name}` }</p>
        </div>
      </div>
    </div>
  );
}

export default Card;