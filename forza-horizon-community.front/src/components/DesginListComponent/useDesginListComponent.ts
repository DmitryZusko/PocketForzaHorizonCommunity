import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import {
  addToPageSize,
  designsSelector,
  getDesigns,
  getDesignsByCarId,
  setPageSize,
} from "@/redux/design";
import { carNamesSelector, getCarNames } from "@/redux/filter-scheme";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  defaultCardDescriptionLimit,
  defaultInfinitLoaderAdjustment,
} from "../constants/applicationConstants";

export const useDesginListComponent = () => {
  const defaultPageSize = 1;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<string | undefined>("");

  const { carNames } = useAppSelector(carNamesSelector);

  const { isLoadingDesigns, designs, pageSize, totalEntities } = useAppSelector(designsSelector);

  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    if (carNames.length < 1) dispatch(getCarNames());
  }, [carNames, dispatch]);

  const loadDesigns = useCallback(() => {
    if (selectedCar) {
      return dispatch(
        getDesignsByCarId({
          page: 0,
          pageSize,
          searchQuery: searchQuery,
          descriptionLimit: defaultCardDescriptionLimit,
          carId: selectedCar,
        }),
      );
    }
    return dispatch(
      getDesigns({
        page: 0,
        pageSize,
        searchQuery: searchQuery,
        descriptionLimit: defaultCardDescriptionLimit,
      }),
    );
  }, [searchQuery, pageSize, selectedCar, dispatch]);

  const autocompleteOptions = useMemo(() => {
    return carNames.map((item) => ({
      label: item.carName,
      id: item.id,
    }));
  }, [carNames]);

  const handleSearchQueryChange = useCallback(
    (newQuery: string) => {
      setSearchQuery(newQuery);
      dispatch(setPageSize(defaultPageSize));
    },
    [setSearchQuery, dispatch],
  );

  const handleAutocompleteChange = useCallback(
    (event: any, newValue: { label: string; id: string } | null) => {
      setSelectedCar(newValue?.id);
      dispatch(setPageSize(defaultPageSize));
    },
    [setSelectedCar, dispatch],
  );

  const makePageSizeBigger = useCallback(() => {
    dispatch(addToPageSize(defaultInfinitLoaderAdjustment));
  }, [dispatch]);

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  useEffect(() => {
    let isDispatched: boolean = false;
    var dispatchPromise = loadDesigns();
    dispatchPromise.then(() => (isDispatched = true));
    return () => {
      if (!isDispatched) {
        dispatchPromise.abort();
      }
    };
  }, [loadDesigns]);

  return {
    searchQuery,
    autocompleteOptions,
    designs,
    pageSize,
    totalEntities,
    handleSearchQueryChange,
    handleAutocompleteChange,
    makePageSizeBigger,
  };
};
