import { useAppSelector } from "@/store";
import styles from "./chat.module.css";
import { MessageProps } from "@/store/features/conversation/conversation.types";
import GreetingMessage from "./conversation-types/greeting.message";
import HelpMessage from "./conversation-types/help.message";

export default function ConversationCard({
  message,
  position,
}: Readonly<{
  message: MessageProps;
  position: "left" | "right";
}>): JSX.Element {
  return (
    <div className={[styles["conversation-card"], styles[position]].join(" ")}>
      <div className={styles["avatar"]}></div>
      {message.text && <p>{message.text}</p>}
      {message.action === "greeting" && <GreetingMessage />}
      {message.action === "/help" && <HelpMessage />}
    </div>
  );
}
