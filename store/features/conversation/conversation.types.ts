export type MessageFrom = "user" | "bot";
export type MessageAction =
  | "/select"
  | "/image"
  | "text"
  | "/product"
  | "/greeting"
  | "/help"
  | "not-found-command";

export interface MessageProps {
  id: number;
  from: MessageFrom;
  action?: MessageAction;
  text?: string | MessageAction;
}

export interface ConversationState {
  messages: MessageProps[];
}
