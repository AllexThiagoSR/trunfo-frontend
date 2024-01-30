import React, { useState } from 'react';
import ProfileDecks from './ProfileDecks';
import Link from 'next/link';
import CreateDeckForm from './CreateDeckForm';

const PLACEHOLDER = `https://st3.depositphotos.com
/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`;

function Profile({ username, image, email, decks }) {
  const [createdDecks, setCreatedDecks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="profile-container">
      <header className="profile-header">
        <img src={ image || PLACEHOLDER } width={ 200 } height={ 200 } />
        <p>{ username }</p>
        <p>{ email }</p>
        <nav>
          <ul className="nav-list">
            <li><Link href="/decks">Decks Page</Link></li>
            <li><Link href="/cards">Cards Page</Link></li>
            <li><Link href="/profile">Users Page</Link></li>
          </ul>
        </nav>
      </header>
      <main className="profile-decks-container">
        <ProfileDecks decks={ [...decks, ...createdDecks] }  />
        <button onClick={ () => setShowForm(!showForm) } >
          { showForm ? 'Fechar' : 'Criar deck' }
        </button>
        {
          showForm &&
            <CreateDeckForm setCreatedDecks={ setCreatedDecks } closeFunc={ () => setShowForm(false) } />
        }
      </main>
    </div>
  );
}

export default Profile;