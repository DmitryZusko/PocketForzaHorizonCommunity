import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectedFilterParamsState = ({ selectedFilterParams }: RootState) =>
  selectedFilterParams;

export const selectedFilterParamsSelector = createSelector(
  selectedFilterParamsState,
  ({
    selectedPriceRange,
    selectedYearRange,
    selectedManufactures,
    selectedCarTypes,
    selectedCountries,
  }) => ({
    selectedPriceRange,
    selectedYearRange,
    selectedManufactures,
    selectedCarTypes,
    selectedCountries,
  }),
);

export const selectedFilterRangesSelector = createSelector(
  selectedFilterParamsState,
  ({ selectedPriceRange, selectedYearRange }) => ({
    selectedPriceRange,
    selectedYearRange,
  }),
);
