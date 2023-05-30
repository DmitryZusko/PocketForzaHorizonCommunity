import { TableHeadProps } from "@mui/material";

export type OrderDirection = "asc" | "desc";

export interface IHeaderCell<TEntity> {
  id: keyof TEntity;
  lable: string;
  isSortable: boolean;
}

export interface ISortingTableHeaderHook<TEntity> {
  order: OrderDirection;
  orderBy: keyof TEntity;
  setOrder: (order: OrderDirection) => void;
  setOrderBy: (property: keyof TEntity) => void;
  sortEntities: (newOrder: OrderDirection, newProperty: keyof TEntity) => void;
}

export interface ISortingTableHeaderProps<TEntity> extends ISortingTableHeaderHook<TEntity> {
  headerCells: IHeaderCell<TEntity>[];
  props?: TableHeadProps;
}
