import { ICar } from "@/data-transfer-objects/entities/Car";
import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { getCars, paginatedCarsSelector, setSortedCars } from "@/redux/car";
import React, { useCallback, useEffect, useState } from "react";
import { OrderDirection } from "./components/SortingTableHead/SortingTableHead";

export default function useCarTableComponent() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [orderBy, setOrderBy] = useState<keyof ICar>("manufacture");
  const [order, setOrder] = useState<OrderDirection>("asc");
  const { isLoadingCars, cars, totalEntities } = useAppSelector(paginatedCarsSelector);

  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    dispatch(getCars({ page: currentPage, pageSize: pageSize }));
  }, [currentPage, pageSize, dispatch]);

  const handleSorting = useCallback(
    (newOrder: OrderDirection, newProperty: keyof ICar) => {
      dispatch(setSortedCars({ order: newOrder, orderBy: newProperty }));
    },
    [dispatch],
  );

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  return {
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
  };
}
