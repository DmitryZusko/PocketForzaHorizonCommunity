import { IGetNewsRequest } from "@/data-transfer-objects";
import { steamService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNewsAsync = createAsyncThunk("news/GetNews", async (request: IGetNewsRequest) => {
  return steamService.getNewsAsync(request);
});
