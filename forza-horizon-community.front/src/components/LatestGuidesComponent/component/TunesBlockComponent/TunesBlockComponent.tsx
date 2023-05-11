import {
  defaultTuneImageHeight,
  GuideCardFooterComponent,
  NavigationCard,
  TuneCardBodyComponent,
} from "@/components";
import { Grid, Tooltip } from "@mui/material";
import { useTunesBlockComponent } from "./useTunesBlockComponent";

const TunesBlockComponent = ({ ...props }) => {
  const { isLoading, latestTunes } = useTunesBlockComponent();

  return (
    <Grid container spacing={2} {...props}>
      {latestTunes.map((tune) => (
        <Tooltip key={tune.id} title="Go to tune page">
          <Grid item key={tune.id} xs={12} md={3}>
            <NavigationCard
              thumbnail="TuneThumbnail.png"
              imageHeight={defaultTuneImageHeight}
              cardTitle={tune.title}
              navigationLink={`tunes/${tune.id}`}
              body={
                <TuneCardBodyComponent
                  engineType={tune.engineType}
                  aspirationType={tune.aspirationType}
                  tiresCompound={tune.tiresCompound}
                />
              }
              footer={
                <GuideCardFooterComponent
                  shareCode={tune.forzaShareCode}
                  rating={tune.rating}
                  author={tune.authorUsername}
                  creationDate={tune.creationDate}
                  carModel={tune.carModel}
                />
              }
            />
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default TunesBlockComponent;
