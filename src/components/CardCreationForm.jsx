import React, { useState } from 'react';
import Card from './Card';

function CardCreationForm({ attributesNames, closeFunc, deckId }) {
  const [card, setCard] = useState({
    name: '',
    description: '',
    image: '',
    rarityId: 1,
    rarity: { name: 'Normal' },
    isTrunfo: false,
    attributeOne: 0,
    attributeTwo: 0,
    attributeThree: 0,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const rarities = [
      'Normal',
      'Rara',
      'Muito Rara',
      'Épica',
      'Lendária',
    ];
    const name = e.target.name;
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    value = e.target.type === 'number' ? parseInt(value) : value;

    if (name === 'rarity') {
      const rarityId = parseInt(value);
      setCard({
        ...card,
        rarityId,
        rarity: { name: rarities[rarityId - 1] },
      });
      return;
    }
    setCard({ ...card, [name]: value });
  };

  const saveCard = async () => {
    const cardBody = {
      ...card,
      rarity: undefined,
      attributeOne: undefined,
      attributeTwo: undefined,
      attributeThree: undefined,
      attributes: [card.attributeOne, card.attributeTwo, card.attributeThree],
      deckId,
    };

    const response = await fetch(
      'http://localhost:3001/cards',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(cardBody),
      }
    );

    const result = await response.json();
    if (result.message) setError(result.message);
  };

  return (
    <section>
      <form>
        <label>
          <input name="name" value={ card.name } onChange={ handleChange } />
        </label>
        <label>
          <textarea name="description" value={ card.description } onChange={ handleChange } />
        </label>
        <label>
          <input name="image" value={ card.image } onChange={ handleChange } />
        </label>
        <label>
          <select name="rarity" value={ card.rarityId } defaultValue={ 1 } onChange={ handleChange }>
            <option id="normal"value={ 1 }>Normal</option>
            <option id="rare" value={ 2 }>Rara</option>
            <option id="very-rare" value={ 3 }>Muito Rara</option>
            <option id="epic" value={ 4 }>Épica</option>
            <option id="legendary" value={ 5 }>Lendária</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="isTrunfo" checked={ card.isTrunfo } onChange={ handleChange } />Trunfo
        </label>
        <label>
          { attributesNames[0] }:
          <input
            type="number"
            name="attributeOne"
            value={ card.attributeOne }
            onChange={ handleChange }
          />
        </label>
        <label>
          { attributesNames[1] }:
          <input
            type="number"
            name="attributeTwo"
            value={ card.attributeTwo }
            onChange={ handleChange }
          />
        </label>
        <label>
          { attributesNames[2] }:
          <input
            type="number"
            name="attributeThree"
            value={ card.attributeThree }
            onChange={ handleChange }
          />
        </label>
      </form>
      <div>
        <h2>Preview</h2>
        <Card
          { ...card }
          attributesNames={ attributesNames }
        />
      </div>
      <button onClick={ closeFunc }>Cancelar</button>
      <button onClick={ saveCard }>Salvar</button>
      <p>{error}</p>
    </section>
  );
}

export default CardCreationForm;