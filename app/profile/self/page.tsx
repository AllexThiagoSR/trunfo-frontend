'use client'
import { getLoggedUser } from "@/services/api";
import { User } from "@/types/User";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import image from "../../../public/without-image.png";
import NavBar from "@/components/NavBar";

export default function Profile() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null)

  useEffect(
    () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push('/');
        return;
      }
      getLoggedUser(token)
        .then((response) => { setUser(response); })
        .catch((_error) => { router.push('/'); });
    },
    []
  );

  console.log({ user, pathname });

  return (
    <section className="w-full h-[100vh] flex">
      <header className="items-center justify-around flex flex-col border-e border-black px-[2%] w-[25%]">
        <section className="w-full flex flex-col items-center gap-4">
          <Image
            src={image}
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p>{user?.username}</p>
        </section>
        <NavBar route={pathname}/>
      </header>
      <main className="w-[75%] h-[100vh]">
        
      </main>
    </section>
  )
}