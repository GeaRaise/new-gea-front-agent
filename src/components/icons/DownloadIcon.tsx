import type { CSSProperties, FC } from "react"

interface PropsType {
  style?: CSSProperties
  color?: string
}

const DownloadIcon: FC<PropsType> = (props) => {
  const { style, color } = props
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8537 17.75H3.41373C3.06695 17.7359 2.72635 17.6535 2.41144 17.5075C2.09653 17.3616 1.81348 17.155 1.57849 16.8996C1.3435 16.6442 1.16118 16.3449 1.04197 16.019C0.922753 15.693 0.868983 15.3468 0.883733 15V12C0.883733 11.8011 0.96275 11.6103 1.1034 11.4697C1.24405 11.329 1.43482 11.25 1.63373 11.25C1.83265 11.25 2.02341 11.329 2.16406 11.4697C2.30472 11.6103 2.38373 11.8011 2.38373 12V15C2.35791 15.2969 2.44738 15.5924 2.63356 15.8251C2.81975 16.0579 3.08838 16.21 3.38373 16.25H15.8537C16.1491 16.21 16.4177 16.0579 16.6039 15.8251C16.7901 15.5924 16.8796 15.2969 16.8537 15V12C16.8537 11.8011 16.9328 11.6103 17.0734 11.4697C17.2141 11.329 17.4048 11.25 17.6037 11.25C17.8026 11.25 17.9934 11.329 18.1341 11.4697C18.2747 11.6103 18.3537 11.8011 18.3537 12V15C18.3837 15.6954 18.1378 16.3744 17.6696 16.8894C17.2014 17.4045 16.5488 17.7137 15.8537 17.75Z"
        fill={color || "#A8A8A8"}
      />
      <path
        d="M5.65177 7.25066C5.75031 7.25019 5.84795 7.26941 5.93896 7.30719C6.02997 7.34497 6.11252 7.40055 6.18177 7.47066L9.65177 10.9407L13.1218 7.47066C13.2639 7.33818 13.452 7.26606 13.6463 7.26948C13.8406 7.27291 14.026 7.35163 14.1634 7.48904C14.3008 7.62645 14.3795 7.81184 14.3829 8.00614C14.3864 8.20044 14.3142 8.38848 14.1818 8.53066L10.1818 12.5307C10.0411 12.6711 9.85052 12.75 9.65176 12.75C9.45301 12.75 9.26239 12.6711 9.12177 12.5307L5.12176 8.53066C4.98131 8.39003 4.90243 8.19941 4.90243 8.00066C4.90243 7.80191 4.98131 7.61128 5.12176 7.47066C5.19101 7.40055 5.27356 7.34497 5.36457 7.30719C5.45558 7.26941 5.55323 7.25019 5.65177 7.25066Z"
        fill={color || "#A8A8A8"}
      />
      <path
        d="M9.65161 0.25C9.84972 0.25259 10.039 0.332439 10.1791 0.472534C10.3192 0.612629 10.399 0.801893 10.4016 1L10.4016 12C10.4016 12.1989 10.3226 12.3897 10.1819 12.5303C10.0413 12.671 9.85052 12.75 9.65161 12.75C9.4527 12.75 9.26193 12.671 9.12128 12.5303C8.98063 12.3897 8.90161 12.1989 8.90161 12L8.90161 1C8.9042 0.801893 8.98405 0.612629 9.12415 0.472534C9.26424 0.332439 9.45351 0.25259 9.65161 0.25Z"
        fill={color || "#A8A8A8"}
      />
    </svg>
  )
}

export default DownloadIcon