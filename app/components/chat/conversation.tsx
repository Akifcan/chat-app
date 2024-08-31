import styled, { keyframes } from "styled-components";
import ConversationFooter from "./conversation.footer";
import ConversationHeader from "./conversation.header";
import ConversationList from "./conversation.list";

const conversationInAnim = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  animation: ${conversationInAnim} 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: white;

  @media (max-width: 700px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }

  @media (min-width: 701px) {
    right: 3rem;
    bottom: 5rem;
    border-radius: 8px;
    width: min(100%, 350px);
    min-height: 500px;
    max-height: 500px;

    --radius: 8px;
  }
`;

export default function Conversation({
  onClose,
}: Readonly<{ onClose: () => void }>): JSX.Element {
  return (
    <Container id="conversation" data-testid="conversation">
      <ConversationHeader onClose={onClose} />
      <ConversationList />
      <ConversationFooter />
    </Container>
  );
}
