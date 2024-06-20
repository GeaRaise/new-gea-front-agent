"use client"
import { SubmitButton } from "@/components/elements"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"
import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { useFormState } from "react-dom"
import * as R from "remeda"
import { cilentsInvite } from "./serveractions"

type ItemType = {
  id: number
  companyName: string
  first_name: string
  last_name: string
  email: string
  errors: {
    email: string
  }
}

const ClientsInviteForm = ({
  setOpen,
  setCompletedOpen,
  setErrorOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  setCompletedOpen: Dispatch<SetStateAction<boolean>>
  setErrorOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [formState, action] = useFormState(cilentsInvite, { success: false, message: "" })
  const [items, setItems] = useState<ItemType[]>([
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

  useEffect(() => {
    console.log("formState", formState)

    if (formState.success) {
      setOpen(false)
      setCompletedOpen(true)
    } else if (!formState.success && formState.message !== "") {
      setOpen(false)
      setErrorOpen(true)
    }
  }, [formState])

  /**
   * メールアドレス形式チェック
   * @param email メールアドレス
   * @returns {boolean} true: 正しい形式, false: 間違った形式
   */
  const checkEmail = (email: string) => {
    const results = email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)
    return results !== null
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
    if (key === "email" && value !== "") {
      const results = checkEmail(value)
      if (results) {
        items[index].errors.email = ""
      } else {
        items[index].errors.email = "※メールアドレスの形式が異なっています"
      }
    } else {
      items[index].errors.email = ""
    }
  }

  /**
   * 項目が全て入力されているかどうか
   * @returns {boolean} true: 全て入力されている, false: 入力されていない
   */
  const isRowComplete = (item: ItemType) => {
    return (
      item.companyName !== "" &&
      item.first_name !== "" &&
      item.last_name !== "" &&
      item.email !== ""
    )
  }

  /**
   * ボタンのdisabledを判定する
   */
  const isDisabled = () => {
    // 1つ以上の行が全て入力されているかどうか
    const someRowComplete = items.some(isRowComplete)
    // 全ての行が全て入力されているかどうか
    const allRowsCompleteOrEmpty = items.every(
      (item) =>
        isRowComplete(item) ||
        (item.companyName === "" &&
          item.first_name === "" &&
          item.last_name === "" &&
          item.email === ""),
    )
    // エラーがあるかどうか
    const isError = items.some((item) => item.errors.email !== "")
    return !(someRowComplete && allRowsCompleteOrEmpty && !isError)
  }

  const debouncer = R.debounce(handleChange, { waitMs: 600 })

  return (
    <>
      <form
        key="cleintsInviteForm"
        action={action}
        noValidate={true}
        className="mt-5 lg:mt-10 w-[85%]"
      >
        <div className="grid w-full">
          <div className="flex justify-between bg-[#F7F8FB] pb-2 pt-4 text-sm text-black/40">
            <div className="w-36 pl-4">顧問先会社名</div>
            <div className="w-36 pl-4">顧問先担当者名</div>
            <div className="w-36 pl-4" />
            <div className="flex-1 pl-4">登録メールアドレス</div>
          </div>
        </div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex px-1">
                <div className="w-36 px-2 py-3">
                  <Input
                    className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
                    placeholder="株式会社GeaRaise"
                    onChange={(e) => {
                      handleChange({
                        index,
                        key: "companyName",
                        value: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="w-36 px-2 py-3">
                  <Input
                    className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
                    placeholder="性"
                    value={item.first_name}
                    onChange={(e) => {
                      handleChange({
                        index,
                        key: "first_name",
                        value: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="w-36 px-2 py-3">
                  <Input
                    className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
                    placeholder="名"
                    value={item.last_name}
                    onChange={(e) => {
                      handleChange({
                        index,
                        key: "last_name",
                        value: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="px-2 py-3 flex-1">
                  <Input
                    className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
                    placeholder="example@gearaise.co.jp"
                    type="email"
                    onChange={(e) => {
                      debouncer.call({
                        index,
                        key: "email",
                        value: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>
              {item.errors.email !== "" && <p className="text-red-500">{item.errors.email}</p>}
            </div>
          )
        })}
        <div className="border-t-2 border-[#DEE2E6] pt-2">
          <button
            className="flex gap-2 p-0 items-center hover:bg-none"
            onClick={(e) => {
              e.preventDefault()
              setItems([
                ...items,
                {
                  id: items.length + 1,
                  companyName: "",
                  first_name: "",
                  last_name: "",
                  email: "",
                  errors: {
                    email: "",
                  },
                },
              ])
            }}
          >
            <PlusCircle className="text-[#A8A8A8]" />
            <span className="text-[#A8A8A8]">招待先を追加</span>
          </button>
        </div>
        <div className="text-center mt-10">
          <SubmitButton
            type="submit"
            className="rounded-none disabled:text-white disabled:bg-[#979797] text-white"
            variant={"secondary"}
            disabled={isDisabled()}
          >
            顧問先を招待する
          </SubmitButton>
        </div>
      </form>
    </>
  )
}

export default ClientsInviteForm
