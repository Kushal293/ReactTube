import { createSlice } from "@reduxjs/toolkit";
import { LIVE_MESSAGE_MAX_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        getMessages: (state, action) => {
            state.messages.splice(LIVE_MESSAGE_MAX_COUNT, 1);
            state.messages.unshift(action.payload);
        }
    }
});

export const { getMessages } = chatSlice.actions;
export default chatSlice.reducer;