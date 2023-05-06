import { createSlice } from "@reduxjs/toolkit";
import { IDesignState } from "../types";
import { getLatestDesigns } from "./thunks";

const initialState: IDesignState = {
  isLoadingLatest: false,
  latestDesigns: [],
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLatestDesigns.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestDesigns.fulfilled, (state, { payload }) => {
      state.latestDesigns = payload.data.entities;
      state.isLoadingLatest = false;
    });
    builder.addCase(getLatestDesigns.rejected, (state) => {
      state.isLoadingLatest = false;
    });
  },
});

export default designSlice.reducer;
