import Image from "next/image";
import logo from "../public/assets/logo-Meta.png";
import goku from "../public/assets/giphy.gif";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
type Props = {
  session: Awaited<ReturnType<typeof getSession>>;
};

function Header({session}: Props) {
  if (session)
    return (
      <header className="sticky z-50 bg-white top-0 flex items-center justify-between p-10 shadow-sm">
        <div className="flex space-x-2">
          <img
            src={session.user?.image!}
            alt="Profile Picture"
            className="w-12 h-12 rounded-full mx-2 "
          />
          <div>
            <p className="text-blue-400 ">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );
  return (
    <header className="sticky z-50 bg-white top-0 flex items-center justify-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center ">
          <Image src={logo} height={10} width={50} alt="Logo" />
          <p className="text-blue-400">
            Welcome to My Messenger{" "}
            <span className="text-black">(but using Meta logo)</span>{" "}
          </p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-400 hover:bg-blue-700 rounded text-white font-bold py-2 px-4"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props:{
      session,

    }
  }
}
