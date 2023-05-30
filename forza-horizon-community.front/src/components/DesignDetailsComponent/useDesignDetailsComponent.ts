import { getDesignById, selectedDesignSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IDesignDetailsComponentHook } from "./types";

export const useDesignDetailsComponent = ({ id }: IDesignDetailsComponentHook) => {
  const { isLoadingSelected: isLoading, selectedDesign } = useAppSelector(selectedDesignSelector);
  const dispatch = useAppDispatch();

  const { ref: galleryRef, inView: galleryInView } = useInView({ triggerOnce: true });

  const loadDesign = useCallback(() => {
    dispatch(getDesignById({ id }));
  }, [id, dispatch]);

  useEffect(() => {
    loadDesign();
  }, [loadDesign]);
  return { isLoading, selectedDesign, galleryInView, galleryRef };
};
