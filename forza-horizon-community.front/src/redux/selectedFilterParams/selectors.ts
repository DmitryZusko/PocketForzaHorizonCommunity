import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectedFilterParamsStateSelector = ({ selectedFilterParams }: RootState) =>
  selectedFilterParams;

export const selectedFilterParamsSelector = createSelector(
  selectedFilterParamsStateSelector,
  ({
    selectedPriceRange,
    selectedYearRange,
    selectedManufactures,
    selectedCarTypes,
    selectedCountries,
    isOnlyOwned,
  }) => ({
    selectedPriceRange,
    selectedYearRange,
    selectedManufactures,
    selectedCarTypes,
    selectedCountries,
    isOnlyOwned,
  }),
);

export const selectedFilterRangesSelector = createSelector(
  selectedFilterParamsStateSelector,
  ({ selectedPriceRange, selectedYearRange }) => ({
    selectedPriceRange,
    selectedYearRange,
  }),
);

export const isOnlyOwnedSelector = createSelector(
  selectedFilterParamsStateSelector,
  ({ isOnlyOwned }) => ({ isOnlyOwned }),
);
