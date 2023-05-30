import { IPaginatedRequest } from "@/data-transfer-objects";

export interface IFilteredTuneRequest extends IPaginatedRequest {
  searchQuery: string;
}
