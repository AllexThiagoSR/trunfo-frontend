import React from 'react';
import ProfileDecks from './ProfileDecks';

const PLACEHOLDER = `https://st3.depositphotos.com
/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`;

function Profile({ username, image, email, decks }) {
  return (
    <div>
      <img src={ image || PLACEHOLDER } width={ 200 } height={ 200 } />
      <div>
        <p>{ username }</p>
        <p>{ email }</p>
      </div>
      <ProfileDecks decks={ decks }  />
    </div>
  );
}

export default Profile;