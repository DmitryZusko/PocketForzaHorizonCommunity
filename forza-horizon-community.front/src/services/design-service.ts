import customAxios from "@/utilities/custom-axios";

const getLatestDesigns = async (amount: number) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get("design/GetLastDesigns", { params: { DesignsAmount: amount } });
};

const designService = { getLatestDesigns };

export default designService;
