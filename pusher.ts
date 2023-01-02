import Pusher from "pusher";
import ClientPusher from "pusher-js";
export const serverPusher = new Pusher({
  appId: "1532598",
  key: "8b6774c1cd5149008271",
  secret: "4acb7f1a5ba71c92b383",
  cluster: "ap1",
  useTLS: true,
});
export const clientPusher = new ClientPusher("8b6774c1cd5149008271", {
  cluster: "ap1",
});
