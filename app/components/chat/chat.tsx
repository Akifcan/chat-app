import Portal from "../portal";
import Conversation from "./conversation";
import Fab from "./fab";

function Chat() {
  return (
    <>
      <Conversation />
      {/* <Fab /> */}
    </>
  );
}

export default Portal(Chat);
