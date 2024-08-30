export type MessageFrom = "user" | "bot";

export type MessageAction =
  | "/select"
  | "/image"
  | "text"
  | "/product"
  | "/greeting"
  | "/help"
  | "not-found-command";

export interface CategoryProps {
  id: number;
  name: string;
}

export interface MessageProps {
  id: number;
  from: MessageFrom;
  action?: MessageAction | string;
  text?: string;
}

export interface ConversationState {
  messages: MessageProps[];
}
