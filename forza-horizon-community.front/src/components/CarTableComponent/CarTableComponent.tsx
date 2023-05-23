import { ICar } from "@/data-transfer-objects";
import { imageUtil } from "@/utilities";
import {
  Chip,
  CircularProgress,
  Grow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { defaultCarThumbnailSize, defaultRowsPerPageOptions } from "../constants";
import { headerCells, SortingTableHead } from "./components";
import { styles } from "./styles";

import useCarTableComponent from "./useCarTableComponent";

const CarTableComponent = ({ ...props }) => {
  const {
    isTablet,
    currentPage,
    pageSize,
    isLoadingCars,
    maintainedCars,
    totalEntities,
    order,
    orderBy,
    handlePageChange,
    handlePageSizeChange,
    setOrder,
    setOrderBy,
    handleSorting,
  } = useCarTableComponent();

  return (
    <TableContainer {...props} sx={styles.tableContainer}>
      <Table>
        <SortingTableHead<ICar>
          headerCells={headerCells}
          order={order}
          orderBy={orderBy}
          setOrder={setOrder}
          setOrderBy={setOrderBy}
          sortEntities={handleSorting}
        />
        <TableBody>
          {isLoadingCars ? (
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">
                <CircularProgress />
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ) : (
            maintainedCars.map((car) => (
              <Grow key={car.id} in={true} timeout={500}>
                <TableRow>
                  <TableCell>
                    <Image
                      alt="car"
                      src={imageUtil.addJpgHeader(car.image)}
                      width={
                        isTablet
                          ? defaultCarThumbnailSize.width
                          : defaultCarThumbnailSize.width * 0.75
                      }
                      height={
                        isTablet
                          ? defaultCarThumbnailSize.width
                          : defaultCarThumbnailSize.height * 0.75
                      }
                      style={{ objectFit: "cover" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="textBody">{car.manufacture}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="textBody">{car.model}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="textBody">{car.year}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="textBody">{car.price}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="textBody">{car.type}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {car.isOwnByUser && <Chip label="OWNED" variant="outlined" color="primary" />}
                  </TableCell>
                </TableRow>
              </Grow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        component={"div"}
        rowsPerPageOptions={[...defaultRowsPerPageOptions, { value: totalEntities, label: "All" }]}
        count={totalEntities}
        page={currentPage}
        rowsPerPage={pageSize}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handlePageSizeChange}
        sx={styles.tablePagination}
        nextIconButtonProps={{ size: "large", color: "primary" }}
      />
    </TableContainer>
  );
};

export default CarTableComponent;
