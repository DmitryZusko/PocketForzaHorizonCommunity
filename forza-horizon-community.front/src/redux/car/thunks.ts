import { defaultPageSize } from "@/components";
import { IFilteredCarsRequest, IPostCarRequest } from "@/data-transfer-objects";
import { carService } from "@/services";
import { customAxios, showToast } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCarsAsync = createAsyncThunk(
  "car/getCarsAsync",
  async (request: IFilteredCarsRequest, { signal }) => {
    const cancelationToken = customAxios.getCancelationToken();

    signal.addEventListener("abort", () => {
      cancelationToken.cancel();
    });

    return carService.getCarsAsync({
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
    });
  },
);

export const postCarAsync = createAsyncThunk(
  "car/postCarAsync",
  async (request: IPostCarRequest, { dispatch }) => {
    const promise = carService.postCarAsync(request);

    promise.then((r) => {
      if (r.status === 201) {
        showToast.showSuccess("New car is added!");
        dispatch(getCarsAsync({ page: 0, pageSize: defaultPageSize }));
      }
    });
  },
);
