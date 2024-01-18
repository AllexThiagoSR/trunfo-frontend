import CardsList from "@/components/CardsList";
import CardsPageFilters from "@/components/CardsPageFilters";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const URL_BASE = 'http://localhost:3001';

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCards = async(limit=10) => {
    const token = localStorage.getItem('token');
    const response = await fetch(URL_BASE + `/cards?limit=${limit}&page=${page}`, { headers: { Authorization: token }});
    setCards(await response.json());
  }

  useEffect(() => {
    fetchCards();
  }, [page]);

  return (
    <div className="cards-container">
      <header className="cards-header">
        <nav>
          <ul className="nav-list">
            <li><Link href="/decks">Decks Page</Link></li>
            <li><Link href="/profile">Users Page</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <CardsPageFilters />
        <CardsList {...cards} />
        <div>
          {
            page !== 1 ? <button onClick={() => setPage(page - 1)}>{'<'}</button> : ''
          }
          <p>{page}</p>
          {
            cards.next && <button onClick={() => setPage(page + 1)}>{'>'}</button>
          }
        </div>
      </main>
    </div>
  );
}
