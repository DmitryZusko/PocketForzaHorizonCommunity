import { IDesign } from "@/data-transfer-objects/entities/Design";
import { IGetLatestDesignsRequest } from "@/data-transfer-objects/requests/GetLatestDesignsRequest";
import { IPaginatedResponse } from "@/data-transfer-objects/responses/PaginatedResponse";
import customAxios from "@/utilities/custom-axios";

const getLatestDesigns = async ({ page, pageSize, descriptionLimit }: IGetLatestDesignsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<IDesign>>("design/GetLastDesigns", {
    params: { pageSize: pageSize, DescriptionLimit: descriptionLimit },
  });
};

const designService = { getLatestDesigns };

export default designService;
