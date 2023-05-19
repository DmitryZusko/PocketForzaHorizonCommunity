import { defaultPageSize } from "@/components";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ITuneState } from "../types";
import { getLatestTunes, getTuneById, getTunes, getTunesByCarId } from "./thunks";

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
    builder.addCase(getLatestTunes.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestTunes.fulfilled, (state, { payload }) => {
      state.latestTunes = payload.data;
      state.isLoadingLatest = false;
    });
    builder.addCase(getTunes.pending, (state) => {
      state.isLoadingTunes = true;
    });
    builder.addCase(getTunes.fulfilled, (state, { payload }) => {
      state.tunes = state.tunes.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingTunes = false;
    });
    builder.addCase(getTunes.rejected, (state) => {
      state.isLoadingTunes = false;
    });
    builder.addCase(getTunesByCarId.pending, (state) => {
      state.isLoadingTunes = true;
    });
    builder.addCase(getTunesByCarId.fulfilled, (state, { payload }) => {
      state.tunes = state.tunes.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingTunes = false;
    });
    builder.addCase(getTunesByCarId.rejected, (state) => {
      state.isLoadingTunes = false;
    });
    builder.addCase(getTuneById.pending, (state) => {
      state.isLoadingSelected = true;
    });
    builder.addCase(getTuneById.fulfilled, (state, { payload }) => {
      state.selectedTune = payload.data;
      state.isLoadingSelected = false;
    });
  },
});

export const { setPage, setPageSize, turnPage, cleanUpTunes } = tuneSlice.actions;

export default tuneSlice.reducer;
