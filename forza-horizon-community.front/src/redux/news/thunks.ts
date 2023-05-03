import { IGetNewsRequest } from "@/data-transfer-objects/requests/GetNewsRequest";
import steamService from "@/services/steam-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "news/GetNews",
  async ({ count, maxLength }: IGetNewsRequest) => {
    return steamService.getNews({ count, maxLength });
  },
);
