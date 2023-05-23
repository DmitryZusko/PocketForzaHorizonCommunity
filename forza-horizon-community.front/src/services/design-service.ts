import {
  IDesign,
  IDesignFullInfo,
  IGetByIdRequest,
  IGetLatestDesignsRequest,
  IPaginatedResponse,
  IPostDesignRequest,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
import { IAxiosFilteredCarDesignRequest, IAxiosFilteredDesignRequest } from "./types";

const getLatestDesignsAsync = async (request: IGetLatestDesignsRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<IDesign>>("design/GetLastDesigns", {
    params: {
      page: request.page,
      pageSize: request.pageSize,
      DescriptionLimit: request.descriptionLimit,
    },
  });
};

const getDesignsAsync = async (request: IAxiosFilteredDesignRequest) => {
  const axios = await customAxios.getAxiosInstance();
  if (request.searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<IDesign>>("design", {
      cancelToken: request.cancelToken,
      params: {
        DescriptionLimit: request.descriptionLimit,
        Page: request.page,
        PageSize: request.pageSize,
        SearchQuery: request.searchQuery,
      },
    });
  }

  return axios.get<IPaginatedResponse<IDesign>>("design", {
    cancelToken: request.cancelToken,
    params: {
      DescriptionLimit: request.descriptionLimit,
      Page: request.page,
      PageSize: request.pageSize,
    },
  });
};

const getDesignsByCarId = async (request: IAxiosFilteredCarDesignRequest) => {
  const axios = await customAxios.getAxiosInstance();
  if (request.searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<IDesign>>("design/ByCar", {
      cancelToken: request.cancelToken,
      params: {
        DescriptionLimit: request.descriptionLimit,
        Page: request.page,
        PageSize: request.pageSize,
        SearchQuery: request.searchQuery,
        CarId: request.carId,
      },
    });
  }

  return axios.get<IPaginatedResponse<IDesign>>("design/ByCar", {
    cancelToken: request.cancelToken,
    params: {
      DescriptionLimit: request.descriptionLimit,
      Page: request.page,
      PageSize: request.pageSize,
      CarId: request.carId,
    },
  });
};

const getAllIdsAsync = async () => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<string[]>("design/Ids");
};

const getByIdAsync = async (request: IGetByIdRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<IDesignFullInfo>("design/info", {
    params: {
      id: request.id,
    },
  });
};

const postDesignAsync = async (request: IPostDesignRequest) => {
  const axios = await customAxios.getAxiosInstance();
  const data = new FormData();
  data.append("title", request.title);
  data.append("forzaShareCode", request.forzaShareCode);
  data.append("authorId", request.authorId);
  data.append("carId", request.carId);
  data.append("thumbnail", request.thumbnail);
  data.append("description", request.description);
  request.gallery?.forEach((image) => data.append("gallery", image));
  return axios.post("design", data);
};

const designService = {
  getLatestDesignsAsync,
  getDesignsAsync,
  getDesignsByCarId,
  getAllIdsAsync,
  getByIdAsync,
  postDesignAsync,
};

export default designService;
