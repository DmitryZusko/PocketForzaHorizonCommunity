import { ICar } from "@/data-transfer-objects";
import {
  getCars,
  paginatedCarsSelector,
  selectedFilterParamsSelector,
  setCarPage,
  setCarPageSize,
  setSortedCars,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { OrderDirection } from "./components";

const useCarTableComponent = () => {
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

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    dispatch(setCarPage(newPage));
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setCarPageSize(parseInt(event.target.value, 10)));
    dispatch(setCarPage(0));
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
    isTablet,
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
};

export default useCarTableComponent;
