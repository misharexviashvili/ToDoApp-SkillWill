import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    removeTodo: (state, action) => {
      console.log("delete")
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = taskSlice.actions;
export default taskSlice.reducer;
