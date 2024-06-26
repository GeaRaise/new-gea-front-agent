import { EMAIL_REGEX } from "@/constants/regex"
import { post } from "@/lib/clients"
import type { ClientInviteFormType } from "@/types/clients"
import { isCheckEmail } from "@/utils/serveractions"
import { useEffect, useRef, useState } from "react"

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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const scrollBottomRef = useRef<HTMLDivElement>(null)

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

  /**
   * ファイルインポート後処理
   * @param uploadData インポートしデータ
   */
  const uploadAccepted = async (uploadData: []) => {
    setIsLoading(true)
    const newData = uploadData.filter((item: [], index) => index !== 0 && item.length >= 4)
    const importItems = await Promise.all(
      newData.map(async (item) => {
        // メールアドレスのバリデーション
        const result = await isCheckEmail(item[3]).then((res) => {
          if (res.status) {
            return {
              id: items.length,
              companyName: item[0],
              first_name: item[1],
              last_name: item[2],
              email: item[3],
              errors: {
                email: "",
              },
            }
          } else {
            return {
              id: items.length,
              companyName: item[0],
              first_name: item[1],
              last_name: item[2],
              email: item[3],
              errors: {
                email: res.message,
              },
            }
          }
        })

        return result
      }),
    )
    setItems([...items, ...importItems])
    setIsLoading(false)
  }

  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [items])
  return { items, setItems, isLoading, handleChange, addItem, scrollBottomRef, uploadAccepted }
}
