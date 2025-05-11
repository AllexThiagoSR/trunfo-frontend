'use client'

import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams();

  return (
    <section>
      Perfil { params.id }
    </section>
  )
}