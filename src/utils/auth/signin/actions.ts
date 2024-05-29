"use server";

import { BACKEND_URL } from "@/constants";
import { parseWithZod } from "@conform-to/zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "./schema";

export type FormStateType = {
  email: string;
  password: string;
  errors: {
    email: string | undefined;
    password: string | undefined;
  };
};

/**
 * ログイン処理
 */
export const handleLogin = async (_prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // if (!email && !password) {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: {
  //       email: "メールアドレスを入力してください",
  //       password: "パスワードを入力してください",
  //     },
  //   };
  // }
  // if (!email) {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: {
  //       email: "メールアドレスを入力してください",
  //       password: undefined,
  //     },
  //   };
  // }
  // if (!password) {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: {
  //       email: undefined,
  //       password: "パスワードを入力してください",
  //     },
  //   };
  // }

  const result = await fetch(`${BACKEND_URL}/api/agent/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then((res) => {
    if (res.status !== 200) {
      return submission.reply({
        formErrors: ["ログインに失敗しました"],
      });
    }

    if (res.headers !== null) {
      const inputString = res.headers.get("Set-Cookie") as string;
      // console.log(inputString);
      // スタート位置を取得
      const tokenStartIndex = inputString.indexOf(
        "gea_demo_token=" || "gea_prod_token=" || "gea_dev_token=",
      );
      // const refreshTokenStartIndex = inputString.indexOf(
      //   "gea_dev_refresh_token=" || "gea_prod_refresh_token=" || "gea_demo_refresh_token=",
      // );
      // 'Domain' の位置を見つける
      const domainIndex = inputString.indexOf("; Domain", tokenStartIndex);
      // 'gea_demo_token=' の位置が見つかった場合
      if (tokenStartIndex !== -1 && domainIndex !== -1) {
        // 'gea_demo_token=' の後から '; Domain' の前までの文字列を取得
        const token = inputString
          .substring(tokenStartIndex + "gea_demo_token=".length, domainIndex)
          .trim();
        // const refreshToken = inputString
        //   .substring(refreshTokenStartIndex + "gea_demo_refresh_token=".length, domainIndex)
        //   .trim();
        cookies().set("gea_demo_token", token);
        // cookies().set("gea_demo_refresh_token", refreshToken);
        redirect("/companies");
      }
    }
  });
  // redirect("/companies");
  return result;
};

/**
 * ログアウト処理
 */
export const handleLogout = async () => {
  await fetch(`${BACKEND_URL}/api/common/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      cookies().delete("gea_demo_token");
      cookies().delete("gea_prod_token");
      cookies().delete("gea_dev_token");
      redirect("/auth/signin");
    } else {
      console.info("ログアウトできませんでした");
    }
  });
};
