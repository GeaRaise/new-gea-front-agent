"use server"

import { BACKEND_URL } from "@/constants"
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
