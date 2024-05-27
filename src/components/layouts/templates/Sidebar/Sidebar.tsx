import type { FC, ReactNode } from "react";
import styles from "./sidebar.module.scss";

import { SidebarCloseIcon, SidebarOpenIcon } from "@/components/icons";
import { CloseNav, OpenNav } from "../../components";

type PropsType = {
  children: ReactNode;
};

export const Sidebar: FC<PropsType> = (props) => {
  const { children } = props;

  return (
    <div>
      <div
        className={`items-right bg-geagray fixed top-16 flex h-screen w-72 flex-col px-5 pb-10 pt-5 transition-[left] duration-500 ease-in-out ${styles.sidebar}`}
      >
        <div className="flex items-center justify-end gap-[40px]">
          <label htmlFor="sample" className={`absolute top-0 right-[0] ${styles.checkboxWrapper}`}>
            <input
              id="sample"
              type="checkbox"
              name="sample"
              className={`peer ${styles.checkbox}`}
              defaultChecked={true}
            />
            <span className={`cursor-pointer ${styles.sidebarClose}`}>
              <SidebarCloseIcon color="var(--secondary)" />
            </span>
            <span className={`cursor-pointer ${styles.sidebarOpen}`}>
              <SidebarOpenIcon color="var(--secondary)" />
            </span>
          </label>
        </div>
        <div className={styles.navMenuOpen}>
          <OpenNav />
        </div>
        <div className={`items-end w-full gap-4 pr-1 py-4 ${styles.navMenuClose}`}>
          <CloseNav />
        </div>
      </div>
      <main
        className={`displayScroll mr-[40px] mt-16 transition-[margin-left] duration-500 ease-in-out pl-10 pt-10 -z-10 ${styles.mainContents}`}
      >
        {children}
      </main>
    </div>
  );
};
