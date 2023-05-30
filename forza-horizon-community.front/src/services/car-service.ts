import {
  ICar,
  ICarFilterSchemeResponse,
  IPaginatedResponse,
  IPostCarRequest,
  ISimplifiedCar,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
import { IAxiosFilteredCarsRequest, IAxiosFilteredOwndCarsRequest } from "./types";

const getCarsAsync = async (request: IAxiosFilteredCarsRequest) => {
  const axios = await customAxios.getAxiosInstance();

  return axios.get<IPaginatedResponse<ICar>>("car", {
    cancelToken: request.cancelToken,
    params: {
      Page: request.page,
      PageSize: request.pageSize,
      MinPrice: request.minPrice,
      MaxPrice: request.maxPrice,
      MinYear: request.minYear,
      MaxYear: request.maxYear,
      SelectedCountries: request.selectedCountries,
      SelectedManufactures: request.selectedManufactures,
      SelectedCarTypes: request.selectedCarTypes,
    },
  });
};

const getOwnedCarsAsync = async (request: IAxiosFilteredOwndCarsRequest) => {
  const axios = await customAxios.getAxiosInstance();

  return axios.get<IPaginatedResponse<ICar>>("car/ByIds", {
    cancelToken: request.cancelToken,
    params: {
      Page: request.page,
      PageSize: request.pageSize,
      MinPrice: request.minPrice,
      MaxPrice: request.maxPrice,
      MinYear: request.minYear,
      MaxYear: request.maxYear,
      SelectedCountries: request.selectedCountries,
      SelectedManufactures: request.selectedManufactures,
      SelectedCarTypes: request.selectedCarTypes,
      Ids: request.ownedCars,
    },
  });
};

const getCarFilterSchemeAsync = async () => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<ICarFilterSchemeResponse>("car/filterscheme");
};

const getCarNamesAsync = async () => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ISimplifiedCar>>("car/CarNames");
};

const postCarAsync = async (request: IPostCarRequest) => {
  const axios = await customAxios.getAxiosInstance();
  const data = new FormData();
  data.append("carTypeId", request.carTypeId);
  data.append("image", request.image);
  data.append("manufactureId", request.manufactureId);
  data.append("model", request.model);
  data.append("price", request.price.toString());
  data.append("year", request.year.toString());
  return axios.post<ICar>("car", data);
};

const carService = {
  getCarsAsync,
  getOwnedCarsAsync,
  getCarFilterSchemeAsync,
  getCarNamesAsync,
  postCarAsync,
};

export default carService;
