import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IModalState } from "../types";

const initialState: IModalState = {
  isAddManufactureOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsAddManufactureOpen: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isAddManufactureOpen = payload;
    },
  },
});

export const { setIsAddManufactureOpen } = modalSlice.actions;

export default modalSlice.reducer;
