import CardCreationForm from '@/components/CardCreationForm';
import Cards from '@/components/Cards';
import DeckHeader from '@/components/DeckHeader';
import Head from 'next/head';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';

const URL_BASE = 'http://backend:3001';

export async function getServerSideProps({ query, req }) {
  const URL = `${URL_BASE}/decks/${query.id}`;
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get('token');
  const response = await fetch(URL, { headers: { Authorization: token }});
  const result = await response.json();
  return { props: { serverSideDeck: result } }
}

function Deck({ serverSideDeck }) {
  const [fetchedDeck, setDeck] = useState(serverSideDeck);
  const [creatingCard, setCreating] = useState(false);

  const { deck, canEdit } = fetchedDeck;

  console.log(fetchedDeck)

  const saveCardInDeckLocal = (card) => {
    setDeck({ canEdit, deck: { ...deck, cards: [...deck.cards, card] } });
  };

  return (
    <>
      {
        fetchedDeck.message ? <p>{ fetchedDeck.message }</p>
        : (
          <>
            <Head>
              <title>{ `${deck.name} Deck` }</title>
              <meta name="description" content="Page of one deck" />
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
                  <div className="creation-container">
                    <CardCreationForm
                      attributesNames={ [deck.attributeOne, deck.attributeTwo, deck.attributeThree] }
                      closeFunc={ () => setCreating(false) }
                      deckId={ deck.id }
                      saveCardInLocal={ saveCardInDeckLocal }
                    />
                  </div>
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
