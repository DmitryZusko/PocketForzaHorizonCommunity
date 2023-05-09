import { useAppDispatch, useAppSelector } from "@/redux/app-hooks";
import { getAchievementStats } from "@/redux/game-statistics";
import { newsSelector } from "@/redux/news/selectors";
import { getNews } from "@/redux/news/thunks";
import { Grid, Tooltip, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import { defaultNewsAmount, defaultNewsLength } from "../constants/applicationConstants";
import NavigationCard from "../NavigationCard/NavigationCard";

const NewsBlockComponent = ({ ...props }) => {
  const { isLoading: isNewsLoading, news } = useAppSelector(newsSelector);

  const dispatch = useAppDispatch();

  const loadNews = useCallback(async () => {
    await dispatch(getNews({ count: defaultNewsAmount, maxLength: defaultNewsLength }));
    await dispatch(getAchievementStats());
  }, [dispatch]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={12}>
        <Typography variant="h4">Recent News</Typography>
      </Grid>
      {news.map((item) => (
        <Tooltip
          key={item.gid}
          arrow
          title={<Typography variant="body1">Open is Steam</Typography>}
        >
          <Grid item key={item.gid} xs={12} md={6} xl={4}>
            <NavigationCard
              navigationLink={item.url}
              thumbnail={item.thumbnail}
              cardTitle={item.title}
              body={item.contents}
            />
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default NewsBlockComponent;
