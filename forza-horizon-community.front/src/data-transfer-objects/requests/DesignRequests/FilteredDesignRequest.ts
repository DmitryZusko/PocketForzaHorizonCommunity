import { IPaginatedRequest } from "./PaginatedRequest";

export interface IFilteredDesignRequest extends IPaginatedRequest {
  searchQuery: string;
  descriptionLimit: number;
}
