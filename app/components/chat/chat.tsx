import styles from "./chat.module.css";
import AssistantIcon from "./icons/assistant.icon";
export default function Chat() {
  return (
    <>
      <button className={styles["fab"]}>
        <AssistantIcon />
      </button>
    </>
  );
}
