import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const modalStateSelector = ({ modal }: RootState) => modal;

export const addManufactureModalSelector = createSelector(
  modalStateSelector,
  ({ isAddManufactureOpen }) => ({ isAddManufactureOpen }),
);

export const addCarTypeModalSelector = createSelector(
  modalStateSelector,
  ({ isAddCarTypeOpen }) => ({
    isAddCarTypeOpen,
  }),
);

export const addCarModalSelector = createSelector(modalStateSelector, ({ isAddCarOpen }) => ({
  isAddCarOpen,
}));
