import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";
import authSlice from "./authSlice";


const store = configureStore({
    reducer: {
        app: appSlice,
        search: SearchSlice,
        chat: chatSlice,
        auth: authSlice,
    }
});


export default store;