import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-1/2 items-center justify-center m-auto h-screen gap-6">
      <h1 className="text-5xl text-primary font-extrabold tracking-widest">GEAREACH</h1>
      <div className="flex gap-4">
        <Link className="px-4 py-2 bg-primary rounded-md text-white shadow-md" href="#">
          会員登録する
        </Link>
        <Link className="px-4 py-2 bg-secondary rounded-md text-white shadow-md" href="auth/signin">
          ログイン
        </Link>
      </div>
    </div>
  );
};

export default Home;
