import Image from "next/image"
import type { FC } from "react"

const Logo: FC = () => {
  return <Image src="/images/logo.svg" alt="logo" width={190} height={30} />
}

export default Logo
