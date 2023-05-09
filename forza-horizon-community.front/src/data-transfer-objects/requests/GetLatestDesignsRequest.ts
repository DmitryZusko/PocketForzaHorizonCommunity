import { IPaginatedRequest } from "./PaginatedRequest";

export interface IGetLatestDesignsRequest extends IPaginatedRequest {
  descriptionLimit: number;
}
