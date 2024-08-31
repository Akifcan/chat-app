import styled, { keyframes } from "styled-components";
import ScrollDownIcon from "./icons/scroll-down.icon";
import styles from "./chat.module.css";
import { useRef } from "react";

const buttonInAnim = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-secondary);
  cursor: pointer;
  animation: ${buttonInAnim} 500ms cubic-bezier(0.895, 0.03, 0.685, 0.22)
    forwards;
`;

export default function ScrollToBottomButton({
  onClick,
}: Readonly<{ onClick: () => void }>): JSX.Element {
  const element = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    element.current?.classList.add(styles["button-leave"]);
    element.current?.addEventListener("animationend", onClick, { once: true });
  };

  return (
    <div ref={element} className="flex justify-content-center p-half">
      <Button onClick={handleClick} aria-label="Click to scroll down">
        <ScrollDownIcon />
      </Button>
    </div>
  );
}
