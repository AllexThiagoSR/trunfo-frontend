import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react"
import Cookies from "universal-cookie";
const URL_BASE = 'http://localhost:3001';

export default function Home() {
  const [{ email, password }, setFormInputs] = useState({ email: '', password: '' });
  const [loginResponse, setLoginResponse] = useState({ message: '' });
  const router = useRouter();

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
      <main className="login-container">
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
            const cookies = new Cookies();
            localStorage.setItem('token', data.token);
            cookies.set('token', data.token);
            router.push('/profile/self')
            // setLoginResponse({ message: '' });
          } }
        >
          <label>
            <input
              type="email"
              name="email"
              value={ email }
              className="email-input"
              placeholder="Email"
              onChange={ handleChange }
              required
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={ password }
              className="password-input"
              placeholder="Password"
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
          Não tem uma conta? <Link href="/sign-up">sign-up</Link>
        </p>
      </main>
    </>
  )
}
