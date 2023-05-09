import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ISelectedFilterParamsState } from "../types";

const initialState: ISelectedFilterParamsState = {
  selectedPriceRange: [],
  selectedYearRange: [],
  selectedManufactures: [],
  selectedCarTypes: [],
  selectedCountries: [],
};

const selectedFilterParamsSlice = createSlice({
  name: "selectedFilterParams",
  initialState,
  reducers: {
    setSelectedPriceRange: (state, { payload }: ActionWithPayload<number[]>) => {
      state.selectedPriceRange = payload;
    },
    setSelectedYearRange: (state, { payload }: ActionWithPayload<number[]>) => {
      state.selectedYearRange = payload;
    },
    setSelectedManufactures: (state, { payload }: ActionWithPayload<string[]>) => {
      state.selectedManufactures = payload;
    },
    setSelectedCarTypes: (state, { payload }: ActionWithPayload<string[]>) => {
      state.selectedCarTypes = payload;
    },
    setSelectedCountries: (state, { payload }: ActionWithPayload<string[]>) => {
      state.selectedCountries = payload;
    },
  },
});

export const {
  setSelectedPriceRange,
  setSelectedYearRange,
  setSelectedManufactures,
  setSelectedCarTypes,
  setSelectedCountries,
} = selectedFilterParamsSlice.actions;

export default selectedFilterParamsSlice.reducer;
