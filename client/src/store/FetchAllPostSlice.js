import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPostsData = createAsyncThunk(
  "posts/fetchAllPostsData",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API_LOCAL_HOST}/api/v1/blog/posts`
    );

    return response.data.blogs;
  }
);

export const allPostSlice = createSlice({
  name: "Posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPostsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPostsData.fulfilled, (state, action) => {
        state.status = "successed"; // Typo: Should be "succeeded" instead of "successed"
        state.posts = action.payload;
      })
      .addCase(fetchAllPostsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export default allPostSlice.reducer;
