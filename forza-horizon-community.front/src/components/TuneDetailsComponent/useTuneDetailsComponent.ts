import { getTuneById, selectedTuneSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";
import { ITuneDetailsComponentHook } from "./types";

export const useTuneDetailsComponent = ({ id }: ITuneDetailsComponentHook) => {
  const { isLoadingSelected: isLoading, selectedTune } = useAppSelector(selectedTuneSelector);
  console.log(selectedTune?.rating);

  const dispatch = useAppDispatch();

  const loadTune = useCallback(() => {
    dispatch(getTuneById({ id }));
  }, [id, dispatch]);

  useEffect(() => {
    loadTune();
  }, [loadTune]);
  return { isLoading, selectedTune };
};
