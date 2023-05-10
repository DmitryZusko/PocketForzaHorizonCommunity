import { useCallback } from "react";
import { ISortingTableHeaderHook } from "./types";

const useSortingTableHead = <TEntity>({
  order,
  orderBy,
  setOrder,
  setOrderBy,
  sortEntities,
}: ISortingTableHeaderHook<TEntity>) => {
  const handleSortingClick = useCallback(
    (property: keyof TEntity) => () => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
      sortEntities(isAsc ? "desc" : "asc", property);
    },
    [order, orderBy, setOrder, setOrderBy, sortEntities],
  );

  return { handleSortingClick };
};

export default useSortingTableHead;
