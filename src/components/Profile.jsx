import React from 'react';
import ProfileDecks from './ProfileDecks';
import Link from 'next/link';

const PLACEHOLDER = `https://st3.depositphotos.com
/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`;

function Profile({ username, image, email, decks }) {
  return (
    <>
      <header>
        <div>
          <img src={ image || PLACEHOLDER } width={ 200 } height={ 200 } />
          <div>
            <p>{ username }</p>
            <p>{ email }</p>
          </div>
          <nav>
            <ul>
              <li><Link href="/">Decks Page</Link></li>
              <li><Link href="/">Cards Page</Link></li>
              <li><Link href="/">Users Page</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <ProfileDecks decks={ decks }  />
      </main>
    </>
  );
}

export default Profile;