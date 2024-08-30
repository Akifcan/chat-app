import styles from "./chat.module.css";
import ConversationFooter from "./conversation.footer";
import ConversationHeader from "./conversation.header";
import ConversationList from "./conversation.list";

export default function Conversation({
  onClose,
}: Readonly<{ onClose: () => void }>): JSX.Element {
  return (
    <div className={styles["conversation"]} id="conversation">
      <ConversationHeader onClose={onClose} />
      <ConversationList />
      <ConversationFooter />
    </div>
  );
}
