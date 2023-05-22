import { showToast } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { IFiltetSchemeState } from "../types";
import {
  getCarFilterSchemeAsync,
  getCarNamesAsync,
  getCarTypesAsync,
  getManufacturesAsync,
  postCarTypeAsync,
  postManufactureAsync,
} from "./thunks";

const initialState: IFiltetSchemeState = {
  isLoadingCarTypes: false,
  carTypes: [],
  totalCarTypes: 0,
  isLoadingManufacture: false,
  manufactures: [],
  totalManufactures: 0,
  isLoadingCarNames: false,
  carNames: [],
  isLoadingCarFilterScheme: false,
  minPrice: 0,
  maxPrice: 0,
  minYear: 0,
  maxYear: 0,
};

const filterSchemeSlice = createSlice({
  name: "filterScheme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarTypesAsync.pending, (state) => {
      state.isLoadingCarTypes = true;
    });
    builder.addCase(getCarTypesAsync.fulfilled, (state, { payload }) => {
      state.carTypes = payload.data.entities;
      state.totalCarTypes = payload.data.total;
      state.isLoadingCarTypes = false;
    });
    builder.addCase(getCarTypesAsync.rejected, (state) => {
      state.isLoadingCarTypes = false;
    });
    builder.addCase(getManufacturesAsync.pending, (state) => {
      state.isLoadingManufacture = true;
    });
    builder.addCase(getManufacturesAsync.fulfilled, (state, { payload }) => {
      state.manufactures = payload.data.entities;
      state.totalManufactures = payload.data.total;
      state.isLoadingManufacture = false;
    });
    builder.addCase(getManufacturesAsync.rejected, (state) => {
      state.isLoadingManufacture = false;
    });
    builder.addCase(getCarNamesAsync.pending, (state) => {
      state.isLoadingCarNames = true;
    });
    builder.addCase(getCarNamesAsync.fulfilled, (state, { payload }) => {
      state.carNames = payload.data.entities;
    });
    builder.addCase(getCarNamesAsync.rejected, (state) => {
      state.isLoadingCarNames = true;
    });
    builder.addCase(getCarFilterSchemeAsync.pending, (state) => {
      state.isLoadingCarFilterScheme = true;
    });
    builder.addCase(getCarFilterSchemeAsync.fulfilled, (state, { payload }) => {
      state.minPrice = payload.data.minPrice;
      state.maxPrice = payload.data.maxPrice;
      state.minYear = payload.data.minYear;
      state.maxYear = payload.data.maxYear;
      state.isLoadingCarFilterScheme = false;
    });
    builder.addCase(getCarFilterSchemeAsync.rejected, (state) => {
      state.isLoadingCarFilterScheme = false;
    });
    builder.addCase(postManufactureAsync.fulfilled, (state, { payload }) => {
      state.manufactures.push(payload.data);
      showToast.showSuccess("New Manufacture is added!");
    });
    builder.addCase(postCarTypeAsync.fulfilled, (state, { payload }) => {
      state.carTypes.push(payload.data);
      showToast.showSuccess("New car type is added!");
    });
  },
});

export default filterSchemeSlice.reducer;
