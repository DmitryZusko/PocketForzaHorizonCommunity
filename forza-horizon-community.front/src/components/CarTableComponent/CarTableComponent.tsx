import { ICar } from "@/data-transfer-objects";
import { imageUtil } from "@/utilities";
import {
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
import useCarTableComponent from "./useCarTableComponent";

const CarTableComponent = ({ ...props }) => {
  const {
    currentPage,
    pageSize,
    isLoadingCars,
    cars,
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
    <TableContainer {...props}>
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
          {cars.map((car) => (
            <TableRow key={car.id}>
              <TableCell>
                <Image
                  alt="car"
                  src={imageUtil.addJpgHeader(car.image)}
                  width={defaultCarThumbnailSize.width}
                  height={defaultCarThumbnailSize.height}
                />
              </TableCell>
              <TableCell>
                <Typography variant="body1">{car.manufacture}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{car.model}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{car.year}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{car.price}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{car.type}</Typography>
              </TableCell>
            </TableRow>
          ))}
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
      />
    </TableContainer>
  );
};

export default CarTableComponent;
