import Loading from '@/components/Loading';
import Profile from '@/components/Profile';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
const URL_BASE = process.env.URL_BASE || 'http://localhost:3001';

function Self() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const getLoggedUser = async () => {
    const token = localStorage.getItem('token');
    const loggedUser = await fetch(URL_BASE + '/users/logged', {
      headers: {
        Authorization: token,
      }
    });
    setResponse(await loggedUser.json())
    setLoading(false);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="Your profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          response.message
            ? <Error message={ response.message }/> : <Profile { ...response } />
        }
      </main>
    </>
  );
}

export default Self;
