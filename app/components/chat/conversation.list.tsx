import { useAppSelector } from "@/store";
import styles from "./chat.module.css";
import ConversationCard from "./conversation.card";

export default function ConversationList(): JSX.Element {
  const messages = useAppSelector((state) => state.conversation.messages);

  return (
    <div className={styles["conversation-list"]} id="conversation-list">
      {messages.map((message) => {
        return (
          <ConversationCard
            message={message}
            key={message.id}
            position={message.from === "bot" ? "left" : "right"}
          />
        );
      })}
    </div>
  );
}
