import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IFiltetSchemeState } from "../types";
import { getCarFilterScheme, getCarNames, getCarTypes, getManufactures } from "./thunks";

const initialState: IFiltetSchemeState = {
  isLoading: false,
  carTypes: [],
  totalCarTypes: 0,
  manufactures: [],
  totalManufactures: 0,
  minPrice: 0,
  maxPrice: 0,
  minYear: 0,
  maxYear: 0,
  selectedPriceRange: [],
  selectedYearRange: [],
  selectedManufactures: [],
  selectedCarTypes: [],
  selectedCountries: [],
  carNames: [],
};

const filterSchemeSlice = createSlice({
  name: "filterScheme",
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
  extraReducers: (builder) => {
    builder.addCase(getCarTypes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarTypes.fulfilled, (state, { payload }) => {
      state.carTypes = payload.data.entities;
      state.totalCarTypes = payload.data.total;
      state.isLoading = false;
    });
    builder.addCase(getManufactures.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getManufactures.fulfilled, (state, { payload }) => {
      state.manufactures = payload.data.entities;
      state.totalManufactures = payload.data.total;
      state.isLoading = false;
    });
    builder.addCase(getCarFilterScheme.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarFilterScheme.fulfilled, (state, { payload }) => {
      state.minPrice = payload.data.minPrice;
      state.maxPrice = payload.data.maxPrice;
      state.minYear = payload.data.minYear;
      state.maxYear = payload.data.maxYear;
    });
    builder.addCase(getCarNames.fulfilled, (state, { payload }) => {
      state.carNames = payload.data.entities;
    });
  },
});

export const {
  setSelectedPriceRange,
  setSelectedYearRange,
  setSelectedManufactures,
  setSelectedCarTypes,
  setSelectedCountries,
} = filterSchemeSlice.actions;

export default filterSchemeSlice.reducer;
