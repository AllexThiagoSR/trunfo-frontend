// User cookies para guardar o token de autenticação para usá-lo dentro da função getServerSideProps
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import Profile from '@/components/Profile';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:3001/users/'

// export async function getServerSideProps(context) {
//   return { props: { } }
// }

export default function ProfileID() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { query: { id } } = useRouter();
  const fetchUser = async (id) => {
    if (id) {
      const token = localStorage.getItem('token');
      const response = await fetch(
        BASE_URL + id,
        {
          headers: {
            Authorization: token,
          }
        }
      );
      setUser(await response.json());
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  if (loading) return <Loading />;

  console.log(user, id);
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Your profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        user.message
          ? <Error message={ user.message } /> : <Profile { ...user } />
      }
    </>
  );
}
