// Usar cookies para guardar o token de autenticação para usá-lo dentro da função getServerSideProps
import Error from '@/components/Error';
import Profile from '@/components/Profile';
import Head from 'next/head';
import Cookies from 'universal-cookie';

export async function getServerSideProps({ query, req }) {
  const URL = `http://backend:3001/users/${query.id}`;
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get('token');

  const user = await fetch(
    URL,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return { props: { user: await user.json() } }
}

export default function ProfileID({ user }) {
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
