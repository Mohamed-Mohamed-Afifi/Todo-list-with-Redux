import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        list: todoSlice
    }
})
export default store;