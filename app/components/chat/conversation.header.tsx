import styled from "styled-components";
import styles from "./chat.module.css";
import CloseIcon from "./icons/close.icon";

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  background-color: var(--color-primary);
  color: white;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
    <Container>
      <h2>Chat</h2>
      <CloseButton
        onClick={handleClose}
        aria-label="Click for close the chat window"
        title="Click for close the chat window"
      >
        <CloseIcon />
      </CloseButton>
    </Container>
  );
}
