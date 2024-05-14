import Image from "next/image";
import type { FC } from "react";

const HeaderAvatar: FC = () => {
  return (
    <Image src="/images/avatar.svg" alt="avatar" width={32} height={32} className="rounded-full" />
  );
};

export default HeaderAvatar;
