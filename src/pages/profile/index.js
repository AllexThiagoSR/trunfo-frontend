import ProfilesList from "@/components/ProfilesList";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const URL_BASE = 'http://backend:3001';

export async function getServerSideProps({ req }) {
  const URL = `${URL_BASE}/users`;
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get('token');
  const response = await fetch(URL, { headers: { Authorization: token } });
  return { props: { profiles: await response.json() } };
}

export default function Profiles({ profiles }) {
  return (
    <div className="profiles-container">
      <header className="profiles-header">
        <nav>
          <ul className="nav-list">
            <li><Link href="/cards">Cards Page</Link></li>
            <li><Link href="/decks">Decks Page</Link></li>
            <li><Link href="/profile/self" >Your Profile</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <ProfilesList profiles={ profiles } />
      </main>
    </div>
  );
}