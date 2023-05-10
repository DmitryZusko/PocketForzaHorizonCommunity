import {
  addToTunePageSize,
  carNamesSelector,
  getCarNames,
  getTunes,
  getTunesByCarId,
  setTunePageSize,
  tunesSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultPageSize } from "../constants";

export const useTuneListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<string | undefined>("");

  const { carNames } = useAppSelector(carNamesSelector);

  const { latestTunes, tunes, page, pageSize, totalEntities } = useAppSelector(tunesSelector);

  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    dispatch(getCarNames());
  }, [dispatch]);

  const loadTunes = useCallback(() => {
    if (selectedCar) {
      return dispatch(
        getTunesByCarId({
          page: 0,
          pageSize,
          searchQuery: searchQuery,
          carId: selectedCar,
        }),
      );
    }

    return dispatch(
      getTunes({
        page: 0,
        pageSize,
        searchQuery: searchQuery,
      }),
    );
  }, [selectedCar, searchQuery, pageSize, dispatch]);

  const autocompleteOptions = useMemo(() => {
    return carNames.map((item) => ({
      label: item.carName,
      id: item.id,
    }));
  }, [carNames]);

  const handleSearchQueryChange = useCallback(
    (newQuery: string) => {
      setSearchQuery(newQuery);
      dispatch(setTunePageSize(defaultPageSize));
    },
    [dispatch],
  );

  const handleAutocompleteChange = useCallback(
    (event: any, newValue: { label: string; id: string } | null) => {
      setSelectedCar(newValue?.id);
      dispatch(setTunePageSize(defaultPageSize));
    },
    [dispatch],
  );

  const makePageSizeBigger = useCallback(() => {
    dispatch(addToTunePageSize());
  }, [dispatch]);

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  useEffect(() => {
    let isDispatched: boolean;
    var dispatchPromise = loadTunes();

    dispatchPromise.then(() => (isDispatched = true));

    return () => {
      if (!isDispatched) {
        dispatchPromise.abort();
      }
    };
  }, [loadTunes]);

  return {
    tunes,
    searchQuery,
    autocompleteOptions,
    pageSize,
    totalEntities,
    handleSearchQueryChange,
    handleAutocompleteChange,
    makePageSizeBigger,
  };
};
