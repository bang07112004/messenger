import { unstable_getServerSession } from "next-auth";
import React from "react";
import { Message } from "../typings";
import ChatInPut from "./ChatInPut";
import MessageList from "./MessageList";
import { Providers } from "./providers";

type Props = {};

async function page({}: Props) {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());
  const messages: Message[] = data.messages;
  const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      <main className="">
        {/* Message list */}
        <MessageList initialMessages={messages} />
        {/* Chat Input */}
        <ChatInPut session={session} />
      </main>{" "}
    </Providers>
  );
}

export default page;
