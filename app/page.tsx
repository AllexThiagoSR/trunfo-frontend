'use client'

import { login } from "@/services/api";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function Home() {
  const [{ email, password }, setFormValues] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const onLoginClick = useCallback(async () => {
    setErrorMessage('');
    const response: { message?: string, token?: string } = await login(email, password);
    if (response.message) {
      setErrorMessage(response.message);
      return;
    }
    localStorage.setItem("token", response.token!);
    setFormValues({ email: '', password: '' });
    router.push('/profile');
  }, [email, password]);

  return (
    <section className="flex items-center justify-center h-[100vh]">
      <form className="flex flex-col items-center justify-between gap-16 border border-black rounded p-16 w-[25%]">
        <div className="flex flex-col items-center gap-4 w-full">
          <Input
            label="Email"
            variant="bordered"
            type="text"
            value={email}
            onValueChange={(value) => { setFormValues({ password, email: value }) }}
            classNames={
              {
                inputWrapper: 'border-default-400 data-[hover=true]:border-default-600'
              }
            }
          />
          <Input
            label="Password"
            variant="bordered"
            type="password"
            value={password}
            onValueChange={(value) => { setFormValues({ password: value, email }) }}
            classNames={
              {
                inputWrapper: 'border-default-400 data-[hover=true]:border-default-600'
              }
            }
          />
          <p className="h-[24px]">{errorMessage}</p>
        </div>
        <Button onPress={ onLoginClick } type="button" className="w-full" color="primary">Login</Button>
      </form>
    </section>
  );
}
