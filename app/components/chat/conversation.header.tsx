import styles from "./chat.module.css";
import CloseIcon from "./icons/close.icon";

export default function ConversationHeader({
  onClose,
}: Readonly<{ onClose: () => void }>): JSX.Element {
  const handleClose = () => {
    const element = document.getElementById("conversation");

    // if element not found for any reason just remove from the dom
    if (!element) {
      return onClose();
    }

    element.classList.add(styles["leave"]);
    element.addEventListener("animationend", onClose, { once: true });
  };

  return (
    <div className={styles["conversation--header"]}>
      <h2>Chat</h2>
      <button
        onClick={handleClose}
        className={styles["close-button"]}
        aria-label="Click for close the chat window"
        title="Click for close the chat window"
      >
        <CloseIcon />
      </button>
    </div>
  );
}
