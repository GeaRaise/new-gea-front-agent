import { get } from "@/lib/clients"
import type { ClientType } from "@/types/clients"
import type { FC } from "react"
import ClientsAction from "../ClientsAction"
import ClientsTable from "../ClientsTable"
import { columns } from "./columns"

/**
 * 顧問先管理：ボディコンポーネント
 */
const ClientsBody: FC = async () => {
  // 顧問先一覧を取得
  const clients = await get<ClientType>("users")
  // mockデータを使用
  // const clients = data()

  return (
    <>
      <ClientsAction />
      {/* 顧問先一覧 */}
      <ClientsTable columns={columns} data={clients} />
    </>
  )
}

export default ClientsBody
