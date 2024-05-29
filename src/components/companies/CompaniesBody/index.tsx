import type { AgentUserType } from "@/types/companies";
import { get } from "@/utils/actions";
import type { FC } from "react";
import CompaniesAction from "../CompaniesAction";
import CompaniesTable from "../CompaniesTable";

const CompaniesBody: FC = async () => {
  const agentUsers = await get<AgentUserType>("users");

  return (
    <>
      <CompaniesAction />
      <CompaniesTable agentUsers={agentUsers} />
    </>
  );
};

export default CompaniesBody;
