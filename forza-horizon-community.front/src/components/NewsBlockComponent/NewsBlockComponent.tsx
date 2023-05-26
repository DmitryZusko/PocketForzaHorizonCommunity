import { Grid, GridProps, Grow, Slide, Typography } from "@mui/material";
import { CustomTooltipComponent } from "../CustomTooltipComponent";
import { NavigationCard } from "../NavigationCard";
import { CardSkeletonComponent } from "../skeletons";
import { useNewsBlockComponent } from "./useNewsBlockComponent";

const NewsBlockComponent = (props: GridProps) => {
  const { isLoading, news } = useNewsBlockComponent();
  return (
    <>
      {isLoading ? (
        <Grow in={isLoading} unmountOnExit>
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <CardSkeletonComponent />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CardSkeletonComponent />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CardSkeletonComponent />
            </Grid>
          </Grid>
        </Grow>
      ) : (
        <Slide direction="right" in={!isLoading} mountOnEnter timeout={500}>
          <Grid container {...props}>
            {news.map((item) => (
              <CustomTooltipComponent key={item.gid} title={"Open in Steam"}>
                <Grid item xs={12} md={6} lg={4}>
                  <NavigationCard
                    navigationLink={item.url}
                    thumbnail={item.thumbnail || "/news.png"}
                    cardTitle={item.title}
                    body={<Typography variant="textBody">{item.contents}</Typography>}
                    target={"_blank"}
                  />
                </Grid>
              </CustomTooltipComponent>
            ))}
          </Grid>
        </Slide>
      )}
    </>
  );
};

export default NewsBlockComponent;
