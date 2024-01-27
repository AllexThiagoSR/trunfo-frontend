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
  const [creatingCard, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const { query: { id }} = useRouter();

  const fetchDeckInfo = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(URL_BASE + `/decks/${id}`, { headers: { Authorization: token }});
    setDeck(await response.json());
    setLoading(false);
  };

  const { deck, canEdit } = fetchedDeck;

  const saveCardInDeckLocal = (card) => {
    console.log(card);
    setDeck({ canEdit, deck: { ...deck, cards: [...deck.cards, card] } });
  };

  useEffect(() => {
    if (id !== undefined ) fetchDeckInfo();
  }, [id]);

  if (loading) return <Loading />;

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
              {
                canEdit
                && deck.cards.length <= 32
                && <button onClick={ () => setCreating(true) }>Adicionar carta</button>
              }
              {
                creatingCard && (
                  <CardCreationForm
                    attributesNames={ [deck.attributeOne, deck.attributeTwo, deck.attributeThree] }
                    closeFunc={ () => setCreating(false) }
                    deckId={ id }
                    saveCardInLocal={ saveCardInDeckLocal }
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
