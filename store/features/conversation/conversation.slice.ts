import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationState, MessageProps } from "./conversation.types";

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

export default conversationSlice.reducer;
