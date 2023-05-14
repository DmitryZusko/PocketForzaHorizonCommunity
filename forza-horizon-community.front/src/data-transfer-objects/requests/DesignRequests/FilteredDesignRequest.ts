import { IPaginatedRequest } from "@/data-transfer-objects";

export interface IFilteredDesignRequest extends IPaginatedRequest {
  searchQuery: string;
  descriptionLimit: number;
}
