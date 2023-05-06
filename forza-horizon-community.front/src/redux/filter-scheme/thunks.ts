import { IPaginatedRequest } from "@/data-transfer-objects/requests/PaginatedRequest";
import carService from "@/services/car-service";
import carTypeService from "@/services/car-type-service";
import manufactureService from "@/services/manufacture-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getManufactures = createAsyncThunk(
  "manufacture/getManufactures",
  async ({ page, pageSize }: IPaginatedRequest) => {
    return manufactureService.getManufactures(page, pageSize);
  },
);

export const getCarTypes = createAsyncThunk(
  "carType/getCarTypes",
  async ({ page, pageSize }: IPaginatedRequest) => {
    return carTypeService.getCarTypes({ page, pageSize });
  },
);

export const getCarFilterScheme = createAsyncThunk("car/getCarFilterScheme", async () => {
  return carService.getCarFilterScheme();
});
