import { IHeaderCell } from "@/components";

export type OrderDirection = "asc" | "desc";

export interface ISortingTableHeaderProps<TEntity> extends ISortingTableHeaderHook<TEntity> {
  headerCells: IHeaderCell<TEntity>[];
}

export interface ISortingTableHeaderHook<TEntity> {
  order: OrderDirection;
  orderBy: keyof TEntity;
  setOrder: (order: OrderDirection) => void;
  setOrderBy: (property: keyof TEntity) => void;
  sortEntities: (newOrder: OrderDirection, newProperty: keyof TEntity) => void;
}
