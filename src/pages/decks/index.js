import DecksList from "@/components/DecksList";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
const URL_BASE = 'http://localhost:3001';

export default function Decks() {
  const [decks, setDecks] = useState();
  const fetchDecks = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(URL_BASE + '/decks', { headers: { Authorization: token } });
    setDecks(await response.json());
  };

  useEffect(() => {
    fetchDecks();
  }, []);

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
            </ul>
          </nav>
        </header>
        <main className="decks-main">
          <DecksList {...decks} />
        </main>
      </div>
    </>
  );
}