'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Profile() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push('/');
  })
  return (
    <section>
      Perfil
    </section>
  )
}