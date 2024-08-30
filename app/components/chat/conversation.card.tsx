import { MessageProps } from "@/store/features/conversation/conversation.types";
import GreetingMessage from "./conversation-types/greeting.message";
import HelpMessage from "./conversation-types/help.message";
import SelectCategoryMessage from "./conversation-types/select-category.message";
import styled from "styled-components";
import NotFoundCommandMessage from "./conversation-types/not-found-command.message";
import ProductsMessage from "./conversation-types/products.message";

type Position = "left" | "right";

const Container = styled.div<{ $position?: Position }>`
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

const Avatar = styled.div<{ $position?: Position }>`
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: 50%;
  background-image: url("${(props) =>
    props.$position === "left" ? "/robot.png" : "/user-avatar.png"}");
  background-size: contain;
`;

export default function ConversationCard({
  message,
}: Readonly<{
  message: MessageProps;
}>): JSX.Element {
  return (
    <Container $position={message.from === "bot" ? "left" : "right"}>
      <Avatar $position={message.from === "bot" ? "left" : "right"} />
      <div className="flex-1">
        {message.text && (
          <p
            className="mb-1"
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        )}
        {message.action === "/greeting" && <GreetingMessage />}
        {message.action === "/help" && <HelpMessage />}
        {message.action === "/select" && <SelectCategoryMessage />}
        {message.action === "not-found-command" && <NotFoundCommandMessage />}
        {message.action === "/product" && <ProductsMessage />}
      </div>
    </Container>
  );
}
