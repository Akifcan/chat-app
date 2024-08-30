export type MessageFrom = "user" | "bot";

export type MessageAction =
  | "/select"
  | "/image"
  | "text"
  | "/product"
  | "/greeting"
  | "/help"
  | "not-found-command";

export interface ProductProps {
  id: number;
  categoryId: number;
  name: string;
  price: string;
  images: string[];
}

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
