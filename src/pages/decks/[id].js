import CardCreationForm from '@/components/CardCreationForm';
import Cards from '@/components/Cards';
import DeckHeader from '@/components/DeckHeader';
import Loading from '@/components/Loading';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const URL_BASE = 'http://localhost:3001';

function Deck() {
  const [fetchedDeck, setDeck] = useState({});
  const [loading, setLoading] = useState(true);
  const [creatingCard, setCreating] = useState(false);
  const { query: { id }} = useRouter();

  const fetchDeckInfo = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(URL_BASE + `/decks/${id}`, { headers: { Authorization: token }});
    setDeck(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    if (id !== undefined ) fetchDeckInfo();
  }, [id]);

  if (loading) return <Loading />
  const { deck, canEdit } = fetchedDeck;
  return (
    <>
      {
        fetchedDeck.message ? <p>{ fetchedDeck.message }</p>
        : (
          <>
            <Head>
              <title>{ `${deck.name} Deck` }</title>
              <meta name="description" content="Your profile page" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <DeckHeader { ...deck } canEdit={ canEdit } />
            <main className="saved-cards-container">
              <Cards
                cards={ deck.cards }
                attributesNames={ [deck.attributeOne, deck.attributeTwo, deck.attributeThree] }
              />
              <button onClick={ () => setCreating(true) }>Adicionar carta</button>
              {
                creatingCard && (
                  <CardCreationForm
                    attributesNames={ [deck.attributeOne, deck.attributeTwo, deck.attributeThree] }
                    closeFunc={ () => setCreating(false) }
                    deckId={ id }
                  />
                )
              }
            </main>
          </>
        )
      }
    </>
  );
}

export default Deck;
