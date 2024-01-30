import { useRouter } from 'next/router';
import React, { useState } from 'react';

function CreateDeckForm({ setCreatedDecks, closeFunc }) {
  const [deck, setDeck] = useState({
    name: '',
  });
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    const newValue = name.includes('attr') && !value ? undefined : value;
    setDeck({ ...deck, [name]: newValue });
  };

  const send = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch(
      'http://localhost:3001/decks',
      {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(deck),
      }
    );
    const createdDeck = await response.json();
    if (createdDeck.message) return setError(createdDeck.message); 
    setCreatedDecks((decks) => {
      console.log(decks);
      return [...decks, createdDeck];
    });
    closeFunc();
  };

  return (
    <div>
      <form onSubmit={ send }>
        <label>
          <input onChange={handleChange} placeholder="Nome" name="name" value={deck.name}/>
        </label>
        <label>
          <input onChange={handleChange} placeholder="Nome do primeiro atributo" name="attributeOne" value={deck.attributeOne}/>
        </label>
        <label>
          <input onChange={handleChange} placeholder="Nome do segundo atributo" name="attributeTwo" value={deck.attributeTwo}/>
        </label>
        <label>
          <input onChange={handleChange} placeholder="Nome do terceiro atributo" name="attributeThree" value={deck.attributeThree}/>
        </label>
        <button>Criar</button>
      </form>
      {
        error && <p>{ error }</p>
      }
    </div>
  );
}

export default CreateDeckForm;