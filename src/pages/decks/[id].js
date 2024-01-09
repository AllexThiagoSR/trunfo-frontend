import Cards from '@/components/Cards';
import DeckHeader from '@/components/DeckHeader';
import Loading from '@/components/Loading';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const URL_BASE = 'http://localhost:3001';

function Deck() {
  const [{ deck, canEdit }, setDeck] = useState({});
  const [loading, setLoading] = useState(true);
  const { query: { id }} = useRouter();

  const fetchDeckInfo = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(URL_BASE + `/decks/${id}`, { headers: { Authorization: token }});
    setDeck(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    if (id !== undefined )fetchDeckInfo();
  }, [id]);

  if (loading) return <Loading />
  return (
    <>
      {
        deck.message ? <p>{ deck.message }</p> : <DeckHeader { ...deck } canEdit={ canEdit } />
      }
      <main className="saved-cards-container">
        <Cards cards={ deck.cards } attributesNames={[deck.attributeOne, deck.attributeTwo, deck.attributeThree]}/>
      </main>
    </>
  );
}

export default Deck;
