import {
  carNamesSelector,
  cleanUpDesigns,
  designsSelector,
  getCarNamesAsync,
  getDesignsAsync,
  getDesignsByCarId,
  setDesignPage,
  turnDesignPage,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useRouter } from "next/router";
import { useState, useCallback, useMemo, useEffect } from "react";
import { defaultCardDescriptionLimit, defaultPageSize } from "../constants";

export const useDesginListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<string | undefined>("");

  const { carNames } = useAppSelector(carNamesSelector);

  const { designs, page, pageSize, totalEntities } = useAppSelector(designsSelector);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const loadCars = useCallback(() => {
    dispatch(getCarNamesAsync());
  }, [dispatch]);

  const loadDesigns = useCallback(() => {
    if (selectedCar) {
      return dispatch(
        getDesignsByCarId({
          page,
          pageSize: defaultPageSize,
          searchQuery: searchQuery,
          descriptionLimit: defaultCardDescriptionLimit,
          carId: selectedCar,
        }),
      );
    }
    return dispatch(
      getDesignsAsync({
        page,
        pageSize: defaultPageSize,
        searchQuery: searchQuery,
        descriptionLimit: defaultCardDescriptionLimit,
      }),
    );
  }, [searchQuery, page, selectedCar, dispatch]);

  const autocompleteOptions = useMemo(() => {
    return carNames.map((item) => ({
      label: item.carName,
      id: item.id,
    }));
  }, [carNames]);

  const handleAddNewClick = () => {
    router.push("/guides/designs/add-new");
  };

  //To clean up old results and start fetching for a new query params, old design[] should be cleaned up and page set to 0
  const handleSearchQueryChange = useCallback(
    (newQuery: string) => {
      dispatch(cleanUpDesigns());
      dispatch(setDesignPage(0));
      setSearchQuery(newQuery);
    },
    [setSearchQuery, dispatch],
  );

  //To clean up old results and start fetching for a new query params, old design[] should be cleaned up and page set to 0
  const handleAutocompleteChange = useCallback(
    (event: any, newValue: { label: string; id: string } | null) => {
      dispatch(cleanUpDesigns());
      dispatch(setDesignPage(0));
      setSelectedCar(newValue?.id);
    },
    [setSelectedCar, dispatch],
  );

  //to trigger further designs loading we simply change a page
  const loadNext = useCallback(() => {
    dispatch(turnDesignPage());
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

  //If user leaves the page and that returns, designs[] will contain previouse results and a new session will load the same designs and push it to the old array.
  //To prevent a such behavior, on a component unmounts designs[] should be cleaned up
  useEffect(() => {
    return () => {
      dispatch(cleanUpDesigns());
      dispatch(setDesignPage(0));
    };
  }, [dispatch]);

  return {
    searchQuery,
    autocompleteOptions,
    designs,
    page,
    pageSize,
    totalEntities,
    handleAddNewClick,
    handleSearchQueryChange,
    handleAutocompleteChange,
    loadNext,
    loadDesigns,
  };
};
