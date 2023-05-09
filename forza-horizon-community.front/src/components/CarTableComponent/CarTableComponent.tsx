import { ICar } from "@/data-transfer-objects/entities/Car";
import imageConverter from "@/utilities/imageConverter";
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
import { headerCells } from "./components/constants";
import SortingTableHead from "./components/SortingTableHead/SortingTableHead";
import useCarTableComponent from "./useCarTableComponent";

export default function CarTableComponent({ ...props }) {
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
                  src={imageConverter.addJpgHeader(car.image)}
                  width={300}
                  height={300}
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
        rowsPerPageOptions={[1, 5, 10, 25, { value: totalEntities, label: "All" }]}
        count={totalEntities}
        page={currentPage}
        rowsPerPage={pageSize}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handlePageSizeChange}
      />
    </TableContainer>
  );
}
