'use client'

import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams();

  return (
    <main className="w-full h-[100vh]">
      Perfil { params.id }
    </main>
  )
}