import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth",
});

export const {
  RoomProvider,
  useRoom,
  useSelf,
  useMyPresence,
  useOthers,
  useOther,
  useMutation,
  useStorage,
  useHistory,
  useCanUndo,
  useCanRedo,
  useOthersMapped,
  useOthersConnectionIds,
} = createRoomContext(client);
