import { IGetNewsRequest } from "@/data-transfer-objects";
import { steamService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "news/GetNews",
  async ({ count, maxLength }: IGetNewsRequest) => {
    return steamService.getNews({ count, maxLength });
  },
);
