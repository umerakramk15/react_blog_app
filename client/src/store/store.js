import { configureStore } from "@reduxjs/toolkit";
import fetchPostsReducer from "./FetchAllPostSlice.js";
export const store = configureStore({
  reducer: {
    allPost: fetchPostsReducer,
  },
});
