import { defaultPageSize } from "@/components/constants/applicationConstants";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IDesignState } from "../types";
import { getDesignById, getDesignsAsync, getDesignsByCarId, getLatestDesignsAsync } from "./thunks";

const initialState: IDesignState = {
  isLoadingLatest: false,
  latestDesigns: [],
  isLoadingDesigns: false,
  designs: [],
  page: 0,
  pageSize: defaultPageSize,
  totalEntities: 0,
  isLoadingSelected: false,
  selectedDesign: undefined,
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
    turnPage: (state) => {
      state.page += 1;
    },
    cleanUpDesigns: (state) => {
      state.designs = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLatestDesignsAsync.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestDesignsAsync.fulfilled, (state, { payload }) => {
      state.latestDesigns = payload.data.entities;
      state.isLoadingLatest = false;
    });
    builder.addCase(getDesignsAsync.pending, (state) => {
      state.isLoadingDesigns = true;
    });
    builder.addCase(getDesignsAsync.fulfilled, (state, { payload }) => {
      state.designs = state.designs.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesignsAsync.rejected, (state) => {
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesignsByCarId.pending, (state) => {
      state.isLoadingDesigns = true;
    });
    builder.addCase(getDesignsByCarId.fulfilled, (state, { payload }) => {
      state.designs = state.designs.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesignsByCarId.rejected, (state) => {
      state.isLoadingDesigns = false;
    });
    builder.addCase(getDesignById.pending, (state) => {
      state.isLoadingSelected = true;
    });
    builder.addCase(getDesignById.fulfilled, (state, { payload }) => {
      state.selectedDesign = payload.data;
      state.isLoadingSelected = false;
    });
  },
});

export const { setPage, setPageSize, turnPage, cleanUpDesigns } = designSlice.actions;

export default designSlice.reducer;
