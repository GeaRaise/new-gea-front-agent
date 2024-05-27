import type { UserType } from "@/types";

/**
 * AgentAdvisor
 */
export type AgentUserType = {
  from_user?: number | null;
  id: number;
  user: UserType;
};
