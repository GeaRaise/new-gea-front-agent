"use server"

import { BACKEND_URL } from "@/constants"
import { loginSchema } from "@/types/signin/schema"
import { parseWithZod } from "@conform-to/zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

/**
 * ログイン処理
 * @param _prevState 前回の状態
 * @param formData フォームデータ
 * @returns ログイン結果
 */
export const handleLogin = async (_prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  })
  // バリデーションエラーがある場合はエラーメッセージを返す
  if (submission.status !== "success") {
    return submission.reply()
  }
  // ログインIDとパスワードを取得
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // ログイン処理
  const result = await fetch(`${BACKEND_URL}/api/agent/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then((res) => {
    // ログイン失敗時はエラーメッセージを返す
    if (res.status !== 200) {
      return submission.reply({
        formErrors: ["ログインIDまたはパスワードが間違っています"],
      })
    }
    // ログイン成功時はクッキーからトークンを取得し、リダイレクトする
    const cookiesHeader = res.headers.get("Set-Cookie")
    if (cookiesHeader) {
      const tokenNames = [
        "gea_demo_token",
        "gea_dev_token",
        "gea_prod_token",
        "gea_demo_refresh_token",
      ]
      let token = null
      for (const tokenName of tokenNames) {
        // クッキーからトークンを取得
        const tokenStartIndex = cookiesHeader.indexOf(`${tokenName}=`)
        if (tokenStartIndex !== -1) {
          const domainIndex = cookiesHeader.indexOf("; Domain", tokenStartIndex)
          if (domainIndex !== -1) {
            token = cookiesHeader
              .substring(tokenStartIndex + tokenName.length + 1, domainIndex)
              .trim()
            cookies().set(tokenName, token)
          }
        }
      }
      if (!token) {
        return submission.reply({
          formErrors: ["トークンの取得に失敗しました"],
        })
      }
    } else {
      return submission.reply({
        formErrors: ["クッキーの取得に失敗しました"],
      })
    }
    redirect("/clients")
  })
  return result
}
