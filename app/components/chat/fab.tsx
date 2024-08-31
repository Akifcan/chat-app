import styled from "styled-components";
import AssistantIcon from "./icons/assistant.icon";

const FabButton = styled.button`
  --offset: 100px;

  position: fixed;
  bottom: 3rem;
  right: 3rem;

  background-color: var(--color-primary);
  border-radius: 50%;
  border: none;

  width: var(--offset);
  height: var(--offset);

  box-shadow: 5px 5px 0 white;
  transition: transform 300ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  animation: move 500ms cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate;
  cursor: pointer;
  display: grid;
  place-items: center;

  &::before {
    position: absolute;
    content: "Chat with me!";
    top: -60px;
    background-color: var(--color-primary);
    font-size: 1rem;
    color: #dedede;
    border-radius: 8px;
    padding: 0.4rem;

    transform: scale(0);
    transition: transform 300ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    transform: scale(1.2);
    animation: none;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

export default function Fab({
  onOpen,
}: Readonly<{ onOpen: () => void }>): JSX.Element {
  return (
    <FabButton
      data-testid="fab-button"
      onClick={onOpen}
      aria-label="Click to start chat"
    >
      <AssistantIcon />
    </FabButton>
  );
}
