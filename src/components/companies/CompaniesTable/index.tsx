"use client";

import type { FC } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAgentFilter } from "@/hooks/companies/useAgentFilter";
import type { AgentUserType } from "@/types/companies";
import { getStatusLabel } from "./action";

type PropsType = {
  agentUsers: AgentUserType[];
};

const CompaniesTable: FC<PropsType> = (props) => {
  const { agentUsers } = props;

  const { agentUserFilter, filteredUsers } = useAgentFilter(agentUsers);

  return (
    <>
      <div className="w-full flex justify-between gap-28 mb-11">
        <div className="flex gap-6">
          <div className="flex gap-4 items-center">
            <span className="text-[#6C757D]">検索条件</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue className="text-[#495057]" placeholder="すべて" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="procyRegist">代理登録</SelectItem>
                  <SelectItem value="invited">招待済み</SelectItem>
                  <SelectItem value="registered">登録済み</SelectItem>
                  <SelectItem value="all">すべて</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[#6C757D]">
              {filteredUsers.length}/{filteredUsers.length}件
            </span>
            <Select>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="30" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <span className="text-[#6C757D]">件ずつ表示</span>
          </div>
        </div>
        <div className="flex-1 max-w-96">
          <Input
            className="rounded-3xl focus:ring-0 border-[#E7E7E7] placeholder:text-[#A8A8A8] text-[#A8A8A8]"
            placeholder="顧問先の会社名・メールアドレスを入力してください"
            name="searchText"
            id="searchText"
            onChange={(e) => agentUserFilter(e.target.value)}
          />
        </div>
      </div>
      {filteredUsers.length > 0 ? (
        <Table>
          <TableHeader className="bg-geagray">
            <TableRow>
              <TableHead className="min-w-[100px] w-[100px] text-center">顧問先No.</TableHead>
              <TableHead className="min-w-[200px] w-[200px] text-center">顧問先会社名</TableHead>
              <TableHead className="min-w-[150px] w-[150px] text-center">顧問先担当者名</TableHead>
              <TableHead className="min-w-[200px] w-[200px] text-center">
                登録メールアドレス
              </TableHead>
              <TableHead className="min-w-[150px] w-[150px] text-center">ステータス</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((agentUser) => (
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
                <TableCell className="min-w-[200px] max-w-[200px] truncate">
                  {agentUser.user.email}
                </TableCell>
                <TableCell className="min-w-[150px] max-w-[150px] text-center">
                  {getStatusLabel(agentUser.user.is_active)}
                </TableCell>
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="w-full text-red-500 text-center">
          一致する結果が見つかりませんでした。他のキーワードで検索してみてください。
        </div>
      )}
    </>
  );
};

export default CompaniesTable;
