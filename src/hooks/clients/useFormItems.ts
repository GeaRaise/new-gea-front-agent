import { EMAIL_REGEX } from "@/constants/regex"
import { post } from "@/lib/clients"
import type { ClientInviteFormType } from "@/types/clients"
import { useState } from "react"

export const useFormItems = () => {
  const [items, setItems] = useState<ClientInviteFormType[]>([
    {
      id: 0,
      companyName: "",
      first_name: "",
      last_name: "",
      email: "",
      errors: {
        email: "",
      },
    },
  ])

  const checkEmail = async (email: string, index: number) => {
    // メールアドレスの形式チェック
    const results = email.match(EMAIL_REGEX)

    // 編集対象のitemを取得
    const updateItems = [...items]
    const item = updateItems.find((item) => item.id === index)

    // 編集対象が見つからない場合は何もしない
    if (!item) return
    // 編集対象のemailを更新
    item.email = email

    // メールアドレスの形式が異なる場合はエラーを表示
    if (results === null && email !== "") {
      item.errors.email = "※メールアドレスの形式が異なっています"
      setItems(updateItems)
      return
    }

    // メールアドレスの重複チェック
    const response = await post("users/checkemail", { obj: { email: email } })

    // メールアドレスが既に登録されている場合はエラーを表示
    if (response.emailcheck) {
      item.errors.email = "※メールアドレスは既に登録されています"
      setItems(updateItems)
      return
    }

    // エラーがない場合はエラーをクリア
    item.errors.email = ""
    setItems(updateItems)
  }

  const handleChange = ({
    index,
    key,
    value,
  }: {
    index: number
    key: "companyName" | "first_name" | "last_name" | "email"
    value: string
  }) => {
    const newItems = [...items]
    newItems[index] = {
      ...newItems[index],
      [key]: value,
    }
    setItems(newItems)
    // メールアドレスのバリデーション
    if (key === "email") {
      checkEmail(value, index)
    }
  }

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        companyName: "",
        first_name: "",
        last_name: "",
        email: "",
        errors: {
          email: "",
        },
      },
    ])
  }

  return { items, handleChange, addItem }
}
