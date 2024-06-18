import { PROXY_TITLE } from "@/constants/meta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: PROXY_TITLE,
}
const ClientsProxyDetailPage = ({
  params: { id },
}: {
  params: {
    id: string
  }
}) => {
  return (
    <div>
      <h1>顧問先代理登録詳細ページ</h1>
      <p>顧問先ID: {id}</p>
    </div>
  )
}

export default ClientsProxyDetailPage
