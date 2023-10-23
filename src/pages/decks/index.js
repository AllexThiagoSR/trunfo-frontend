import DecksList from "@/components/DecksList";
import Link from "next/link";
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
  console.log(decks);

  return (
    <div className="decks-container">
      <header className="decks-header">
        <nav>
          <ul className="nav-list">
            <li><Link href="/">Cards Page</Link></li>
            <li><Link href="/">Users Page</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <DecksList {...decks} />
      </main>
    </div>
  );
}