import {
  carNamesSelector,
  cleanUpTunes,
  getCarNamesAsync,
  getTunesAsync,
  getTunesByCarIdAsync,
  tunesSelector,
  turnTunePage,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultPageSize } from "../constants";

export const useTuneListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<string | undefined>("");

  const { carNames } = useAppSelector(carNamesSelector);

  const { entities, page, pageSize, totalEntities } = useAppSelector(tunesSelector);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    dispatch(getCarNamesAsync());
  }, [dispatch]);

  const loadTunes = useCallback(() => {
    if (selectedCar) {
      return dispatch(
        getTunesByCarIdAsync({
          page,
          pageSize: defaultPageSize,
          searchQuery: searchQuery,
          carId: selectedCar,
        }),
      );
    }

    return dispatch(
      getTunesAsync({
        page,
        pageSize: defaultPageSize,
        searchQuery: searchQuery,
      }),
    );
  }, [selectedCar, searchQuery, page, dispatch]);

  const autocompleteOptions = useMemo(() => {
    return carNames.map((item) => ({
      label: item.carName,
      id: item.id,
    }));
  }, [carNames]);

  const handleAddNewClick = () => {
    router.push("/guides/tunes/add-new");
  };

  //To clean up old results and start fetching for a new query paramsand, old tunes[] should be cleaned up and page set to 0
  const handleSearchQueryChange = useCallback(
    (newQuery: string) => {
      dispatch(cleanUpTunes());
      setSearchQuery(newQuery);
    },
    [dispatch],
  );

  //To clean up old results and start fetching for a new query paramsand, old tunes[] should be cleaned up and page set to 0
  const handleAutocompleteChange = useCallback(
    (event: any, newValue: { label: string; id: string } | null) => {
      dispatch(cleanUpTunes());
      setSelectedCar(newValue?.id);
    },
    [dispatch],
  );

  //to trigger further tunes loading we simply change a page
  const loadNext = useCallback(() => {
    dispatch(turnTunePage());
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
        dispatch(cleanUpTunes());
      }
    };
  }, [loadTunes, dispatch]);

  //If user leaves the page and that returns, tunes[] will contain previouse results and a new session will load the same tunes and push it to the old array.
  //To prevent a such behavior, on a component unmounts tunes[] should be cleaned up
  useEffect(() => {
    return () => {
      dispatch(cleanUpTunes());
    };
  }, [dispatch]);

  return {
    entities,
    autocompleteOptions,
    page,
    pageSize,
    totalEntities,
    handleAddNewClick,
    loadNext,
    handleSearchQueryChange,
    handleAutocompleteChange,
  };
};
