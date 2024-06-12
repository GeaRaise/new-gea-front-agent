"use client"

import { SubmitButton } from "@/components/elements"
import { Input } from "@/components/ui/input"
import { handleLogin } from "@/utils/signin/actions"
import { useForm } from "@conform-to/react"
import { useFormState } from "react-dom"

export const LoginForm = () => {
  const [lastResult, action] = useFormState(handleLogin, undefined)
  const [form, fields] = useForm({
    // 前回の送信結果を同期
    lastResult,

    // クライアントでバリデーションを行う場合
    // onValidate({ formData }) {
    //   return parseWithZod(formData, { schema: loginSchema });
    // },

    // blurイベント発生時にフォームを検証する
    // shouldValidate: "onBlur",
    // shouldRevalidate: "onInput",
  })

  return (
    <div className="m-auto h-screen flex items-center flex-col justify-center gap-10">
      <h1 className="text-5xl text-primary font-extrabold tracking-widest">GEAREACH</h1>
      <form
        className="w-full flex flex-col justify-center items-center gap-10"
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        noValidate={true}
      >
        <div className="w-80  flex flex-col gap-4">
          <Input
            placeholder="ログインID（メールアドレス）"
            type="text"
            key={fields.email.key}
            name={fields.email.name}
          />
          <Input
            placeholder="パスワード"
            type="password"
            key={fields.password.key}
            name={fields.password.name}
          />
        </div>
        <SubmitButton label="ログイン" className="shadow-md min-w-32" />
        <div>
          <p className="text-red-500">{fields.email.errors}</p>
          <p className="text-red-500">{fields.password.errors}</p>
          <p className="text-red-500">{form.errors}</p>
        </div>
      </form>
    </div>
  )
}
