import { defaultPageSize } from "@/components";
import { IFilteredCarsRequest, IPostCarRequest } from "@/data-transfer-objects";
import { carService } from "@/services";
import { customAxios, showToast } from "@/utilities";
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

export const postCar = createAsyncThunk(
  "car/postCar",
  async (request: IPostCarRequest, { dispatch }) => {
    const promise = carService.postCar(request);

    promise.then((r) => {
      if (r.status === 201) {
        showToast.showSuccess("New car is added!");
        dispatch(getCars({ page: 0, pageSize: defaultPageSize }));
      }
    });
  },
);
