import { IGetAchievementsRequest } from "@/data-transfer-objects";
import { steamService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAchievementStats = createAsyncThunk(
  "gameStatistics/GetAchievementStats",
  async (request: IGetAchievementsRequest) => {
    return steamService.getAchievementStatistics(request);
  },
);

export const getCurrentOnline = createAsyncThunk("gameStatistics/getCurrentOnline", async () => {
  return steamService.getCurrentOnlineNumber();
});
