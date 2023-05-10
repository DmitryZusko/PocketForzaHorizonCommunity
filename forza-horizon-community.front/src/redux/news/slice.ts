import { imageUtil } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { INewsState } from "../types";
import { getNews } from "./thunks";

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
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      state.news = imageUtil.extractImagesFromContent(payload.data.newsItems);
      state.isLoading = false;
    });
  },
});

export default newsSlice.reducer;
