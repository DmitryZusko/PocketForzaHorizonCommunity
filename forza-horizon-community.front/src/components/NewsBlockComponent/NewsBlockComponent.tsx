import { Grid, Typography } from "@mui/material";
import { CustomTooltipComponent } from "../CustomTooltipComponent";
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
        <CustomTooltipComponent key={item.gid} title={"Open in Steam"}>
          <Grid item xs={12} md={6} xl={4}>
            <NavigationCard
              navigationLink={item.url}
              thumbnail={item.thumbnail}
              cardTitle={item.title}
              body={<Typography variant="textBody">{item.contents}</Typography>}
              target={"_blank"}
            />
          </Grid>
        </CustomTooltipComponent>
      ))}
    </Grid>
  );
};

export default NewsBlockComponent;
