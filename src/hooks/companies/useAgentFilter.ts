import type { AgentUserType } from "@/types/companies"
import { useStateSWR } from "../useSWR/useStateSWR"

export const useAgentFilter = (agentUsers: AgentUserType[]) => {
  const [filteredUsers, setFilteredUsers] = useStateSWR("agentUsers", agentUsers)

  const agentUserFilter = (searchText?: string) => {
    if (searchText) {
      const results = agentUsers.filter((agentUser) => {
        return agentUser.user.profile.company.name.includes(searchText)
      })
      setFilteredUsers(results)
    } else {
      setFilteredUsers(agentUsers)
    }
  }

  return { filteredUsers, agentUserFilter }
}
