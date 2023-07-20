import React from 'react';
import ProfileDecks from './ProfileDecks';
import Link from 'next/link';

const PLACEHOLDER = `https://st3.depositphotos.com
/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`;

function Profile({ username, image, email, decks }) {
  return (
    <div id="profile-container">
      <header className="profile-header">
        <img src={ image || PLACEHOLDER } width={ 200 } height={ 200 } />
        <p>{ username }</p>
        <p>{ email }</p>
        <nav>
          <ul>
            <li><Link href="/">Decks Page</Link></li>
            <li><Link href="/">Cards Page</Link></li>
            <li><Link href="/">Users Page</Link></li>
          </ul>
        </nav>
      </header>
      <main className="profile-decks-container">
        <ProfileDecks decks={ [...decks, ...decks, ...decks, ...decks, ...decks] }  />
      </main>
    </div>
  );
}

export default Profile;