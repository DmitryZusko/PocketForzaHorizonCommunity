import { IGetCarsRequest } from "@/data-transfer-objects/requests/GetCarsRequest";
import carService from "@/services/car-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk(
  "car/getCars",
  async ({ page, pageSize }: IGetCarsRequest) => {
    return carService.getCars({ page, pageSize });
  },
);
