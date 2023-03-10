import { serverPusher } from './../../pusher';
import { Message } from './../../typings.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
type Data = {
  message: Message;
};
type ErrorData = {
    body: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method Not Allowed" });
    return;
  }
  const { message } = req.body;
  const newMessage = {
    ...message,
    // Replace the timestamp of the user to the new timestamp of the server
    created_at: Date.now(),
  };
  //Push to upstash redis db
  await redis.hset('messages', message.id , JSON.stringify(newMessage));
  serverPusher.trigger('messages', 'new-message', newMessage);
  res.status(200).json({ message: newMessage });
}
