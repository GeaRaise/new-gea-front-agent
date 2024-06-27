import { EMAIL_REGEX } from "@/constants/regex"
import type { ClientInviteFormType } from "@/types/clients"
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
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false)

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
    setIsScrollBottom(false)
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
    setIsScrollBottom(true)
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
   * @param uploadData インポートしたデータ
   */
  const uploadAccepted = async (uploadData: []) => {
    setIsLoading(true)
    const newData = uploadData
      .filter((item: [], index) => index !== 0 && item.length >= 4)
      .map((item: string[], index) => {
        const emailCheck = item[3].match(EMAIL_REGEX)
        return {
          id: items.length + index,
          companyName: item[0],
          first_name: item[1],
          last_name: item[2],
          email: item[3],
          errors: {
            email: emailCheck ? "" : "※メールアドレスの形式が異なっています",
          },
        }
      })
    setIsScrollBottom(true)
    setItems([...items, ...newData])
    setIsLoading(false)
  }

  useEffect(() => {
    if (isScrollBottom && scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [items, isScrollBottom, scrollBottomRef])
  return { items, setItems, isLoading, handleChange, addItem, scrollBottomRef, uploadAccepted }
}
