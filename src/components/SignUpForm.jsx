import { useRouter } from 'next/router';
import React, { useState } from 'react';
const URL_BASE = 'http://localhost:3001';

function SignUpForm() {
  const router = useRouter();
  const [
    { email, password, username, image, confirm }, 
    setFormInputs,
  ] = useState({ email: '', password: '', username: '', image: '', confirm: '' });
  const [responseMessage, setResponseMessage] = useState({ message: '' });
  
  const handleChange = ({ target: { name, value } }) => {
    setFormInputs((state) => ({ ...state, [name]: value}));
  };

  return (
    <div>
      <form
        className="sign-up-form"
        onSubmit={ async (e) => {
          e.preventDefault();
          if (password !== confirm) {
            setResponseMessage({ message: 'Passwords are different' })
            return undefined;
          }
          const response = await fetch(URL_BASE + '/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({ email, password, username, image: image || undefined }),
          });
          const data = await response.json();
          if (data.message) {
            setResponseMessage(data);
            return undefined;
          }
          router.push('/');
        }}
      >
        <label>
          <input
            type="text" 
            name="username"
            value={ username }
            placeholder="Username"
            className="text-input"
            onChange={ handleChange }
            required
          />  
        </label>
        <label>
          <input
            type="text" 
            name="image"
            value={ image }
            placeholder="Image Link"
            className="text-input"
            onChange={ handleChange }
          />  
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="text-input"
            value={ email }
            onChange={ handleChange }
            required
          />
        </label>
        <label> 
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-input"
            value={ password }
            onChange={ handleChange }
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            className="text-input"
            value={ confirm }
            onChange={ handleChange }
            required
          />
        </label>
        <button>Send</button>
      </form>
      <p>
        {
          responseMessage.message
        }
      </p>
      <div className="profile-image-container">
        <img
          width={ 400 }
          height={ 400 }
          src={ image }
          alt="Your profile image"
        />
      </div>
    </div>
  );
}

export default SignUpForm;