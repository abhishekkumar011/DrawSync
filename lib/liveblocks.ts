import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_dev_VlP8MQ6dqW54rA61KyTQEEydwntMBpyTHOi4oyTI9m4W-o6Wj2XFMi-1DZTBuyJb",
});

export const {
  RoomProvider,
  useRoom,
  useSelf,
  useMyPresence,
  useOthers,
  useMutation,
  useStorage,
} = createRoomContext(client);
