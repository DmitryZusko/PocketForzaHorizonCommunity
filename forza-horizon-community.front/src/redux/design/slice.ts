import { defaultPageSize } from "@/components/constants/applicationConstants";
import { RatingPosted, toastHandler } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IDesignState } from "../types";
import {
  getDesignById,
  getDesignsAsync,
  getDesignsByCarId,
  getLatestDesignsAsync,
  setDesignRatingAsync,
} from "./thunks";

const initialState: IDesignState = {
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
      state.isLoadingEntities = false;
      state.entities = [];
      state.page = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLatestDesignsAsync.pending, (state) => {
      state.isLoadingLatest = true;
    });
    builder.addCase(getLatestDesignsAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.latestEntities = payload.data.entities;
      state.isLoadingLatest = false;
    });
    builder.addCase(getDesignsAsync.pending, (state) => {
      state.isLoadingEntities = true;
    });
    builder.addCase(getDesignsAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.entities = state.entities.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingEntities = false;
    });
    builder.addCase(getDesignsAsync.rejected, (state) => {
      state.isLoadingEntities = false;
    });
    builder.addCase(getDesignsByCarId.pending, (state) => {
      state.isLoadingEntities = true;
    });
    builder.addCase(getDesignsByCarId.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.entities = state.entities.concat(payload.data.entities);
      state.totalEntities = payload.data.total;
      state.isLoadingEntities = false;
    });
    builder.addCase(getDesignsByCarId.rejected, (state) => {
      state.isLoadingEntities = false;
    });
    builder.addCase(getDesignById.pending, (state) => {
      state.isLoadingSelected = true;
    });
    builder.addCase(getDesignById.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.selectedEntity = payload.data;
      state.isLoadingSelected = false;
    });
    builder.addCase(setDesignRatingAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.selectedEntity = payload.data;
      toastHandler.showSuccess(RatingPosted);
    });
  },
});

export const { setPage, setPageSize, turnPage, cleanUpDesigns } = designSlice.actions;

export default designSlice.reducer;
