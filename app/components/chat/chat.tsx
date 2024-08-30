import { useState } from "react";
import Portal from "../portal";
import Conversation from "./conversation";
import Fab from "./fab";

function Chat() {
  const [isChatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);

  const closeChat = () => setChatOpen(false);

  return (
    <Portal>
      {isChatOpen ? (
        <Conversation onClose={closeChat} />
      ) : (
        <Fab onOpen={openChat} />
      )}
    </Portal>
  );
}

export default Chat;
