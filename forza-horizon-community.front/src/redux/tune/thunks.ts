import {
  IFilteredCarTuneRequest,
  IFilteredTuneRequest,
  IGetByIdRequest,
} from "@/data-transfer-objects";
import { tuneService } from "@/services";
import { customAxios } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestTunesAsync = createAsyncThunk(
  "tune/getLatestTunesAsync",
  async (amount: number) => {
    return tuneService.getLatestTunesAsync(amount);
  },
);

export const getTunesAsync = createAsyncThunk(
  "tune/getAll",
  async (request: IFilteredTuneRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return tuneService.getTunesAsync({
      page: request.page,
      pageSize: request.pageSize,
      searchQuery: request.searchQuery,
      cancelToken: cancelationToken.token,
    });
  },
);

export const getTunesByCarIdAsync = createAsyncThunk(
  "tune/getAllByCarId",
  async (request: IFilteredCarTuneRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return tuneService.getTunesByCarIdAsync({
      page: request.page,
      pageSize: request.pageSize,
      searchQuery: request.searchQuery,
      carId: request.carId,
      cancelToken: cancelationToken.token,
    });
  },
);

export const getTuneById = createAsyncThunk(
  "tune/getTuneById",
  async (request: IGetByIdRequest) => {
    return tuneService.getByIdAsync(request);
  },
);
