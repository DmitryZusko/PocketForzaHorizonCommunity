import { Grid, Tooltip, Typography } from "@mui/material";
import { NavigationCard } from "../NavigationCard";
import { useNewsBlockComponent } from "./useNewsBlockComponent";

const NewsBlockComponent = ({ ...props }) => {
  const { isLoading, news } = useNewsBlockComponent();
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
              target={"_blank"}
            />
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default NewsBlockComponent;
