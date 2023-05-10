import { IFilteredCarTuneRequest, IFilteredTuneRequest } from "@/data-transfer-objects";
import { tuneService } from "@/services";
import { customAxios } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestTunes = createAsyncThunk("tune/getLatestTunes", async (amount: number) => {
  return tuneService.getLatestTunes(amount);
});

export const getTunes = createAsyncThunk(
  "tune/getAll",
  async ({ page, pageSize, searchQuery }: IFilteredTuneRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return tuneService.getTunes({
      page,
      pageSize,
      searchQuery,
      cancelToken: cancelationToken.token,
    });
  },
);

export const getTunesByCarId = createAsyncThunk(
  "tune/getAllByCarId",
  async ({ page, pageSize, searchQuery, carId }: IFilteredCarTuneRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return tuneService.getTunesByCarId({
      page,
      pageSize,
      searchQuery,
      carId,
      cancelToken: cancelationToken.token,
    });
  },
);
