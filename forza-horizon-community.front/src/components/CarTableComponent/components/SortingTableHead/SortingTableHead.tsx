import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { ISortingTableHeaderProps } from "./types";
import useSortingTableHead from "./useSortingTableHead";

const SortingTableHead = <TEntity,>({
  headerCells,
  order,
  orderBy,
  setOrder,
  setOrderBy,
  sortEntities,
  ...props
}: ISortingTableHeaderProps<TEntity>) => {
  const { handleSortingClick } = useSortingTableHead<TEntity>({
    order,
    orderBy,
    setOrder,
    setOrderBy,
    sortEntities,
  });
  return (
    <TableHead {...props}>
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
};

export default SortingTableHead;
