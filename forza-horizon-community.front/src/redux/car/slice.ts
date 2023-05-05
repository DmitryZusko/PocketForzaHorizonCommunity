import { ICar } from "@/data-transfer-objects/entities/Car";
import sortEntities from "@/utilities/sort-table-by-header";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ICarState, ISortingPayload } from "../types";
import { getCars } from "./thunks";

const initialState: ICarState = {
  isLoadingCars: false,
  cars: [],
  totalEntities: 0,
  totalPages: 0,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
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
      state.totalEntities = payload.data.total;
      state.totalPages = payload.data.totalPages;
      state.isLoadingCars = false;
    });
  },
});

export const { setSortedCars } = carSlice.actions;

export default carSlice.reducer;
