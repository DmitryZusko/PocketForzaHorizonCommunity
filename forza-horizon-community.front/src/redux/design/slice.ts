import { defaultPageSize } from "@/components/constants/applicationConstants";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IDesignState } from "../types";
import { getDesigns, getDesignsByCarId, getLatestDesigns } from "./thunks";

const initialState: IDesignState = {
  isLoadingLatest: false,
  latestDesigns: [],
  isLoadingDesigns: false,
  designs: [],
  page: 0,
  pageSize: defaultPageSize,
  totalEntities: 0,
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setPage: (state, { payload }: ActionWithPayload<number>) => {
      state.page = payload;
    },
    setPageSize: (state, { payload }: ActionWithPayload<number>) => {
      state.pageSize = payload;
    },
    addToPageSize: (state) => {
      state.pageSize += defaultPageSize;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLatestDesigns.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestDesigns.fulfilled, (state, { payload }) => {
      state.latestDesigns = payload.data.entities;
      state.isLoadingLatest = false;
    });
    builder.addCase(getDesigns.pending, (state) => {
      state.isLoadingDesigns = true;
    });
    builder.addCase(getDesigns.fulfilled, (state, { payload }) => {
      state.designs = payload.data.entities;
      state.totalEntities = payload.data.total;
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesigns.rejected, (state) => {
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesignsByCarId.pending, (state) => {
      state.isLoadingDesigns = true;
    });
    builder.addCase(getDesignsByCarId.fulfilled, (state, { payload }) => {
      state.designs = payload.data.entities;
      state.totalEntities = payload.data.total;
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesignsByCarId.rejected, (state) => {
      state.isLoadingDesigns = false;
    });
  },
});

export const { setPage, setPageSize, addToPageSize } = designSlice.actions;

export default designSlice.reducer;
