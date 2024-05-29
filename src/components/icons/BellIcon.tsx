import type { CSSProperties, FC } from "react"

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties
  color?: string
}

export const BellIcon: FC<PropsType> = (props) => {
  const { style, color } = props

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style || undefined}
    >
      <title>BellIcon</title>
      <path
        d="M18 8.11719C18 6.52589 17.3679 4.99977 16.2426 3.87455C15.1174 2.74933 13.5913 2.11719 12 2.11719C10.4087 2.11719 8.88258 2.74933 7.75736 3.87455C6.63214 4.99977 6 6.52589 6 8.11719C6 15.1172 3 17.1172 3 17.1172H21C21 17.1172 18 15.1172 18 8.11719Z"
        stroke={color || "#AFAEB3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7295 21.1172C13.5537 21.4203 13.3014 21.6718 12.9978 21.8467C12.6941 22.0216 12.3499 22.1136 11.9995 22.1136C11.6492 22.1136 11.3049 22.0216 11.0013 21.8467C10.6977 21.6718 10.4453 21.4203 10.2695 21.1172"
        stroke={color || "#AFAEB3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
