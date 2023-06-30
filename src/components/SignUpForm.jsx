import { useRouter } from 'next/router';
import React, { useState } from 'react';
const URL_BASE = process.env.URL_BASE || 'http://localhost:3001';

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
          Username:
          <input
            type="text" 
            name="username"
            value={ username }
            onChange={ handleChange }
            required
          />  
        </label>
        <label>
          Image Link:
          <input
            type="text" 
            name="image"
            value={ image }
            onChange={ handleChange }
          />  
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ handleChange }
            required
          />
        </label>
        <label>
          Password: 
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirm"
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
      <img
        width={ 100 }
        height={ 100 }
        src={ image }
      />
    </div>
  );
}

export default SignUpForm;