import {
  IFilteredCarDesignRequest,
  IFilteredDesignRequest,
  IGetLatestDesignsRequest,
} from "@/data-transfer-objects";
import { designService } from "@/services";
import { customAxios } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestDesigns = createAsyncThunk(
  "design/getLatestDesigns",
  async ({ page, pageSize, descriptionLimit }: IGetLatestDesignsRequest) => {
    return designService.getLatestDesigns({ page, pageSize, descriptionLimit });
  },
);

export const getDesigns = createAsyncThunk(
  "design/getDesigns",
  async ({ page, pageSize, searchQuery, descriptionLimit }: IFilteredDesignRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return designService.getDesigns({
      page,
      pageSize,
      searchQuery,
      descriptionLimit,
      cancelToken: cancelationToken.token,
    });
  },
);

export const getDesignsByCarId = createAsyncThunk(
  "design/getDesignsByCarId",
  async (
    { page, pageSize, searchQuery, descriptionLimit, carId }: IFilteredCarDesignRequest,
    { signal },
  ) => {
    const cancelationToken = customAxios.getCancelationToken();
    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return designService.getDesignsByCarId({
      page,
      pageSize,
      searchQuery,
      descriptionLimit,
      carId,
      cancelToken: cancelationToken.token,
    });
  },
);
