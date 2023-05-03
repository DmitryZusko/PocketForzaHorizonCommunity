import steamService from "@/services/steam-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAchievementStats = createAsyncThunk(
  "gameStatistics/GetAchievementStats",
  async () => {
    return steamService.getAchievementStatistics();
  },
);

export const getCurrentOnline = createAsyncThunk("gameStatistics/getCurrentOnline", async () => {
  return steamService.getCurrentOnlineNumber();
});
