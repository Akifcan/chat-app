import { useAppSelector } from "@/store";
import ConversationCard from "./conversation.card";
import styled from "styled-components";
import { useScrollDown } from "@/app/hooks/use-scroll-down";
import { useEffect, useRef, useState } from "react";
import { selectLastAction } from "@/store/features/conversation/conversation.slice";
import ScrollToBottomButton from "./scroll-to-bottom.button";

const Container = styled.div`
  flex: 1;
  background-color: white;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: relative;
`;

export default function ConversationList(): JSX.Element {
  const messages = useAppSelector((state) => state.conversation.messages);
  const lastAction = useAppSelector(selectLastAction);

  const { scrollToBottom } = useScrollDown("conversation-list");
  const debounceRef = useRef<NodeJS.Timeout>();

  const [isScrollEnd, setScrolEnd] = useState(true);

  const handleScroll = () => {
    const FULL_SCREEN_NOT_NEEDED =
      lastAction?.startsWith("/category") ||
      lastAction?.startsWith("/image") ||
      lastAction?.startsWith("/product");
    if (FULL_SCREEN_NOT_NEEDED) {
      setTimeout(() => {
        const lastElement =
          document.getElementById("conversation-list")?.lastElementChild;
        console.log(lastElement);
        if (!lastElement) {
          return;
        }
        lastElement.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 400);
      return;
    }

    scrollToBottom(0);
  };

  const handleScrollToBottomShortcut = (e: Event) => {
    const OFFSET = 40;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const element = e.target as HTMLElement;
      if (
        element.scrollHeight - element.scrollTop - element.clientHeight >=
        OFFSET
      ) {
        setScrolEnd(false);
      } else {
        setScrolEnd(true);
      }
    }, 300);
  };

  useEffect(() => {
    const element = document.getElementById("conversation-list");
    element?.addEventListener("scroll", handleScrollToBottomShortcut);
    return () => {
      element?.removeEventListener("scroll", handleScrollToBottomShortcut);
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleScroll, [messages]);

  return (
    <>
      <Container id="conversation-list">
        {messages.map((message) => {
          return <ConversationCard message={message} key={message.id} />;
        })}
      </Container>
      {!isScrollEnd && <ScrollToBottomButton onClick={scrollToBottom} />}
    </>
  );
}
