import Error from '@/components/Error';
import Profile from '@/components/Profile';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
const URL_BASE = 'http://backend:3001';

export async function getServerSideProps({ req }) {
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get('token');
  const response = await fetch(URL_BASE + '/users/logged', {
    headers: {
      Authorization: token,
    }
  });
  return { props: { profile: await response.json() } };
}

function Self({ profile }) {
  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="Your profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        profile.message
          ? <Error message={ profile.message } /> : <Profile { ...profile } />
      }
    </>
  );
}

export default Self;
