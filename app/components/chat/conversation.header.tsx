import styles from "./chat.module.css";
import CloseIcon from "./icons/close.icon";

export default function ConversationHeader(): JSX.Element {
  return (
    <div className={styles["conversation--header"]}>
      <h2>Chat</h2>
      <button
        className={styles["close-button"]}
        aria-label="Click for close the chat window"
        title="Click for close the chat window"
      >
        <CloseIcon />
      </button>
    </div>
  );
}
