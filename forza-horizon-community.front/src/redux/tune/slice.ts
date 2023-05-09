import { createSlice } from "@reduxjs/toolkit";
import { ITuneState } from "../types";
import { getLatestTunes } from "./thunks";

const initialState: ITuneState = {
  isLoadingLatest: false,
  latestTunes: [],
};

const tuneSlice = createSlice({
  name: "tune",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLatestTunes.pending, (state) => {
      state.isLoadingLatest = false;
    });
    builder.addCase(getLatestTunes.fulfilled, (state, { payload }) => {
      state.latestTunes = payload.data;
      state.isLoadingLatest = false;
    });
  },
});

export default tuneSlice.reducer;
