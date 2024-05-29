import type { CSSProperties, FC } from "react"

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties
  color?: string
}

export const SidebarCloseIcon: FC<PropsType> = (props) => {
  const { style, color } = props

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style || undefined}
    >
      <title>SidebarCloseIcon</title>
      <path
        d="M22 18V20H2V18H22ZM2 3.5L10 8.5L2 13.5V3.5ZM22 11V13H12V11H22ZM22 4V6H12V4H22Z"
        fill={color || "#AFAEB3"}
      />
    </svg>
  )
}
