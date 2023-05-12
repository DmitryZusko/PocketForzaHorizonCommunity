import {
  addToDesignPageSize,
  carNamesSelector,
  designsSelector,
  getCarNames,
  getDesigns,
  getDesignsByCarId,
  setDesignPageSize,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useState, useCallback, useMemo, useEffect } from "react";
import { defaultCardDescriptionLimit, defaultPageSize } from "../constants";

export const useDesginListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<string | undefined>("");

  const { carNames } = useAppSelector(carNamesSelector);

  const { isLoadingDesigns, designs, pageSize, totalEntities } = useAppSelector(designsSelector);

  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    dispatch(getCarNames());
  }, [dispatch]);

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
      dispatch(setDesignPageSize(defaultPageSize));
    },
    [setSearchQuery, dispatch],
  );

  const handleAutocompleteChange = useCallback(
    (event: any, newValue: { label: string; id: string } | null) => {
      setSelectedCar(newValue?.id);
      dispatch(setDesignPageSize(defaultPageSize));
    },
    [setSelectedCar, dispatch],
  );

  const makePageSizeBigger = useCallback(() => {
    dispatch(addToDesignPageSize());
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
