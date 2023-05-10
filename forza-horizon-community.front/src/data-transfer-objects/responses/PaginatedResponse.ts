export interface IPaginatedResponse<TEntity> {
  total: number;
  page: number;
  pageSize: number;
  entities: TEntity[];
}
