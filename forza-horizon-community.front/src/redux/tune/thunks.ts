import {
  IFilteredCarTuneRequest,
  IFilteredTuneRequest,
  IGetByIdRequest,
  IPaginatedResponse,
  ITune,
  ITuneFullInfo,
} from "@/data-transfer-objects";
import { tuneService } from "@/services";
import { customAxios, errorHandler } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getLatestTunesAsync = createAsyncThunk(
  "tune/getLatestTunesAsync",
  async (amount: number, { dispatch }) => {
    return errorHandler.handleError(
      () => tuneService.getLatestTunesAsync(amount),
      dispatch,
    ) as Promise<AxiosResponse<ITune[], any>>;
  },
);

export const getTunesAsync = createAsyncThunk(
  "tune/getAll",
  async (request: IFilteredTuneRequest, { signal, dispatch }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return errorHandler.handleError(
      () =>
        tuneService.getTunesAsync({
          page: request.page,
          pageSize: request.pageSize,
          searchQuery: request.searchQuery,
          cancelToken: cancelationToken.token,
        }),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<ITune>, any>>;
  },
);

export const getTunesByCarIdAsync = createAsyncThunk(
  "tune/getAllByCarId",
  async (request: IFilteredCarTuneRequest, { signal, dispatch }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return errorHandler.handleError(
      () =>
        tuneService.getTunesByCarIdAsync({
          page: request.page,
          pageSize: request.pageSize,
          searchQuery: request.searchQuery,
          carId: request.carId,
          cancelToken: cancelationToken.token,
        }),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<ITune>, any>>;
  },
);

export const getTuneById = createAsyncThunk(
  "tune/getTuneById",
  async (request: IGetByIdRequest, { dispatch }) => {
    return errorHandler.handleError(() => tuneService.getByIdAsync(request), dispatch) as Promise<
      AxiosResponse<ITuneFullInfo, any>
    >;
  },
);
