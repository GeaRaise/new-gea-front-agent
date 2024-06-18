import { CompaniesBody } from "@/components/clients"
import { CLIENTS_TITLE } from "@/constants/meta"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
  title: CLIENTS_TITLE,
}
/**
 * 顧問先管理ページ
 */
const CompaniesPage: NextPage = () => {
  return <CompaniesBody />
}

export default CompaniesPage
