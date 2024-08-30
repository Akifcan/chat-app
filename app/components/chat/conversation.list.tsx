import styles from "./chat.module.css";
import ConversationCard from "./conversation.card";

export default function ConversationList(): JSX.Element {
  return (
    <div className={styles["conversation-list"]}>
      <ConversationCard position="left" />
      <ConversationCard position="right" />
      <ConversationCard position="left" />
    </div>
  );
}
