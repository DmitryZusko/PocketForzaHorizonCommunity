import {
  filterSchemeSelector,
  getCarFilterScheme,
  getCarTypes,
  getManufactures,
  selectedFilterRangesSelector,
  setCarPage,
  setSelectedCarTypes,
  setSelectedCountries,
  setSelectedManufactures,
  setSelectedPriceRange,
  setSelectedYearRange,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback, useEffect } from "react";

export const useFilterCarTableComponent = () => {
  const {
    isLoadingManufacture,
    manufactures,
    totalManufactures,
    isLoadingCarTypes,
    carTypes,
    totalCarTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
  } = useAppSelector(filterSchemeSelector);

  const { selectedPriceRange, selectedYearRange } = useAppSelector(selectedFilterRangesSelector);

  const dispatch = useAppDispatch();

  const loadParameters = useCallback(() => {
    dispatch(getManufactures({}));
    dispatch(getCarTypes({}));
    dispatch(getCarFilterScheme());
  }, [dispatch]);

  const distinctSelector = (value: any, index: number, array: any[]) => {
    return array.indexOf(value) === index;
  };

  const countries = useCallback(() => {
    return manufactures.map((item) => item.country).filter(distinctSelector);
  }, [manufactures]);

  const handlePriceRangeChange = useCallback(
    (event: Event | null, newRange: number | number[]) => {
      dispatch(setSelectedPriceRange(newRange as number[]));
      dispatch(setCarPage(0));
    },
    [dispatch],
  );

  const handleYearRangeChange = useCallback(
    (event: Event | null, newRange: number | number[]) => {
      dispatch(setSelectedYearRange(newRange as number[]));
      dispatch(setCarPage(0));
    },
    [dispatch],
  );

  const handleSelectedManufacture = useCallback(
    (newManufactures: string[]) => {
      dispatch(setSelectedManufactures(newManufactures));
      dispatch(setCarPage(0));
    },
    [dispatch],
  );

  const handleSelectedCarType = useCallback(
    (newCarTypes: string[]) => {
      dispatch(setSelectedCarTypes(newCarTypes));
      dispatch(setCarPage(0));
    },
    [dispatch],
  );

  const handleSelectedCountry = useCallback(
    (newcCountries: string[]) => {
      dispatch(setSelectedCountries(newcCountries));
      dispatch(setCarPage(0));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(setSelectedPriceRange([minPrice, maxPrice]));
  }, [minPrice, maxPrice, dispatch]);

  useEffect(() => {
    dispatch(setSelectedYearRange([minYear, maxYear]));
  }, [minYear, maxYear, dispatch]);

  useEffect(() => {
    loadParameters();
  }, [loadParameters]);

  return {
    isLoadingManufacture,
    manufactures,
    isLoadingCarTypes,
    carTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    selectedPriceRange,
    selectedYearRange,
    countries,
    handlePriceRangeChange,
    handleYearRangeChange,
    handleSelectedManufacture,
    handleSelectedCarType,
    handleSelectedCountry,
  };
};
