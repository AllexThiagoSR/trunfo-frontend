import DecksList from "@/components/DecksList";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import CreateDeckForm from "@/components/CreateDeckForm";
import Cookies from "universal-cookie";
const URL_BASE = 'http://backend:3001';

export async function getServerSideProps({ req }) {
  const URL = `${URL_BASE}/decks`;
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get('token');
  const response = await fetch(URL, { headers: { Authorization: token }});
  const result = await response.json();
  return { props: { serverSideDecks: result } }
}

export default function Decks({ serverSideDecks }) {
  const [decks, setDecks] = useState(serverSideDecks);
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      <Head>
        <title>{ `Decks` }</title>
        <meta name="description" content="Your profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="decks-container">
        <header className="decks-header">
          <nav>
            <ul className="nav-list">
              <li><Link href="/cards">Cards Page</Link></li>
              <li><Link href="/profile">Users Page</Link></li>
              <li><Link href="/profile/self" >Your Profile</Link></li>
            </ul>
          </nav>
        </header>
        <main className="decks-main">
          <DecksList decks={ decks} />
          <button onClick={ () => setShowForm(!showForm) } >
            { showForm ? 'Fechar' : 'Criar deck' }
          </button>
          {
            showForm &&
              <CreateDeckForm closeFunc={ () => setShowForm(false) } setCreatedDecks={ setDecks } />
          }
        </main>
      </div>
    </>
  );
}