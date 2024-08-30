import styles from "./chat.module.css";
import SendIcon from "./icons/send.icon";

export default function ConversationFooter(): JSX.Element {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles["conversation-footer"]}
    >
      <input placeholder="Enter your text here..." type="text" />
      <button type="submit" className={styles["send-message-button"]}>
        <SendIcon />
      </button>
    </form>
  );
}
