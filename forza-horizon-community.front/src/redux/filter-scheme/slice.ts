import { showToast } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import { IFiltetSchemeState } from "../types";
import {
  getCarFilterScheme,
  getCarNames,
  getCarTypes,
  getManufactures,
  postCarType,
  postManufacture,
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
    builder.addCase(getCarTypes.pending, (state) => {
      state.isLoadingCarTypes = true;
    });
    builder.addCase(getCarTypes.fulfilled, (state, { payload }) => {
      state.carTypes = payload.data.entities;
      state.totalCarTypes = payload.data.total;
      state.isLoadingCarTypes = false;
    });
    builder.addCase(getCarTypes.rejected, (state) => {
      state.isLoadingCarTypes = false;
    });
    builder.addCase(getManufactures.pending, (state) => {
      state.isLoadingManufacture = true;
    });
    builder.addCase(getManufactures.fulfilled, (state, { payload }) => {
      state.manufactures = payload.data.entities;
      state.totalManufactures = payload.data.total;
      state.isLoadingManufacture = false;
    });
    builder.addCase(getManufactures.rejected, (state) => {
      state.isLoadingManufacture = false;
    });
    builder.addCase(getCarNames.pending, (state) => {
      state.isLoadingCarNames = true;
    });
    builder.addCase(getCarNames.fulfilled, (state, { payload }) => {
      state.carNames = payload.data.entities;
    });
    builder.addCase(getCarNames.rejected, (state) => {
      state.isLoadingCarNames = true;
    });
    builder.addCase(getCarFilterScheme.pending, (state) => {
      state.isLoadingCarFilterScheme = true;
    });
    builder.addCase(getCarFilterScheme.fulfilled, (state, { payload }) => {
      state.minPrice = payload.data.minPrice;
      state.maxPrice = payload.data.maxPrice;
      state.minYear = payload.data.minYear;
      state.maxYear = payload.data.maxYear;
      state.isLoadingCarFilterScheme = false;
    });
    builder.addCase(getCarFilterScheme.rejected, (state) => {
      state.isLoadingCarFilterScheme = false;
    });
    builder.addCase(postManufacture.fulfilled, (state, { payload }) => {
      state.manufactures.push(payload.data);
      showToast.showSuccess("New Manufacture is added!");
    });
    builder.addCase(postCarType.fulfilled, (state, { payload }) => {
      state.carTypes.push(payload.data);
      showToast.showSuccess("New car type is added!");
    });
  },
});

export default filterSchemeSlice.reducer;
