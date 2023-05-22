import {
  ICarFilterSchemeResponse,
  ICarType,
  IManufacture,
  IPaginatedRequest,
  IPaginatedResponse,
  IPostCarTypeRequest,
  IPostManufactureRequest,
  ISimplifiedCar,
} from "@/data-transfer-objects";
import { carService, carTypeService, manufactureService } from "@/services";
import { AddCarType, AddManufactureMessage, errorHandler } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { RootState } from "../store";
import { stateAlreadyUploadedMessage } from "./constants";

export const getManufacturesAsync = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<IManufacture>, any>,
  IPaginatedRequest,
  { state: RootState }
>(
  "manufacture/getManufacturesAsync",
  async (request: IPaginatedRequest, { getState, rejectWithValue, dispatch }) => {
    const manufactures = getState().filterScheme.manufactures;
    if (manufactures.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
    return errorHandler.handleError(
      () => manufactureService.getManufacturesAsync(request),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<IManufacture>, any>>;
  },
);

export const getCarTypesAsync = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<ICarType>, any>,
  IPaginatedRequest,
  { state: RootState }
>(
  "carType/getCarTypesAsync",
  async (request: IPaginatedRequest, { getState, rejectWithValue, dispatch }) => {
    const carTypes = getState().filterScheme.carTypes;
    if (carTypes.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
    return errorHandler.handleError(
      () => carTypeService.getCarTypesAsync(request),
      dispatch,
    ) as Promise<AxiosResponse<IPaginatedResponse<ICarType>, any>>;
  },
);

export const getCarFilterSchemeAsync = createAsyncThunk<
  AxiosResponse<ICarFilterSchemeResponse, any>,
  void,
  { state: RootState }
>("car/getCarFilterSchemeAsync", async (_, { getState, rejectWithValue, dispatch }) => {
  const filterScheme = getState().filterScheme;
  const minMaxValues = [
    filterScheme.minPrice,
    filterScheme.maxPrice,
    filterScheme.minYear,
    filterScheme.maxYear,
  ];
  if (minMaxValues.every((value) => value !== 0)) {
    return rejectWithValue(stateAlreadyUploadedMessage);
  }
  return errorHandler.handleError(() => carService.getCarFilterSchemeAsync(), dispatch) as Promise<
    AxiosResponse<ICarFilterSchemeResponse, any>
  >;
});

export const getCarNamesAsync = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<ISimplifiedCar>, any>,
  void,
  { state: RootState }
>("car/CarNames", async (_, { getState, rejectWithValue, dispatch }) => {
  const carNames = getState().filterScheme.carNames;
  if (carNames.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
  return errorHandler.handleError(() => carService.getCarNamesAsync(), dispatch) as Promise<
    AxiosResponse<IPaginatedResponse<ISimplifiedCar>, any>
  >;
});

export const postManufactureAsync = createAsyncThunk(
  "filterScheme/postManufactureAsync",
  async (request: IPostManufactureRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => manufactureService.postManufactureAsync(request),
      dispatch,
      true,
      true,
      AddManufactureMessage,
    ) as Promise<AxiosResponse<IManufacture, any>>;
  },
);

export const postCarTypeAsync = createAsyncThunk(
  "filterScheme/postCarTypeAsync",
  async (request: IPostCarTypeRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => carTypeService.postCarTypeAsync(request),
      dispatch,
      true,
      true,
      AddCarType,
    ) as Promise<AxiosResponse<ICarType, any>>;
  },
);
