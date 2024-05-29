import type { CSSProperties, FC } from "react"

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties
  color?: string
}

export const SidebarOpenIcon: FC<PropsType> = (props) => {
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
      <title>SidebarOpenIcon</title>
      <path
        d="M2 18V20H22V18H2ZM22 3.5L14 8.5L22 13.5V3.5ZM2 11V13H12V11H2ZM2 4V6H12V4H2Z"
        fill={color || "#AFAEB3"}
      />
    </svg>
  )
}
