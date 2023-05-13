import {
  ICarFilterSchemeResponse,
  ICarType,
  IManufacture,
  IPaginatedRequest,
  IPaginatedResponse,
  IPostManufactureRequest,
  ISimplifiedCar,
} from "@/data-transfer-objects";
import { carService, carTypeService, manufactureService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { RootState } from "../store";
import { stateAlreadyUploadedMessage } from "./constants";

export const getManufactures = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<IManufacture>, any>,
  IPaginatedRequest,
  { state: RootState }
>(
  "manufacture/getManufactures",
  async ({ page, pageSize }: IPaginatedRequest, { getState, rejectWithValue }) => {
    const manufactures = getState().filterScheme.manufactures;
    if (manufactures.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
    return manufactureService.getManufactures(page, pageSize);
  },
);

export const getCarTypes = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<ICarType>, any>,
  IPaginatedRequest,
  { state: RootState }
>(
  "carType/getCarTypes",
  async ({ page, pageSize }: IPaginatedRequest, { getState, rejectWithValue }) => {
    const carTypes = getState().filterScheme.carTypes;
    if (carTypes.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
    return carTypeService.getCarTypes({ page, pageSize });
  },
);

export const getCarFilterScheme = createAsyncThunk<
  AxiosResponse<ICarFilterSchemeResponse, any>,
  void,
  { state: RootState }
>("car/getCarFilterScheme", async (_, { getState, rejectWithValue }) => {
  const filterScheme = getState().filterScheme;
  const minMaxValues = [
    filterScheme.minPrice,
    filterScheme.maxPrice,
    filterScheme.minYear,
    filterScheme.maxYear,
  ];
  if (minMaxValues.every((value) => value !== 0))
    return rejectWithValue(stateAlreadyUploadedMessage);
  return carService.getCarFilterScheme();
});

export const getCarNames = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<ISimplifiedCar>, any>,
  void,
  { state: RootState }
>("car/CarNames", async (_, { getState, rejectWithValue }) => {
  const carNames = getState().filterScheme.carNames;
  if (carNames.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
  return carService.getCarNames();
});

export const postManufacture = createAsyncThunk(
  "filterScheme/postManufacture",
  async ({ name, country }: IPostManufactureRequest) => {
    return manufactureService.postManufacture({ name, country });
  },
);
