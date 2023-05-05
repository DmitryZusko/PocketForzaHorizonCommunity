export interface IPaginatedResponse<TEntity> {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  entities: TEntity[];
}
