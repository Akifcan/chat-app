import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationState } from "./conversation.types";

const initialState: ConversationState = {
  messages: "",
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addNewMessage: (state, action: PayloadAction<string>) => {
      state.messages = " action.payload";
    },
  },
});

export const { addNewMessage } = conversationSlice.actions;

export default conversationSlice.reducer;
