'use client'

import { createUser } from "@/services/api";
import { Button } from "@heroui/button"
import { Input } from "@heroui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function SignUp() {
  const [formValues, setFormValues] = useState({ email: '', password: '', username: '', passwordConfirmation: '', image: undefined });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const buttonIsDisabled = useCallback(
    () => {
      const { email, password, passwordConfirmation, username } = formValues;
      const isEnable = email
        && password
        && username
        && passwordConfirmation
        && password.length >= 8
        && formValues.password === formValues.passwordConfirmation
        && username.length >= 3
      return !Boolean(isEnable);
    },
    [formValues]
  );

  const onValueChange = useCallback(
    (label: keyof typeof formValues, value: string) => {
      setFormValues({ ...formValues, [label]: value })
    },
    [formValues]
  );

  const onSignUp = useCallback(async () => {
      setErrorMessage('');
      const response: { message?: string, token?: string } = await createUser(
        formValues.email,
        formValues.passwordConfirmation,
        formValues.passwordConfirmation,
        formValues.image
      );
      if (response.message) {
        setErrorMessage(response.message);
        return;
      }
      localStorage.setItem("token", response.token!);
      setFormValues({ email: '', password: '', username: '', passwordConfirmation: '', image: undefined });
      router.push('/profile');
    }, [formValues]);

  return(
    <main className="w-full flex items-center justify-center h-[100vh]">
      <form className="flex flex-col items-center justify-between gap-16 border border-black rounded p-16 w-[25%]">
        <div className="flex flex-col items-center gap-4 w-full">
          <Input
            label="Username"
            variant="bordered"
            type="text"
            value={formValues.username}
            required
            onValueChange={(value) => { onValueChange('username', value) }}
            isInvalid={ Boolean(formValues.username && formValues.username.length < 3) }
            errorMessage={'The username size must be greater than or equal to 8'}
            classNames={
              {
                inputWrapper: 'border-default-400 data-[hover=true]:border-default-600'
              }
            }
          />
          <Input
            label="Email"
            variant="bordered"
            type="text"
            value={formValues.email}
            required
            onValueChange={(value) => { onValueChange('email', value) }}
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
            value={formValues.password}
            required
            onValueChange={(value) => { onValueChange('password', value) }}
            isInvalid={ Boolean(formValues.password && formValues.password.length < 8) }
            errorMessage={'The password size must be greater than or equal to 8'}
            classNames={
              {
                inputWrapper: 'border-default-400 data-[hover=true]:border-default-600'
              }
            }
          />
          <Input
            label="Conifirm password"
            variant="bordered"
            type="password"
            value={formValues.passwordConfirmation}
            required
            onValueChange={(value) => { onValueChange('passwordConfirmation', value) }}
            classNames={
              {
                inputWrapper: 'border-default-400 data-[hover=true]:border-default-600'
              }
            }
            isInvalid={
              Boolean((formValues.password && formValues.passwordConfirmation) && formValues.password !== formValues.passwordConfirmation)
            }
            errorMessage={'The passwords do not match'}
          />
          <Input
            label="Profile image link"
            variant="bordered"
            type="text"
            value={formValues.image || ""}
            onValueChange={(value) => { onValueChange('image', value) }}
            classNames={
              {
                inputWrapper: 'border-default-400 data-[hover=true]:border-default-600'
              }
            }
          />
          <p className="h-[24px]">{errorMessage}</p>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <Button
            type="button"
            className="w-full"
            color="primary"
            isDisabled={buttonIsDisabled()}
            onPress={onSignUp}
          >
            Sign Up
          </Button>
          <p>Already have an account? <Link href={'/'} className="underline text-sky-600">Log In</Link></p>
        </div>
      </form>
    </main>
  )
}