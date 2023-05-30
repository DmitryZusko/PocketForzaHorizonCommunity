import { imageUtil } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { INewsState } from "../types";
import { getNewsAsync } from "./thunks";

const initialState: INewsState = {
  isLoading: false,
  news: [],
  count: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewsAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.news = imageUtil.extractImagesFromContent(payload.data.newsItems);
      state.isLoading = false;
    });
  },
});

export default newsSlice.reducer;
