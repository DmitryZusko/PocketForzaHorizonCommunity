import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const filterSchemeStateSelector = ({ filterScheme }: RootState) => filterScheme;

export const filterSchemeSelector = createSelector(
  filterSchemeStateSelector,
  ({
    isLoadingManufacture,
    manufactures,
    totalManufactures,
    isLoadingCarTypes,
    carTypes,
    totalCarTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
  }) => ({
    isLoadingManufacture,
    manufactures,
    totalManufactures,
    isLoadingCarTypes,
    carTypes,
    totalCarTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
  }),
);

// export const filterSelectedValuesSelector = createSelector(
//   filterSchemeStateSelector,
//   ({
//     selectedPriceRange,
//     selectedYearRange,
//     selectedManufactures,
//     selectedCarTypes,
//     selectedCountries,
//   }) => ({
//     selectedPriceRange,
//     selectedYearRange,
//     selectedManufactures,
//     selectedCarTypes,
//     selectedCountries,
//   }),
// );

export const carNamesSelector = createSelector(
  filterSchemeStateSelector,
  ({ isLoadingCarNames, carNames }) => ({
    isLoadingCarNames,
    carNames,
  }),
);
