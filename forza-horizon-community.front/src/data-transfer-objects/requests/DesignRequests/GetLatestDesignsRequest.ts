import { IPaginatedRequest } from "@/data-transfer-objects";

export interface IGetLatestDesignsRequest extends IPaginatedRequest {
  descriptionLimit: number;
}
