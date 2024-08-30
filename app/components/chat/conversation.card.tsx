import { MessageProps } from "@/store/features/conversation/conversation.types";
import GreetingMessage from "./conversation-types/greeting.message";
import HelpMessage from "./conversation-types/help.message";
import SelectCategoryMessage from "./conversation-types/select-category.message";
import styled from "styled-components";
import NotFoundCommandMessage from "./conversation-types/not-found-command.message";

const Container = styled.div<{ $position?: "left" | "right" }>`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 2rem;
  background-color: ${(props) =>
    props.$position === "left" ? "thistle" : "rgb(214, 162, 214)"};
  flex-direction: ${(props) =>
    props.$position === "left" ? "row" : "row-reverse"};
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
`;

export default function ConversationCard({
  message,
}: Readonly<{
  message: MessageProps;
}>): JSX.Element {
  return (
    // <div className={[styles["conversation-card"], styles[position]].join(" ")}>
    <Container $position={message.from === "bot" ? "left" : "right"}>
      <Avatar />
      <div className="flex-1">
        {message.text && <p className="mb-1">{message.text}</p>}
        {message.action === "/greeting" && <GreetingMessage />}
        {message.action === "/help" && <HelpMessage />}
        {message.action === "/select" && <SelectCategoryMessage />}
        {message.action === "not-found-command" && <NotFoundCommandMessage />}
      </div>
    </Container>
  );
}
