export interface IHeaderCell<TEntity> {
  id: keyof TEntity;
  lable: string;
  isSortable: boolean;
}
