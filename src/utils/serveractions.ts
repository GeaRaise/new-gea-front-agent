"use server"

import { BACKEND_URL } from "@/constants"
import { EMAIL_REGEX } from "@/constants/regex"
import { post } from "@/lib/clients"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

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
      cookies().delete("gea_demo_refresh_token")
      cookies().delete("gea_prod_token")
      cookies().delete("gea_dev_token")
      redirect("/signin")
    } else {
      console.info("ログアウトできませんでした")
    }
  })
}
/**
 * メールアドレスの形式&重複チェック
 * @param email メールアドレス
 * @returns
 */

export const isCheckEmail = async (email: string) => {
  // メールアドレスの形式チェック
  const results = email.match(EMAIL_REGEX)

  // メールアドレスの形式が異なる場合はエラーを表示
  if (results === null && email !== "") {
    return {
      status: false,
      message: "※メールアドレスの形式が異なっています",
    }
  }

  // メールアドレスの重複チェック
  const response = await post("users/checkemail", { obj: { email: email } })

  // メールアドレスが既に登録されている場合はエラーを表示
  if (response.emailcheck) {
    return {
      status: false,
      message: "※メールアドレスは既に登録されています",
    }
  }

  // エラーがない場合はエラーをクリア
  return {
    status: true,
    message: "",
  }
}
