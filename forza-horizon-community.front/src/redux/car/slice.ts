import { defaultPageSize } from "@/components/constants";
import { ICar } from "@/data-transfer-objects";
import { sortEntities } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ICarState, ISortingPayload } from "../types";
import { getCarsAsync, getOwnedCarsAsync } from "./thunks";

const initialState: ICarState = {
  isLoadingEntities: false,
  entities: [],
  page: 0,
  pageSize: defaultPageSize,
  totalEntities: 0,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCarPage: (state, { payload }: ActionWithPayload<number>) => {
      state.page = payload;
    },
    setCarPageSize: (state, { payload }: ActionWithPayload<number>) => {
      state.pageSize = payload;
    },
    setSortedCars: (state, { payload }: ActionWithPayload<ISortingPayload<ICar>>) => {
      state.entities = sortEntities<ICar>(payload.order, payload.orderBy, state.entities);
    },
    cleanUpCarState: (state) => {
      state.isLoadingEntities = false;
      state.entities = [];
      state.page = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCarsAsync.pending, (state) => {
      state.isLoadingEntities = true;
    });
    builder.addCase(getCarsAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.entities = payload.data.entities;
      state.page = payload.data.page;
      state.pageSize = payload.data.pageSize;
      state.totalEntities = payload.data.total;
      state.isLoadingEntities = false;
    });
    builder.addCase(getCarsAsync.rejected, (state) => {
      state.isLoadingEntities = false;
    });
    builder.addCase(getOwnedCarsAsync.pending, (state) => {
      state.isLoadingEntities = true;
    });
    builder.addCase(getOwnedCarsAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;

      state.entities = payload.data.entities;
      state.page = payload.data.page;
      state.pageSize = payload.data.pageSize;
      state.totalEntities = payload.data.total;
      state.isLoadingEntities = false;
    });
    builder.addCase(getOwnedCarsAsync.rejected, (state) => {
      state.isLoadingEntities = false;
    });
  },
});

export const { setCarPage, setCarPageSize, setSortedCars, cleanUpCarState } = carSlice.actions;

export default carSlice.reducer;
