import styles from "./chat.module.css";

export default function ConversationHeader(): JSX.Element {
  return (
    <div className={styles["conversation--header"]}>
      <h2>Chat</h2>
      <button></button>
    </div>
  );
}
