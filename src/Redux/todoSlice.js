import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
    name: "list",
    initialState: {
        data: [],
        empty: true
    },
    reducers: {
        addTodo: (state, { payload }) => {
            state.data = [...state.data, payload]
            state.empty = false;
        },
        clearTodo: (state, { payload }) => {
            console.log(payload)
            state.data = []
        }
    }
})
export const { addTodo, modifyTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;