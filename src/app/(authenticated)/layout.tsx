// src/app/(authenticated)/layout.tsx

import { Header, Sidebar } from "@/features/layouts";
import type { ReactNode } from "react";

const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default AuthenticatedLayout;
