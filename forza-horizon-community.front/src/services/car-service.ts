import {
  ICar,
  ICarFilterSchemeResponse,
  IPaginatedResponse,
  ISimplifiedCar,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
import { IAxiosFilteredCarsRequest } from "./types";

const getCars = ({
  page,
  pageSize,
  minPrice,
  maxPrice,
  minYear,
  maxYear,
  selectedCountries,
  selectedManufactures,
  selectedCarTypes,
  cancelToken,
}: IAxiosFilteredCarsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICar>>("car", {
    cancelToken: cancelToken,
    params: {
      Page: page,
      PageSize: pageSize,
      MinPrice: minPrice,
      MaxPrice: maxPrice,
      MinYear: minYear,
      MaxYear: maxYear,
      SelectedCountries: selectedCountries,
      SelectedManufactures: selectedManufactures,
      SelectedCarTypes: selectedCarTypes,
    },
  });
};

const getCarFilterScheme = async () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<ICarFilterSchemeResponse>("car/filterscheme");
};

const getCarNames = async () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ISimplifiedCar>>("car/CarNames");
};

const carService = { getCars, getCarFilterScheme, getCarNames };

export default carService;
