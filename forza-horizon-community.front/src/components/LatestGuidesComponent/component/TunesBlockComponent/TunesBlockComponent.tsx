import NavigationCard from "@/components/NavigationCard/NavigationCard";
import { Star } from "@mui/icons-material";
import { Grid, Tooltip, Typography } from "@mui/material";
import useTunesBlockComponent from "./useTunesBlockComponent";

const TunesBlockComponent = ({ ...props }) => {
  const { isLoading, latestTunes } = useTunesBlockComponent();

  return (
    <Grid container spacing={2} {...props}>
      {latestTunes.map((tune) => (
        <Tooltip key={tune.id} title="Go to tune page">
          <Grid item key={tune.id} xs={12} md={3}>
            <NavigationCard
              thumbnail="TuneThumbnail.png"
              imageHeight={200}
              cardTitle={tune.title}
              navigationLink=""
              body=""
              footer={
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <Typography variant="body1">{tune.carModel}</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body1">{tune.authorUsername}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Star />
                    <Typography variant="body1">{tune.rating}</Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default TunesBlockComponent;
