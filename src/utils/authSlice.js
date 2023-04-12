import { createSlice } from "@reduxjs/toolkit";
import { auth } from '../config/firebase';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuth: false,
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
            if (state.user) {
                state.isAuth = true;
            }
        },

        logOut: (state) => {
            state.user = null;
            state.isAuth = false;
        },
    },
});


export const { signIn, logOut } = authSlice.actions;

export default authSlice.reducer;