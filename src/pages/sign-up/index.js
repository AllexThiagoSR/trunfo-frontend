import SignUpForm from '@/components/SignUpForm';
import Head from 'next/head';
import React from 'react';

function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="sign-up-container">
        <h2>Sign-Up</h2>
        <SignUpForm/>
        <p>Already has an account? <a href="/">log-in</a></p>
      </main>
    </>
  );
}

export default SignUp;
