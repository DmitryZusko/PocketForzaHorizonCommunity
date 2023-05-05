import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { ISortingTableHeaderProps } from "../../types";
import useSortingTableHead from "./useSortingTableHead";

export type OrderDirection = "asc" | "desc";

export default function SortingTableHead<TEntity>({
  headerCells,
  order,
  orderBy,
  setOrder,
  setOrderBy,
  sortEntities,
}: ISortingTableHeaderProps<TEntity>) {
  const { handleSortingClick } = useSortingTableHead<TEntity>({
    order,
    orderBy,
    setOrder,
    setOrderBy,
    sortEntities,
  });
  return (
    <TableHead>
      <TableRow>
        {headerCells.map((cell) => (
          <TableCell key={cell.lable} sortDirection={orderBy === cell.id ? order : false}>
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : "asc"}
              onClick={cell.isSortable ? handleSortingClick(cell.id) : undefined}
            >
              {cell.lable}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
