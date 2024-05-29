"use client";

import { SubmitButton } from "@/components/elements";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { type FormStateType, handleLogin } from "../../../../utils/auth/signin/actions";

export const LoginForm = () => {
  const [formState, wrappedHandleLogin] = useFormState(handleLogin, {
    email: "",
    password: "",
    errors: {
      email: undefined,
      password: undefined,
    },
  } as FormStateType);

  return (
    <div className="m-auto h-screen flex items-center flex-col justify-center gap-10">
      <h1 className="text-5xl text-primary font-extrabold tracking-widest">GEAREACH</h1>
      <form
        action={wrappedHandleLogin}
        className="w-full flex flex-col justify-center items-center gap-10"
      >
        <div className="w-1/6 flex flex-col gap-4">
          <Input
            defaultValue={formState.email}
            placeholder="ログインID（メールアドレス）"
            type="text"
            id="email"
            name="email"
          />
          <Input
            defaultValue={formState.password}
            placeholder="パスワード"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <SubmitButton label="ログイン" className="shadow-md min-w-32" />
        {formState.errors.email && <p className="text-red-500">{formState.errors.email}</p>}
        {formState.errors.password && <p className="text-red-500">{formState.errors.password}</p>}
      </form>
    </div>
  );
};
