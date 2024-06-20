"use server"

// action.ts
type State = {
  success?: boolean
  message?: string
}
export const cilentsInvite = async (prevState: State, formData: FormData) => {
  try {
    return {
      success: true,
      message: "顧問先の招待が完了しました",
    }
  } catch (error) {
    return {
      success: false,
      message: "顧問先の招待に失敗しました",
    }
  }
}
