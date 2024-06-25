"use client"
import { SubmitButton } from "@/components/elements"
import { Input } from "@/components/ui/input"
import { useFormItems } from "@/hooks/clients/useFormItems"
import { PlusCircle } from "lucide-react"
import { type Dispatch, type SetStateAction, useEffect } from "react"
import { useFormState } from "react-dom"
import * as R from "remeda"
import { isDisabled } from "./actions"
import { cilentsInvite } from "./serveractions"

type PropsType = {
  setOpen: Dispatch<SetStateAction<boolean>>
  setCompletedOpen: Dispatch<SetStateAction<boolean>>
  setErrorOpen: Dispatch<SetStateAction<boolean>>
}

const ClientsInviteForm = (props: PropsType) => {
  const { setOpen, setCompletedOpen, setErrorOpen } = props
  // useFormStateカスタムフックを使用して、フォームの状態を管理
  const [formState, action] = useFormState(cilentsInvite, { success: false, message: "" })
  // useFormItemsカスタムフックを使用して、フォームの項目を管理
  const { items, handleChange, addItem } = useFormItems()

  // フォームの送信結果に応じてダイアログを表示
  useEffect(() => {
    if (formState.success) {
      setOpen(false)
      setCompletedOpen(true)
    } else if (!formState.success && formState.message !== "") {
      setOpen(false)
      setErrorOpen(true)
    }
  }, [formState])

  const debouncer = R.debounce(handleChange, { waitMs: 400 })

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
            type="button"
            className="flex gap-2 p-0 items-center hover:bg-none"
            onClick={addItem}
          >
            <PlusCircle className="text-[#A8A8A8]" />
            <span className="text-[#A8A8A8]">招待先を追加</span>
          </button>
        </div>
        <div className="text-center mt-10">
          <SubmitButton
            type="submit"
            className="disabled:text-white disabled:bg-[#979797] text-white"
            variant={"secondary"}
            size={"lg"}
            disabled={isDisabled(items)}
          >
            顧問先を招待する
          </SubmitButton>
        </div>
      </form>
    </>
  )
}

export default ClientsInviteForm
