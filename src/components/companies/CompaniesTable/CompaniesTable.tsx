import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AgentUserType } from "@/lib/types/companies";
import { get } from "@/utils/actions";
import { getStatusLabel } from "./action";

const CompaniesTable = async () => {
  const agentUsers = await get<AgentUserType>("users");

  return (
    <Table>
      <TableHeader className="bg-geagray">
        <TableRow>
          <TableHead className="min-w-[100px] w-[100px] text-center">顧問先No.</TableHead>
          <TableHead className="min-w-[200px] w-[200px] text-center">顧問先会社名</TableHead>
          <TableHead className="min-w-[150px] w-[150px] text-center">顧問先担当者名</TableHead>
          <TableHead className="min-w-[200px] w-[200px] text-center">登録メールアドレス</TableHead>
          <TableHead className="min-w-[150px] w-[150px] text-center">ステータス</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {agentUsers.map((agentUser) => (
          <TableRow key={agentUser.id}>
            <TableCell className="min-w-[100px] max-w-[100px] text-center">
              {agentUser.id}
            </TableCell>
            <TableCell className="min-w-[200px] max-w-[200px] truncate">
              {agentUser.user.profile.company.name}
            </TableCell>
            <TableCell className="min-w-[150px]  max-w-[150px] truncate">
              {agentUser.user.profile.first_name} {agentUser.user.profile.last_name}
            </TableCell>
            <TableCell className="min-w-[200px] max-w-[200px]">{agentUser.user.email}</TableCell>
            <TableCell className="min-w-[150px] max-w-[150px] text-center">
              {getStatusLabel(agentUser.user.is_active)}
            </TableCell>
            <TableCell />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CompaniesTable;
