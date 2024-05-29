"use server"

import { BACKEND_URL } from "@/constants"
import { parseWithZod } from "@conform-to/zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { loginSchema } from "./schema"

export type FormStateType = {
  email: string
  password: string
  errors: {
    email: string | undefined
    password: string | undefined
  }
}

/**
 * ログイン処理
 */
export const handleLogin = async (_prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  })
  if (submission.status !== "success") {
    return submission.reply()
  }
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // if (!email && !password) {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: {
  //       email: "メールアドレスを入力してください",
  //       password: "パスワードを入力してください",
  //     },
  //   };
  // }
  // if (!email) {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: {
  //       email: "メールアドレスを入力してください",
  //       password: undefined,
  //     },
  //   };
  // }
  // if (!password) {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: {
  //       email: undefined,
  //       password: "パスワードを入力してください",
  //     },
  //   };
  // }

  const result = await fetch(`${BACKEND_URL}/api/agent/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then((res) => {
    if (res.status !== 200) {
      return submission.reply({
        formErrors: ["ログインに失敗しました"],
      })
    }

    const cookiesHeader = res.headers.get("Set-Cookie")
    if (cookiesHeader) {
      const tokenNames = ["gea_demo_token", "gea_prod_token", "gea_dev_token"]
      let token = null

      for (const tokenName of tokenNames) {
        const tokenStartIndex = cookiesHeader.indexOf(`${tokenName}=`)
        if (tokenStartIndex !== -1) {
          const domainIndex = cookiesHeader.indexOf("; Domain", tokenStartIndex)
          if (domainIndex !== -1) {
            token = cookiesHeader
              .substring(tokenStartIndex + tokenName.length + 1, domainIndex)
              .trim()
            cookies().set(tokenName, token)
            redirect("/companies")
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
  })

  // redirect("/companies");
  return result
}

/**
 * ログアウト処理
 */
export const handleLogout = async () => {
  await fetch(`${BACKEND_URL}/api/common/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      cookies().delete("gea_demo_token")
      cookies().delete("gea_prod_token")
      cookies().delete("gea_dev_token")
      redirect("/auth/signin")
    } else {
      console.info("ログアウトできませんでした")
    }
  })
}
