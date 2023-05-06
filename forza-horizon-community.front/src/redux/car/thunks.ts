import { IFilteredCarsRequest } from "@/data-transfer-objects/requests/FilteredCarsRequest";
import carService from "@/services/car-service";
import customAxios from "@/utilities/custom-axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk(
  "car/getCars",
  async (
    {
      page,
      pageSize,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      selectedCountries: selectedCountries,
      selectedCarTypes: selectedCarTypes,
      selectedManufactures: selectedManufactures,
    }: IFilteredCarsRequest,
    { signal },
  ) => {
    const cancelationToken = customAxios.getCancelationToken();

    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });
    return carService.getCars({
      page,
      pageSize,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      selectedCountries: selectedCountries,
      selectedCarTypes: selectedCarTypes,
      selectedManufactures: selectedManufactures,
      cancelToken: cancelationToken.token,
    });
  },
);
