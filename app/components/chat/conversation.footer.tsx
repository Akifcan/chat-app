import { FormEvent } from "react";
import styles from "./chat.module.css";
import SendIcon from "./icons/send.icon";
import { useAppDispatch } from "@/store";
// import { addNewMessage } from "@/store/features/conversation/conversation.slice";

export default function ConversationFooter(): JSX.Element {
  // const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(addNewMessage("asdf"));
    console.log("ok");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["conversation-footer"]}>
      <input placeholder="Enter your text here..." type="text" />
      <button
        aria-label="Click this button for send the your message"
        title="Click this button for send the your message"
        type="submit"
        className={styles["send-message-button"]}
      >
        <SendIcon />
      </button>
    </form>
  );
}
