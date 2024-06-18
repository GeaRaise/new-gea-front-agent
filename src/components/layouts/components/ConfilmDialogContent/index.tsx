import { Button } from "@/components/ui/button"
import { CustomDialogContent } from "@/components/ui/dialog"
import type { FC } from "react"
import {
  DELETE_BUTTON_TEXT,
  DELETE_DISCRIPTION_1,
  DELETE_DISCRIPTION_2,
  DELETE_TITLE,
  INVITE_BUTTON_TEXT,
  INVITE_DISCRIPTION,
  INVITE_TITLE,
} from "./constants"

type PropsType = {
  mode: "invite" | "delete"
}

const ConfilmDialogContent: FC<PropsType> = (props) => {
  const { mode } = props

  const getDialogInfo = (
    mode: "invite" | "delete",
  ): {
    title: string
    discription: JSX.Element
    buttonText: string
  } => {
    switch (mode) {
      case "invite":
        return {
          title: INVITE_TITLE,
          discription: <p className="text-center">{INVITE_DISCRIPTION}</p>,
          buttonText: INVITE_BUTTON_TEXT,
        }
      case "delete":
        return {
          title: DELETE_TITLE,
          discription: (
            <p className="text-center">
              {DELETE_DISCRIPTION_1}
              <br />
              {DELETE_DISCRIPTION_2}
            </p>
          ),
          buttonText: DELETE_BUTTON_TEXT,
        }
      default:
        return {
          title: "",
          discription: <></>,
          buttonText: "",
        }
    }
  }

  const dialogInfo = getDialogInfo(mode)

  return (
    <CustomDialogContent dialogTitle={dialogInfo.title} className="lg:max-w-[640px]">
      <div className="text-sm">{dialogInfo.discription}</div>
      <div className="mt-5 lg:mt-10">
        <Button variant={"secondary"} size={"lg"} className="text-white">
          {dialogInfo.buttonText}
        </Button>
      </div>
    </CustomDialogContent>
  )
}

export default ConfilmDialogContent
