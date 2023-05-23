import {
  IDesign,
  IDesignFullInfo,
  IFilteredCarDesignRequest,
  IFilteredDesignRequest,
  IGetByIdRequest,
  IGetLatestDesignsRequest,
  IPaginatedResponse,
  IPostDesignRequest,
} from "@/data-transfer-objects";
import { designService } from "@/services";
import { AddDesignMessage, customAxios, errorHandler } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getLatestDesignsAsync = createAsyncThunk(
  "design/getLatestDesignsAsync",
  async (request: IGetLatestDesignsRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => designService.getLatestDesignsAsync(request),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<IDesign>, any>>;
  },
);

export const getDesignsAsync = createAsyncThunk(
  "design/getDesignsAsync",
  async (request: IFilteredDesignRequest, { signal, dispatch }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return errorHandler.handleError(
      () =>
        designService.getDesignsAsync({
          page: request.page,
          pageSize: request.pageSize,
          searchQuery: request.searchQuery,
          descriptionLimit: request.descriptionLimit,
          cancelToken: cancelationToken.token,
        }),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<IDesign>, any>>;
  },
);

export const getDesignsByCarId = createAsyncThunk(
  "design/getDesignsByCarId",
  async (request: IFilteredCarDesignRequest, { signal, dispatch }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return errorHandler.handleError(
      () =>
        designService.getDesignsByCarId({
          page: request.page,
          pageSize: request.pageSize,
          searchQuery: request.searchQuery,
          descriptionLimit: request.descriptionLimit,
          carId: request.carId,
          cancelToken: cancelationToken.token,
        }),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<IDesign>, any>>;
  },
);

export const getDesignById = createAsyncThunk(
  "design/getByIdAsync",
  async (request: IGetByIdRequest, { dispatch }) => {
    return errorHandler.handleError(() => designService.getByIdAsync(request), dispatch) as Promise<
      AxiosResponse<IDesignFullInfo, any>
    >;
  },
);

export const postDesignAsync = createAsyncThunk(
  "design/getDesignById",
  async (request: IPostDesignRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => designService.postDesignAsync(request),
      dispatch,
      true,
      true,
      AddDesignMessage,
    ) as Promise<AxiosResponse<any, any>>;
  },
);
