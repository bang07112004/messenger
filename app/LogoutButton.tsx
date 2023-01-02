"use client";
import { signOut } from "next-auth/react";
type Props = {};

function LogoutButton({}: Props) {
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-400 hover:bg-blue-700 rounded text-white font-bold py-2 px-4"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
