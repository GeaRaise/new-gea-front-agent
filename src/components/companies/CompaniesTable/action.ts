export const getStatusLabel = (status: string | undefined) => {
  if (status === undefined) {
    return ""
  }
  if (status === "7") {
    return "承認済み"
  }
  if (status === "8") {
    return "招待済み"
  }
  return "未承認"
}
