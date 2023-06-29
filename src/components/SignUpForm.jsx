import React, { useState } from 'react';

function SignUpForm() {
  const [{ email, password, username, image, confirm }, setFormInputs] = useState({ 
    email: '',
    password: '',
    username: '',
    image: '',
    confirm: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormInputs((state) => ({ ...state, [name]: value}));
  };

  return (
    <div>
      <form
        className="sign-up-form"
        onSubmit={ (e) => { e.preventDefault() }}
      >
        <label>
          Username:
          <input
            type="text" 
            name="username"
            value={ username }
            onChange={ handleChange }
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
          />
        </label>
        <label>
          Password: 
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirm"
            value={ confirm }
            onChange={ handleChange }
          />
        </label>

        <button>Send</button>
      </form>
      <img
        width={ 100 }
        height={ 100 }
        src={ image }
      />
    </div>
  );
}

export default SignUpForm;