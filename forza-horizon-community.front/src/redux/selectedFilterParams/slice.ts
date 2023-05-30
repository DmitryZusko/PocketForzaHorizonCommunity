import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, ISelectedFilterParamsState } from "../types";

const initialState: ISelectedFilterParamsState = {
  selectedPriceRange: [],
  selectedYearRange: [],
  selectedManufactures: [],
  selectedCarTypes: [],
  selectedCountries: [],
  isOnlyOwned: false,
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
    setIsOnlyOwned: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isOnlyOwned = payload;
    },
    setDefaultParams: (state, { payload }: ActionWithPayload<ISelectedFilterParamsState>) => {
      state.selectedPriceRange = payload.selectedPriceRange;
      state.selectedYearRange = payload.selectedYearRange;
      state.selectedManufactures = payload.selectedManufactures;
      state.selectedCarTypes = payload.selectedCarTypes;
      state.selectedCountries = payload.selectedCountries;
      state.isOnlyOwned = payload.isOnlyOwned;
    },
  },
});

export const {
  setSelectedPriceRange,
  setSelectedYearRange,
  setSelectedManufactures,
  setSelectedCarTypes,
  setSelectedCountries,
  setIsOnlyOwned,
  setDefaultParams,
} = selectedFilterParamsSlice.actions;

export default selectedFilterParamsSlice.reducer;
