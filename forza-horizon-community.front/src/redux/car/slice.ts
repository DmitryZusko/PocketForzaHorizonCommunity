import { defaultPageSize } from "@/components/constants/applicationConstants";
import { ICar } from "@/data-transfer-objects/entities/Car";
import sortEntities from "@/utilities/sort-table-by-header";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ICarState, ISortingPayload } from "../types";
import { getCars } from "./thunks";

const initialState: ICarState = {
  isLoadingCars: false,
  cars: [],
  page: 0,
  pageSize: defaultPageSize,
  totalEntities: 0,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setPage: (state, { payload }: ActionWithPayload<number>) => {
      state.page = payload;
    },
    setPageSize: (state, { payload }: ActionWithPayload<number>) => {
      state.pageSize = payload;
    },
    setSortedCars: (state, { payload }: ActionWithPayload<ISortingPayload<ICar>>) => {
      state.cars = sortEntities<ICar>(payload.order, payload.orderBy, state.cars);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoadingCars = true;
    });
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      state.cars = payload.data.entities;
      state.page = payload.data.page;
      state.pageSize = payload.data.pageSize;
      state.totalEntities = payload.data.total;
      state.isLoadingCars = false;
    });
    builder.addCase(getCars.rejected, (state) => {
      state.isLoadingCars = false;
    });
  },
});

export const { setPage, setPageSize, setSortedCars } = carSlice.actions;

export default carSlice.reducer;
