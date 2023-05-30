import { ICar } from "@/data-transfer-objects";
import {
  cleanUpCarState,
  getCarsAsync,
  getOwnedCarsAsync,
  paginatedCarsSelector,
  selectedFilterParamsSelector,
  setCarPage,
  setCarPageSize,
  setSortedCars,
  useAppDispatch,
  useAppSelector,
  userSelector,
} from "@/redux";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useCallback, useEffect, useMemo, useState } from "react";
import { OrderDirection } from "./components";

const useCarTableComponent = () => {
  const [orderBy, setOrderBy] = useState<keyof ICar>("manufacture");
  const [order, setOrder] = useState<OrderDirection>("asc");
  const {
    isLoadingEntities,
    entities,
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
    isOnlyOwned,
  } = useAppSelector(selectedFilterParamsSelector);
  const { user } = useAppSelector(userSelector);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const dispatch = useAppDispatch();

  const loadOwnedCars = useCallback(() => {
    return dispatch(
      getOwnedCarsAsync({
        page: currentPage,
        pageSize,
        minPrice: selectedPriceRange[0],
        maxPrice: selectedPriceRange[1],
        minYear: selectedYearRange[0],
        maxYear: selectedYearRange[1],
        selectedCountries: selectedCountries.toLocaleString(),
        selectedManufactures: selectedManufactures.toLocaleString(),
        selectedCarTypes: selectedCarTypes.toLocaleString(),
        ownedCars: user?.ownedCarsByUser.toLocaleString(),
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
    user,
    dispatch,
  ]);

  const loadAllCard = useCallback(() => {
    return dispatch(
      getCarsAsync({
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

  const loadCars = useCallback(() => {
    if (isOnlyOwned) return loadOwnedCars();
    return loadAllCard();
  }, [isOnlyOwned, loadOwnedCars, loadAllCard]);

  const maintainedCars = useMemo(() => {
    return entities.map((car) => {
      if (user?.ownedCarsByUser?.includes(car.id)) {
        const carCopy = { ...car };
        carCopy.isOwnByUser = true;
        return carCopy;
      }
      return car;
    });
  }, [entities, user]);

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

  useEffect(() => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, pageSize]);

  useEffect(() => {
    return () => {
      dispatch(cleanUpCarState());
    };
  }, [dispatch]);
  return {
    isTablet,
    currentPage,
    pageSize,
    isLoadingEntities,
    maintainedCars,
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
