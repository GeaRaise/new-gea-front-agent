import { Header, Sidebar } from "@/components/layouts"
import type { ReactNode } from "react"

const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar>{children}</Sidebar>
    </>
  )
}

export default AuthenticatedLayout
