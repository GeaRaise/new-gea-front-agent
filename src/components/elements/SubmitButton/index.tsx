"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ComponentProps, ReactNode } from "react"
import { useFormStatus } from "react-dom"
import Spinner from "../Spinner"

type PropsType = ComponentProps<typeof Button> & {
  children: ReactNode
  suspenseLabel?: string | ReactNode
}

const SubmitButton = (props: PropsType) => {
  const { children, className, suspenseLabel = <Spinner /> } = props

  const { pending } = useFormStatus()
  return (
    <div>
      {pending ? (
        <div className="flex justify-center items-center">{suspenseLabel}</div>
      ) : (
        <Button className={cn("", className)} {...props}>
          {children}
        </Button>
      )}
    </div>
  )
}

export default SubmitButton
