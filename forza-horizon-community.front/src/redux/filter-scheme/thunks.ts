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
  async (request: IPaginatedRequest, { getState, rejectWithValue }) => {
    const manufactures = getState().filterScheme.manufactures;
    if (manufactures.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
    return manufactureService.getManufacturesAsync(request);
  },
);

export const getCarTypesAsync = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<ICarType>, any>,
  IPaginatedRequest,
  { state: RootState }
>("carType/getCarTypesAsync", async (request: IPaginatedRequest, { getState, rejectWithValue }) => {
  const carTypes = getState().filterScheme.carTypes;
  if (carTypes.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
  return carTypeService.getCarTypesAsync(request);
});

export const getCarFilterSchemeAsync = createAsyncThunk<
  AxiosResponse<ICarFilterSchemeResponse, any>,
  void,
  { state: RootState }
>("car/getCarFilterSchemeAsync", async (_, { getState, rejectWithValue }) => {
  const filterScheme = getState().filterScheme;
  const minMaxValues = [
    filterScheme.minPrice,
    filterScheme.maxPrice,
    filterScheme.minYear,
    filterScheme.maxYear,
  ];
  if (minMaxValues.every((value) => value !== 0))
    return rejectWithValue(stateAlreadyUploadedMessage);
  return carService.getCarFilterSchemeAsync();
});

export const getCarNamesAsync = createAsyncThunk<
  AxiosResponse<IPaginatedResponse<ISimplifiedCar>, any>,
  void,
  { state: RootState }
>("car/CarNames", async (_, { getState, rejectWithValue }) => {
  const carNames = getState().filterScheme.carNames;
  if (carNames.length > 0) return rejectWithValue(stateAlreadyUploadedMessage);
  return carService.getCarNamesAsync();
});

export const postManufactureAsync = createAsyncThunk(
  "filterScheme/postManufactureAsync",
  async (request: IPostManufactureRequest) => {
    return manufactureService.postManufactureAsync(request);
  },
);

export const postCarTypeAsync = createAsyncThunk(
  "filterScheme/postCarTypeAsync",
  async (request: IPostCarTypeRequest) => {
    return carTypeService.postCarTypeAsync(request);
  },
);
