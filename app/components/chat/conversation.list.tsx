import { useAppSelector } from "@/store";
import styles from "./chat.module.css";
import ConversationCard from "./conversation.card";
import styled from "styled-components";
import { useEffect } from "react";
import { useScrollDown } from "@/app/hooks/use-scroll-down";

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

  const { scrollToBottom } = useScrollDown("conversation-list");

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Container id="conversation-list">
      {messages.map((message) => {
        return <ConversationCard message={message} key={message.id} />;
      })}
    </Container>
  );
}
