import { FormEvent, useState } from "react";
import styles from "./chat.module.css";
import SendIcon from "./icons/send.icon";
import { useAppDispatch } from "@/store";
import { addNewMessage } from "@/store/features/conversation/conversation.slice";
import { MessageAction } from "@/store/features/conversation/conversation.types";

export default function ConversationFooter(): JSX.Element {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleBotResponse = (text: string) => {
    const action = text as MessageAction;
    switch (action) {
      case "/help":
        dispatch(
          addNewMessage({
            from: "bot",
            id: Math.random(),
            action: "/help",
          })
        );
        break;

      default:
        dispatch(
          addNewMessage({
            from: "bot",
            id: Math.random(),
            action: "/help",
          })
        );
        break;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addNewMessage({
        from: "user",
        id: Math.random(),
        text,
      })
    );
    handleBotResponse(text);
    setTimeout(() => {
      const conversationList = document.getElementById("conversation-list");

      conversationList?.scrollTo({
        behavior: "smooth",
        top: conversationList.scrollHeight * 99999,
      });

      setText("");
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["conversation-footer"]}>
      <datalist id="commands">
        <option value="/help"></option>
        <option value="/greeting"></option>
        <option value="/product"></option>
        <option value="/select"></option>
      </datalist>

      <input
        list="commands"
        autoComplete="true"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={100}
        placeholder="Enter your text here..."
        type="text"
      />
      <button
        disabled={!text.length}
        aria-label="Click this button for send the your message"
        title="Click this button for send the your message"
        type="submit"
        className={styles["send-message-button"]}
      >
        <SendIcon />
      </button>
    </form>
  );
}
