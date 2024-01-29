import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Create() {
  const [deck, setDeck] = useState({
    name: '',
    attributeOne: '',
    attributeTwo: '',
    attributeThree: '',
  });

  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => { setDeck({ ...deck, [name]: value }); };

  const send = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await fetch(
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
    router.push('/profile/self');
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
    </div>
  );
}

export default Create;