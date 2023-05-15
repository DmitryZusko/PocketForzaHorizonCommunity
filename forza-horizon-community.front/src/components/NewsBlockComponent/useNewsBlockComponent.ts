import { getNews, newsSelector, useAppDispatch, useAppSelector } from "@/redux";
import { useCallback, useEffect } from "react";
import { defaultNewsAmount, defaultNewsLength } from "../constants";

export const useNewsBlockComponent = () => {
  const { isLoading, news } = useAppSelector(newsSelector);

  const dispatch = useAppDispatch();

  const loadNews = useCallback(async () => {
    await dispatch(getNews({ count: defaultNewsAmount, maxLength: defaultNewsLength }));
  }, [dispatch]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);
  return { isLoading, news };
};
