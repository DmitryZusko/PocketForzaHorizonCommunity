import { defaultPageSize } from "@/components";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ITuneState } from "../types";
import { getLatestTunesAsync, getTuneById, getTunesAsync, getTunesByCarIdAsync } from "./thunks";

const initialState: ITuneState = {
  isLoadingLatest: false,
  latestTunes: [],
  isLoadingTunes: false,
  tunes: [],
  page: 0,
  pageSize: defaultPageSize,
  totalEntities: 0,
  isLoadingSelected: false,
  selectedTune: undefined,
};

const tuneSlice = createSlice({
  name: "tune",
  initialState,
  reducers: {
    setPage: (state, { payload }: ActionWithPayload<number>) => {
      state.page = payload;
    },
    setPageSize: (state, { payload }: ActionWithPayload<number>) => {
      state.pageSize = payload;
    },
    turnPage: (state) => {
      state.page += 1;
    },
    cleanUpTunes: (state) => {
      state.tunes = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLatestTunesAsync.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestTunesAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.latestTunes = payload.data;
      state.isLoadingLatest = false;
    });
    builder.addCase(getTunesAsync.pending, (state) => {
      state.isLoadingTunes = true;
    });
    builder.addCase(getTunesAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.tunes = state.tunes.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingTunes = false;
    });
    builder.addCase(getTunesAsync.rejected, (state) => {
      state.isLoadingTunes = false;
    });
    builder.addCase(getTunesByCarIdAsync.pending, (state) => {
      state.isLoadingTunes = true;
    });
    builder.addCase(getTunesByCarIdAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.tunes = state.tunes.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingTunes = false;
    });
    builder.addCase(getTunesByCarIdAsync.rejected, (state) => {
      state.isLoadingTunes = false;
    });
    builder.addCase(getTuneById.pending, (state) => {
      state.isLoadingSelected = true;
    });
    builder.addCase(getTuneById.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.selectedTune = payload.data;
      state.isLoadingSelected = false;
    });
  },
});

export const { setPage, setPageSize, turnPage, cleanUpTunes } = tuneSlice.actions;

export default tuneSlice.reducer;
