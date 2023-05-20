import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IModalState } from "../types";

const initialState: IModalState = {
  isAddManufactureOpen: false,
  isAddCarTypeOpen: false,
  isAddCarOpen: false,
  isSignInOpen: false,
  isSignUpOpen: false,
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
    setIsSignInOpen: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isSignInOpen = payload;
    },
    setIsSignUpOpen: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isSignUpOpen = payload;
    },
  },
});

export const {
  setIsAddManufactureOpen,
  setIsAddCarTypeOpen,
  setIsAddCarOpen,
  setIsSignInOpen,
  setIsSignUpOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
