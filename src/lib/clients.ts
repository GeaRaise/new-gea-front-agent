import { BACKEND_URL } from "@/constants"
import { cookies } from "next/headers"

export const get = async <T>(api: string): Promise<T[]> => {
  const res = await fetch(`${BACKEND_URL}/api/agent/${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    credentials: "include",
    cache: "no-cache",
  })
  const data = await res.json()
  return data
}
