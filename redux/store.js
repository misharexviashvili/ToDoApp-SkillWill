import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
const initialState = [];

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
