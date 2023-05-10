import { ICarType } from "@/data-transfer-objects/entities/CarType";
import { IManufacture } from "@/data-transfer-objects/entities/Manufacture";
import { ISimplifiedCar } from "@/data-transfer-objects/entities/SimplifiedCar";
import { IPaginatedRequest } from "@/data-transfer-objects/requests/PaginatedRequest";
import { ICarFilterSchemeResponse } from "@/data-transfer-objects/responses/CarFilterSchemeResponse";
import { IPaginatedResponse } from "@/data-transfer-objects/responses/PaginatedResponse";
import carService from "@/services/car-service";
import carTypeService from "@/services/car-type-service";
import manufactureService from "@/services/manufacture-service";
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
