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
    <>
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
            onChange={ handleChange }
          />  
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
    </>
  );
}

export default SignUpForm;