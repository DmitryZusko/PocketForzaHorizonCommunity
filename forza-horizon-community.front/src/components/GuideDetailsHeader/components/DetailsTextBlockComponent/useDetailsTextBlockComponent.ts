import {
  selectedDesignSelector,
  selectedTuneSelector,
  setDesignRatingAsync,
  setTuneRatingAsync,
  useAppDispatch,
  useAppSelector,
  userSelector,
} from "@/redux";
import { useCallback } from "react";
import { IDetailsTextBlockComponentHook } from "./types";

export const useDetailsTextBlockComponent = ({ isDesign }: IDetailsTextBlockComponentHook) => {
  const { selectedDesign } = useAppSelector(selectedDesignSelector);
  const { selectedTune } = useAppSelector(selectedTuneSelector);
  const { user } = useAppSelector(userSelector);

  const ratingValue = useCallback(() => {
    return isDesign ? selectedDesign?.rating : selectedTune?.rating;
  }, [isDesign, selectedDesign, selectedTune]);

  const dispatch = useAppDispatch();

  const handleDesignRating = useCallback(
    (value: number | null) => {
      if (!user) return;
      if (!selectedDesign) return;
      if (!value) {
        dispatch(
          setDesignRatingAsync({
            userId: user?.id,
            guideId: selectedDesign.id,
            rating: selectedDesign.rating,
          }),
        );
        return;
      }
      dispatch(
        setDesignRatingAsync({ userId: user?.id, guideId: selectedDesign.id, rating: value }),
      );
    },
    [user, selectedDesign, dispatch],
  );

  const handleTuneRating = useCallback(
    (value: number | null) => {
      if (!user) return;
      if (!selectedTune) return;
      if (!value) {
        dispatch(
          setDesignRatingAsync({
            userId: user?.id,
            guideId: selectedTune.id,
            rating: selectedTune.rating,
          }),
        );
        return;
      }
      dispatch(setTuneRatingAsync({ userId: user?.id, guideId: selectedTune.id, rating: value }));
    },
    [user, selectedTune, dispatch],
  );

  const handleRating = useCallback(
    (event: React.SyntheticEvent, value: number | null) => {
      if (isDesign) {
        handleDesignRating(value);
        return;
      }

      handleTuneRating(value);
    },
    [isDesign, handleDesignRating, handleTuneRating],
  );

  return { ratingValue, handleRating };
};
