import { IGetNewsRequest, INewsResponse } from "@/data-transfer-objects";
import { steamService } from "@/services";
import { errorHandler } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getNewsAsync = createAsyncThunk(
  "news/GetNews",
  async (request: IGetNewsRequest, { dispatch }) => {
    return errorHandler.handleError(() => steamService.getNewsAsync(request), dispatch) as Promise<
      AxiosResponse<INewsResponse, any>
    >;
  },
);
