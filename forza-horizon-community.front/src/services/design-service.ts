import { IDesign, IGetLatestDesignsRequest, IPaginatedResponse } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
import { IAxiosFilteredCarDesignRequest, IAxiosFilteredDesignRequest } from "./types";

const getLatestDesigns = async ({ page, pageSize, descriptionLimit }: IGetLatestDesignsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<IDesign>>("design/GetLastDesigns", {
    params: { page: page, pageSize: pageSize, DescriptionLimit: descriptionLimit },
  });
};

const getDesigns = async ({
  page,
  pageSize,
  searchQuery,
  descriptionLimit,
  cancelToken,
}: IAxiosFilteredDesignRequest) => {
  const axios = customAxios.getAxiosInstance();
  if (searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<IDesign>>("design", {
      cancelToken: cancelToken,
      params: {
        DescriptionLimit: descriptionLimit,
        Page: page,
        PageSize: pageSize,
        SearchQuery: searchQuery,
      },
    });
  }

  return axios.get<IPaginatedResponse<IDesign>>("design", {
    cancelToken: cancelToken,
    params: {
      DescriptionLimit: descriptionLimit,
      Page: page,
      PageSize: pageSize,
    },
  });
};

const getDesignsByCarId = ({
  page,
  pageSize,
  searchQuery,
  descriptionLimit,
  carId,
  cancelToken,
}: IAxiosFilteredCarDesignRequest) => {
  const axios = customAxios.getAxiosInstance();
  if (searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<IDesign>>("design/ByCar", {
      cancelToken: cancelToken,
      params: {
        DescriptionLimit: descriptionLimit,
        Page: page,
        PageSize: pageSize,
        SearchQuery: searchQuery,
        CarId: carId,
      },
    });
  }

  return axios.get<IPaginatedResponse<IDesign>>("design/ByCar", {
    cancelToken: cancelToken,
    params: {
      DescriptionLimit: descriptionLimit,
      Page: page,
      PageSize: pageSize,
      CarId: carId,
    },
  });
};

const designService = { getLatestDesigns, getDesigns, getDesignsByCarId };

export default designService;
