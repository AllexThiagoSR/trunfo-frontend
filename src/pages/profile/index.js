import ProfilesList from "@/components/ProfilesList";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const URL_BASE = 'http://localhost:3001';

export default function Profiles() {
  const [profiles, setProfiles] = useState();
  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(URL_BASE + '/users', { headers: { Authorization: token } });
    setProfiles(await response.json());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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