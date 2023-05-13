import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IModalState } from "../types";

const initialState: IModalState = {
  isAddManufactureOpen: false,
  isAddCarTypeOpen: false,
  isAddCarOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsAddManufactureOpen: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isAddManufactureOpen = payload;
    },
    setIsAddCarTypeOpen: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isAddCarTypeOpen = payload;
    },
    setIsAddCarOpen: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isAddCarOpen = payload;
    },
  },
});

export const { setIsAddManufactureOpen, setIsAddCarTypeOpen, setIsAddCarOpen } = modalSlice.actions;

export default modalSlice.reducer;
