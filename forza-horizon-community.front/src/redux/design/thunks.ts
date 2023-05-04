import designService from "@/services/design-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestDesigns = createAsyncThunk(
  "design/getLatestDesigns",
  async (amount: number) => {
    return designService.getLatestDesigns(amount);
  },
);
