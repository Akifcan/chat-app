import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationState, MessageProps } from "./conversation.types";
import { RootState } from "@/store";

const initialState: ConversationState = {
  messages: [
    {
      id: Math.random(),
      from: "bot",
      action: "/greeting",
    },
  ],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addNewMessage: (state, action: PayloadAction<MessageProps>) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { addNewMessage } = conversationSlice.actions;

export const selectLastAction = (state: RootState) =>
  state.conversation.messages[state.conversation.messages.length - 1].action;

export default conversationSlice.reducer;
