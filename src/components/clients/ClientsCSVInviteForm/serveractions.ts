"use server"

import { post } from "@/lib/clients"
import * as R from "remeda"

// action.ts
type State = {
  success?: boolean
  message?: string
  dipricatedEmails?: string[]
}
export const cilentsInvite = async (prevState: State, formData: FormData) => {
  try {
    // 顧問先の招待処理
    const emails = formData.getAll("email")
    const response: {
      emailcheck: boolean
      dipricated_email: {
        email: string
      }[]
    } = await post("users/checkemail", { obj: { email: emails } })
    if (response.emailcheck) {
      const dipricatedEmails = R.map(response.dipricated_email, (item) => item.email)

      return {
        success: false,
        dipricatedEmails: dipricatedEmails,
      }
    }

    return {
      success: true,
      message: "顧問先の招待が完了しました",
    }
  } catch (error) {
    console.error("顧問先の招待に失敗しました", error)

    return {
      success: false,
      message: "顧問先の招待に失敗しました",
    }
  }
}
