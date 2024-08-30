import { FormEvent, useState } from "react";
import SendIcon from "./icons/send.icon";
import { useAppDispatch } from "@/store";
import { addNewMessage } from "@/store/features/conversation/conversation.slice";
import { MessageAction } from "@/store/features/conversation/conversation.types";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
`;

const SendMessageButton = styled.button`
  border: none;
  background-color: var(--color-primary);
  padding-inline: 1rem;
  transition: background-color 500ms linear;
  border-bottom-right-radius: var(--radius);
  transition: opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:disabled {
    opacity: 0.5;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  min-height: 50px;
  text-indent: 10px;
  border-bottom-left-radius: var(--radius);
  border: 2px solid var(--color-primary);
`;

export default function ConversationFooter(): JSX.Element {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleBotResponse = (text: string) => {
    const action = text as MessageAction;

    if (action === "/help") {
      return dispatch(
        addNewMessage({
          from: "bot",
          id: Math.random(),
          action: "/help",
        })
      );
    }

    if (action === "/greeting") {
      return dispatch(
        addNewMessage({
          from: "bot",
          id: Math.random(),
          action: "/greeting",
        })
      );
    }

    if (action === "/select") {
      return dispatch(
        addNewMessage({
          from: "bot",
          id: Math.random(),
          action: "/select",
          text: "Please select a category from the list",
        })
      );
    }

    if (action === "/product") {
      return dispatch(
        addNewMessage({
          from: "bot",
          id: Math.random(),
          action: text,
          text: "Here top pick products for you...",
        })
      );
    }

    return dispatch(
      addNewMessage({
        from: "bot",
        id: Math.random(),
        action: "not-found-command",
      })
    );
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
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <datalist id="commands">
        <option value="/help"></option>
        <option value="/greeting"></option>
        <option value="/product"></option>
        <option value="/select"></option>
      </datalist>
      <Input
        list="commands"
        autoComplete="true"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={100}
        placeholder="Enter your text here..."
        type="text"
      />
      <SendMessageButton
        disabled={!text.length}
        aria-label="Click this button for send the your message"
        title="Click this button for send the your message"
        type="submit"
      >
        <SendIcon />
      </SendMessageButton>
    </Form>
  );
}
