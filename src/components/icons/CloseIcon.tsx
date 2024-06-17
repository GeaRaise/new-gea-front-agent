import type { CSSProperties, FC } from "react"
/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties
  color?: string
}
export const CloseIcon: FC<PropsType> = (props) => {
  const { style, color } = props
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#E7E7E7" />
      <path
        d="M18.1925 18.1933C17.8019 18.5838 17.1688 18.5838 16.7782 18.1933L9.70718 11.1222C9.31665 10.7317 9.31665 10.0985 9.70718 9.708V9.708C10.0977 9.31748 10.7309 9.31748 11.1214 9.708L18.1925 16.7791C18.583 17.1696 18.583 17.8028 18.1925 18.1933V18.1933Z"
        fill="#514F50"
      />
      <path
        d="M9.70711 18.1925C9.31658 17.8019 9.31658 17.1688 9.70711 16.7782L16.7782 9.70718C17.1687 9.31665 17.8019 9.31665 18.1924 9.70718V9.70718C18.5829 10.0977 18.5829 10.7309 18.1924 11.1214L11.1213 18.1925C10.7308 18.583 10.0976 18.583 9.70711 18.1925V18.1925Z"
        fill="#514F50"
      />
    </svg>
  )
}
