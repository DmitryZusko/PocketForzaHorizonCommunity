import { IAchivement, IGetAchievementsRequest } from "@/data-transfer-objects";
import { steamService } from "@/services";
import { errorHandler } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getAchievementStats = createAsyncThunk(
  "gameStatistics/GetAchievementStats",
  async (request: IGetAchievementsRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => steamService.getAchievementStatisticsAsync(request),
      dispatch,
    ) as Promise<AxiosResponse<IAchivement[], any>>;
  },
);

export const getCurrentOnline = createAsyncThunk(
  "gameStatistics/getCurrentOnline",
  async (_, { dispatch }) => {
    return errorHandler.handleError(
      () => steamService.getCurrentOnlineNumberAsync(),
      dispatch,
    ) as Promise<AxiosResponse<number, any>>;
  },
);
