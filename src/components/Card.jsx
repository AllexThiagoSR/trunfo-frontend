import Image from 'next/image';
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
    attributesNames,
    isTrunfo,
  } = props;
  return (
    <div className="card">
      <div className="img-container">
        {/* <img
          src={ image }
          alt={ name }
        /> */}
        <Image
          src={ image }
          alt={ name }
          width={ 500 }
          height={ 500 }
        />
      </div>
      <div className="info-container">
        <h2 className="card-name">{ name }</h2>
        <p className="desc-card">{ description }</p>
        <div className="attribute-container">
          <p>
            { `${attributesNames[0]}: ${attributeOne}` }
          </p>
          <p>
            { `${attributesNames[1]}: ${attributeTwo}` }
          </p>
          <p>
            { `${attributesNames[2]}: ${attributeThree}` }
          </p>
        </div>
        <div className="trunfo">
          {
            isTrunfo ? (
              <p className="trunfo-text">Super Trunfo</p>
            ) : ''
          }
          <p>{ `Raridade: ${rarity.name}` }</p>
        </div>
      </div>
    </div>
  );
}

export default Card;