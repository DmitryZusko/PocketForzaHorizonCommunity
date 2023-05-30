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
    isLoadingCarFilterScheme,
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
    isLoadingCarFilterScheme,
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

export const manufacturesSelector = createSelector(
  filterSchemeStateSelector,
  ({ isLoadingManufacture, manufactures, totalManufactures }) => ({
    isLoadingManufacture,
    manufactures,
    totalManufactures,
  }),
);

export const carTypesSelector = createSelector(
  filterSchemeStateSelector,
  ({ isLoadingCarTypes, carTypes, totalCarTypes }) => ({
    isLoadingCarTypes,
    carTypes,
    totalCarTypes,
  }),
);
