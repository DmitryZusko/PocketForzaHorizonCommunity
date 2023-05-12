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

export const carNamesSelector = createSelector(
  filterSchemeStateSelector,
  ({ isLoadingCarNames, carNames }) => ({
    isLoadingCarNames,
    carNames,
  }),
);
