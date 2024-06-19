import { z } from "zod"

export const clientsInviteFormSchema = z.object({
  companyName: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email({
    message: "※メールアドレスの形式が異なっています",
  }),
})
