import { defaultAnimationDuration, defaultImageSize } from "@/components/constants";
import { Grow, TableCell, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import { styles } from "./styles";
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
      <Grow in={true} timeout={defaultAnimationDuration}>
        <TableRow>
          {headerCells.map((cell) => (
            <TableCell
              key={cell.lable}
              sortDirection={orderBy === cell.id ? order : false}
              align={cell.lable === "Image" ? "inherit" : "center"}
              width={cell.lable === "Image" ? defaultImageSize.width : "auto"}
            >
              <TableSortLabel
                active={orderBy === cell.id}
                direction={orderBy === cell.id ? order : "asc"}
                onClick={cell.isSortable ? handleSortingClick(cell.id) : undefined}
                sx={styles.sortLabel}
              >
                <Typography variant="textBody" align="center" sx={styles.sortLabelText}>
                  {cell.lable}
                </Typography>
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </Grow>
    </TableHead>
  );
};

export default SortingTableHead;
