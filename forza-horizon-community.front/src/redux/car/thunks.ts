import { defaultPageSize } from "@/components";
import {
  ICar,
  IFilteredCarsRequest,
  IFilteredOwndCarsRequest,
  IPaginatedResponse,
  IPostCarRequest,
} from "@/data-transfer-objects";
import { carService } from "@/services";
import { AddCarMessage, customAxios, errorHandler, NewCarAdded, toastHandler } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getCarsAsync = createAsyncThunk(
  "car/getCarsAsync",
  async (request: IFilteredCarsRequest, { signal, dispatch }) => {
    const cancelationToken = customAxios.getCancelationToken();

    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return errorHandler.handleError(
      () =>
        carService.getCarsAsync({
          page: request.page,
          pageSize: request.pageSize,
          minPrice: request.minPrice,
          maxPrice: request.maxPrice,
          minYear: request.minYear,
          maxYear: request.maxYear,
          selectedCountries: request.selectedCountries,
          selectedCarTypes: request.selectedCarTypes,
          selectedManufactures: request.selectedManufactures,
          cancelToken: cancelationToken.token,
        }),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<ICar>, any>>;
  },
);

export const getOwnedCarsAsync = createAsyncThunk(
  "car/getOwnedCarsAsync",
  async (request: IFilteredOwndCarsRequest, { signal, dispatch }) => {
    const cancelationToken = customAxios.getCancelationToken();

    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return errorHandler.handleError(
      () =>
        carService.getOwnedCarsAsync({
          page: request.page,
          pageSize: request.pageSize,
          minPrice: request.minPrice,
          maxPrice: request.maxPrice,
          minYear: request.minYear,
          maxYear: request.maxYear,
          selectedCountries: request.selectedCountries,
          selectedCarTypes: request.selectedCarTypes,
          selectedManufactures: request.selectedManufactures,
          ownedCars: request.ownedCars,
          cancelToken: cancelationToken.token,
        }),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<ICar>, any>>;
  },
);

export const postCarAsync = createAsyncThunk(
  "car/postCarAsync",
  async (request: IPostCarRequest, { dispatch }) => {
    const promise = errorHandler.handleError(
      () => carService.postCarAsync(request),
      dispatch,
      true,
      true,
      AddCarMessage,
    );

    promise.then((r) => {
      if (r?.status === 201) {
        toastHandler.showSuccess(NewCarAdded);
        dispatch(getCarsAsync({ page: 0, pageSize: defaultPageSize }));
      }
    });
  },
);
