import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const filterSchemeStateSelector = ({ filterScheme }: RootState) => filterScheme;

export const groupSelector = createSelector(
  filterSchemeStateSelector,
  ({ isLoading, manufactures, carTypes, totalManufactures, totalCarTypes }) => ({
    isLoading,
    manufactures,
    carTypes,
    totalManufactures,
    totalCarTypes,
  }),
);

export const filterSchemeSelector = createSelector(
  filterSchemeStateSelector,
  ({
    isLoading,
    manufactures,
    carTypes,
    totalManufactures,
    totalCarTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
  }) => ({
    isLoading,
    manufactures,
    carTypes,
    totalManufactures,
    totalCarTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
  }),
);

export const filterSelectedValuesSelector = createSelector(
  filterSchemeStateSelector,
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

export const carNamesSelector = createSelector(filterSchemeStateSelector, ({ carNames }) => ({
  carNames,
}));
