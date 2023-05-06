import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { setPage } from "@/redux/car";
import {
  filterSchemeSelector,
  filterSelectedValuesSelector,
  getCarFilterScheme,
  getCarTypes,
  getManufactures,
  setSelectedCarTypes,
  setSelectedCountries,
  setSelectedManufactures,
  setSelectedPriceRange,
  setSelectedYearRange,
} from "@/redux/filter-scheme";
import { useCallback, useEffect } from "react";

export default function useFilterCarTableComponent() {
  const { isLoading, manufactures, carTypes, minPrice, maxPrice, minYear, maxYear } =
    useAppSelector(filterSchemeSelector);

  const dispatch = useAppDispatch();

  const { selectedPriceRange, selectedYearRange } = useAppSelector(filterSelectedValuesSelector);

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
      dispatch(setPage(0));
    },
    [dispatch],
  );

  const handleYearRangeChange = useCallback(
    (event: Event | null, newRange: number | number[]) => {
      dispatch(setSelectedYearRange(newRange as number[]));
      dispatch(setPage(0));
    },
    [dispatch],
  );

  const handleSelectedManufacture = useCallback(
    (newManufactures: string[]) => {
      dispatch(setSelectedManufactures(newManufactures));
      dispatch(setPage(0));
    },
    [dispatch],
  );

  const handleSelectedCarType = useCallback(
    (newCarTypes: string[]) => {
      dispatch(setSelectedCarTypes(newCarTypes));
      dispatch(setPage(0));
    },
    [dispatch],
  );

  const handleSelectedCountry = useCallback(
    (newcCountries: string[]) => {
      dispatch(setSelectedCountries(newcCountries));
      dispatch(setPage(0));
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
    isLoading,
    manufactures,
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
}
