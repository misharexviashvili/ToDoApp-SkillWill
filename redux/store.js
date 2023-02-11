import { configureStore } from "@reduxjs/toolkit";
import { saveTodo } from "./taskSlice";

export default configureStore({
  reducer: {
    todos: saveTodo,
  },
});
