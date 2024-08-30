import styles from "./chat.module.css";
import AssistantIcon from "./icons/assistant.icon";

export default function Fab({
  onOpen,
}: Readonly<{ onOpen: () => void }>): JSX.Element {
  return (
    <button
      onClick={onOpen}
      className={styles["fab"]}
      aria-label="Click to start chat"
    >
      <AssistantIcon />
    </button>
  );
}
