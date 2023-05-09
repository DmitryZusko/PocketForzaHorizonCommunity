import { ICar } from "@/data-transfer-objects/entities/Car";
import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { getCars, paginatedCarsSelector, setPage, setPageSize, setSortedCars } from "@/redux/car";
import { selectedFilterParamsSelector } from "@/redux/selectedFilterParams";
import React, { useCallback, useEffect, useState } from "react";
import { OrderDirection } from "./components/SortingTableHead/SortingTableHead";

export default function useCarTableComponent() {
  const [orderBy, setOrderBy] = useState<keyof ICar>("manufacture");
  const [order, setOrder] = useState<OrderDirection>("asc");
  const {
    isLoadingCars,
    cars,
    totalEntities,
    page: currentPage,
    pageSize,
  } = useAppSelector(paginatedCarsSelector);

  const {
    selectedPriceRange,
    selectedYearRange,
    selectedManufactures,
    selectedCarTypes,
    selectedCountries,
  } = useAppSelector(selectedFilterParamsSelector);

  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    return dispatch(
      getCars({
        page: currentPage,
        pageSize,
        minPrice: selectedPriceRange[0],
        maxPrice: selectedPriceRange[1],
        minYear: selectedYearRange[0],
        maxYear: selectedYearRange[1],
        selectedCountries: selectedCountries.toLocaleString(),
        selectedManufactures: selectedManufactures.toLocaleString(),
        selectedCarTypes: selectedCarTypes.toLocaleString(),
      }),
    );
  }, [
    currentPage,
    pageSize,
    selectedPriceRange,
    selectedYearRange,
    selectedCountries,
    selectedManufactures,
    selectedCarTypes,
    dispatch,
  ]);

  const handleSorting = useCallback(
    (newOrder: OrderDirection, newProperty: keyof ICar) => {
      dispatch(setSortedCars({ order: newOrder, orderBy: newProperty }));
    },
    [dispatch],
  );

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  useEffect(() => {
    let isDispatched: boolean;
    var dispatchPromise = loadCars();
    dispatchPromise.then(() => (isDispatched = true));
    return () => {
      if (!isDispatched) dispatchPromise.abort();
    };
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
