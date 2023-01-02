import "../styles/globals.css";
import Header from "./Header";
import { Providers } from "./providers";
import { useSession } from "next-auth/react";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
