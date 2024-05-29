import { BellIcon } from "@/components/icons"
import type { FC } from "react"

const HeaderNotification: FC = () => {
  return (
    <div className="relative flex size-8 items-end justify-end">
      <BellIcon />
      <div className="absolute -right-2 -top-1 flex size-5 items-center justify-center rounded-full bg-red-600 text-[11px] text-white">
        <p>3</p>
      </div>
    </div>
  )
}

export default HeaderNotification
