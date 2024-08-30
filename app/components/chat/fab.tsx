import styles from "./chat.module.css";
import AssistantIcon from "./icons/assistant.icon";

export default function Fab(): JSX.Element {
  return (
    <button className={styles["fab"]} aria-label="Click to start chat">
      <AssistantIcon />
    </button>
  );
}
