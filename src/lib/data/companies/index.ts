import { BACKEND_URL } from "@/constants";
import type { AgentUserType } from "@/lib/types/companies";
import { cookies } from "next/headers";

export const getAgentUsers = async (): Promise<AgentUserType[]> => {
  const res = await fetch(`${BACKEND_URL}/api/agent/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
