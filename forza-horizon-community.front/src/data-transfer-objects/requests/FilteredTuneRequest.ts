import { IPaginatedRequest } from "./PaginatedRequest";

export interface IFilteredTuneRequest extends IPaginatedRequest {
  searchQuery: string;
}
