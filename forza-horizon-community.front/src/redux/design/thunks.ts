import {
  IFilteredCarDesignRequest,
  IFilteredDesignRequest,
  IGetByIdRequest,
  IGetLatestDesignsRequest,
} from "@/data-transfer-objects";
import { designService } from "@/services";
import { customAxios } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestDesignsAsync = createAsyncThunk(
  "design/getLatestDesignsAsync",
  async (request: IGetLatestDesignsRequest) => {
    return designService.getLatestDesignsAsync(request);
  },
);

export const getDesignsAsync = createAsyncThunk(
  "design/getDesignsAsync",
  async (request: IFilteredDesignRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return designService.getDesignsAsync({
      page: request.page,
      pageSize: request.pageSize,
      searchQuery: request.searchQuery,
      descriptionLimit: request.descriptionLimit,
      cancelToken: cancelationToken.token,
    });
  },
);

export const getDesignsByCarId = createAsyncThunk(
  "design/getDesignsByCarId",
  async (request: IFilteredCarDesignRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return designService.getDesignsByCarId({
      page: request.page,
      pageSize: request.pageSize,
      searchQuery: request.searchQuery,
      descriptionLimit: request.descriptionLimit,
      carId: request.carId,
      cancelToken: cancelationToken.token,
    });
  },
);

export const getDesignById = createAsyncThunk(
  "design/getByIdAsync",
  async (request: IGetByIdRequest) => {
    return designService.getByIdAsync(request);
  },
);
