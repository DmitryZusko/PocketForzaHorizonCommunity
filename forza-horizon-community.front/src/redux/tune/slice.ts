import { defaultPageSize } from "@/components";
import { RatingPosted, toastHandler } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ITuneState } from "../types";
import {
  getLatestTunesAsync,
  getTuneById,
  getTunesAsync,
  getTunesByCarIdAsync,
  setTuneRatingAsync,
} from "./thunks";

const initialState: ITuneState = {
  isLoadingLatest: false,
  latestEntities: [],
  isLoadingEntities: false,
  entities: [],
  page: 0,
  pageSize: defaultPageSize,
  totalEntities: 0,
  isLoadingSelected: false,
  selectedEntity: undefined,
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
      state.isLoadingEntities = false;
      state.entities = [];
      state.page = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLatestTunesAsync.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestTunesAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.latestEntities = payload.data;
      state.isLoadingLatest = false;
    });
    builder.addCase(getTunesAsync.pending, (state) => {
      state.isLoadingEntities = true;
    });
    builder.addCase(getTunesAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.entities = state.entities.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingEntities = false;
    });
    builder.addCase(getTunesAsync.rejected, (state) => {
      state.isLoadingEntities = false;
    });
    builder.addCase(getTunesByCarIdAsync.pending, (state) => {
      state.isLoadingEntities = true;
    });
    builder.addCase(getTunesByCarIdAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.entities = state.entities.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingEntities = false;
    });
    builder.addCase(getTunesByCarIdAsync.rejected, (state) => {
      state.isLoadingEntities = false;
    });
    builder.addCase(getTuneById.pending, (state) => {
      state.isLoadingSelected = true;
    });
    builder.addCase(getTuneById.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.selectedEntity = payload.data;
      state.isLoadingSelected = false;
    });
    builder.addCase(setTuneRatingAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.selectedEntity = payload.data;
      toastHandler.showSuccess(RatingPosted);
    });
  },
});

export const { setPage, setPageSize, turnPage, cleanUpTunes } = tuneSlice.actions;

export default tuneSlice.reducer;
