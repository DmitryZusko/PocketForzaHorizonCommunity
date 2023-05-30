import {
  filterSchemeSelector,
  getCarFilterSchemeAsync,
  getCarTypesAsync,
  getManufacturesAsync,
  isOnlyOwnedSelector,
  selectedFilterRangesSelector,
  setCarPage,
  setDefaultParams,
  setIsOnlyOwned,
  setSelectedCarTypes,
  setSelectedCountries,
  setSelectedManufactures,
  setSelectedPriceRange,
  setSelectedYearRange,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useTheme } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { styles } from "./styles";

export const useFilterCarTableComponent = () => {
  const {
    isLoadingManufacture,
    manufactures,
    isLoadingCarTypes,
    carTypes,
    isLoadingCarFilterScheme,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
  } = useAppSelector(filterSchemeSelector);

  const { selectedPriceRange, selectedYearRange } = useAppSelector(selectedFilterRangesSelector);
  const { isOnlyOwned } = useAppSelector(isOnlyOwnedSelector);

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const loadParameters = useCallback(() => {
    dispatch(getManufacturesAsync({}));
    dispatch(getCarTypesAsync({}));
    dispatch(getCarFilterSchemeAsync());
  }, [dispatch]);

  const checkboxContainerStyles = useMemo(() => {
    const style = styles.checkboxContainer;
    style.backgroundColor = theme.palette.specificBackground.main;
    return style;
  }, [theme]);

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

  const toogleOnlyOwned = useCallback(() => {
    dispatch(setIsOnlyOwned(!isOnlyOwned));
  }, [isOnlyOwned, dispatch]);

  useEffect(() => {
    dispatch(
      setDefaultParams({
        selectedPriceRange: [minPrice, maxPrice],
        selectedYearRange: [minYear, maxYear],
        selectedManufactures: [],
        selectedCarTypes: [],
        selectedCountries: [],
        isOnlyOwned: false,
      }),
    );
  }, [minPrice, maxPrice, minYear, maxYear, dispatch]);

  useEffect(() => {
    loadParameters();
  }, [loadParameters]);

  return {
    isLoadingManufacture,
    manufactures,
    isLoadingCarTypes,
    carTypes,
    isLoadingCarFilterScheme,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    selectedPriceRange,
    selectedYearRange,
    checkboxContainerStyles,
    isOnlyOwned,
    countries,
    handlePriceRangeChange,
    handleYearRangeChange,
    handleSelectedManufacture,
    handleSelectedCarType,
    handleSelectedCountry,
    toogleOnlyOwned,
  };
};
