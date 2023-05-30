import { getTuneById, selectedTuneSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";
import { ITuneDetailsComponentHook } from "./types";

export const useTuneDetailsComponent = ({ id }: ITuneDetailsComponentHook) => {
  const { isLoadingSelected: isLoading, selectedEntity } = useAppSelector(selectedTuneSelector);
  const dispatch = useAppDispatch();

  const loadTune = useCallback(() => {
    dispatch(getTuneById({ id }));
  }, [id, dispatch]);

  useEffect(() => {
    loadTune();
  }, [loadTune]);
  return { isLoading, selectedEntity };
};
