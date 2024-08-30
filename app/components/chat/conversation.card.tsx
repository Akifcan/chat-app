import { useAppSelector } from "@/store";
import styles from "./chat.module.css";

export default function ConversationCard({
  position,
}: Readonly<{ position: "left" | "right" }>): JSX.Element {
  const message = useAppSelector((state) => state.conversation.messages);
  return (
    <div className={[styles["conversation-card"], styles[position]].join(" ")}>
      <div className={styles["avatar"]}></div>
      <p>{message}</p>
    </div>
  );
}
