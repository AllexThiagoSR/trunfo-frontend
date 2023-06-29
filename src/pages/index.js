import Head from "next/head"
import Link from "next/link";
import React, { useState } from "react"
const URL_BASE = process.env.URL_BASE || 'http://localhost:3001';

export default function Home() {
  const [{ email, password }, setFormInputs] = useState({ email: '', password: '' });
  const [loginResponse, setLoginResponse] = useState({ message: '' });

  const handleChange = ({ target: { name, value }}) => {
    setFormInputs((state) => ({ ...state, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form
          className="login-form"
          onSubmit={ async (e) => {
            e.preventDefault();
            const response = await fetch(URL_BASE + '/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (!data.token) {
              setLoginResponse(data);
              return undefined;
            }
            localStorage.setItem('token', data.token);
            setLoginResponse({ message: '' });
          } }
        >
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={ email }
              className="email-input"
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
              className="password-input"
              onChange={ handleChange }
              required
            />
          </label>
          <button>Login</button>
        </form>
        <p>
          {
            loginResponse.message
          }
        </p>
        <p>
          Não tem um conta? <Link href="/sign-up">sign-up</Link>
        </p>
      </main>
    </>
  )
}
