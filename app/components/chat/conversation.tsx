import styles from "./chat.module.css";
import ConversationFooter from "./conversation.footer";
import ConversationHeader from "./conversation.header";
import ConversationList from "./conversation.list";

export default function Conversation(): JSX.Element {
  return (
    <div className={styles["conversation"]}>
      <ConversationHeader />
      <ConversationList />
      <ConversationFooter />
    </div>
  );
}
