// schema.ts
import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "メールアドレスを入力してください",
    })
    .email(),
  password: z.string({
    required_error: "パスワードを入力してください",
  }),
})
