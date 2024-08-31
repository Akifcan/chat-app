import { useAppSelector } from "@/store";
import ConversationCard from "./conversation.card";
import styled from "styled-components";
import { useScrollDown } from "@/app/hooks/use-scroll-down";
import { useEffect } from "react";
import { selectLastAction } from "@/store/features/conversation/conversation.slice";

const Container = styled.div`
  flex: 1;
  background-color: white;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export default function ConversationList(): JSX.Element {
  const messages = useAppSelector((state) => state.conversation.messages);
  const lastAction = useAppSelector(selectLastAction);

  const { scrollToBottom } = useScrollDown("conversation-list");

  const handleScroll = () => {
    const FULL_SCREEN_NOT_NEEDED =
      lastAction?.startsWith("/category") ||
      lastAction?.startsWith("/image") ||
      lastAction?.startsWith("/product");
    if (FULL_SCREEN_NOT_NEEDED) {
      setTimeout(() => {
        const lastElement = document.querySelector(
          ".conversation-card:last-child"
        );
        if (!lastElement) {
          return;
        }
        lastElement.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 400);
      return;
    }

    scrollToBottom(0);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleScroll, [messages]);

  return (
    <Container id="conversation-list">
      {messages.map((message) => {
        return <ConversationCard message={message} key={message.id} />;
      })}
    </Container>
  );
}
