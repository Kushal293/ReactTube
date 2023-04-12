import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cachingSuggestion: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
});

export const { cachingSuggestion } = searchSlice.actions;

export default searchSlice.reducer;