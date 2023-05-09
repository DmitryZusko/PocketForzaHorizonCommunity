import { defaultTuneImageHeight } from "@/components/constants/applicationConstants";
import { GuideCardFooterComponent } from "@/components/GuideCardFooterComponent/GuideCardFooterComponent";
import NavigationCard from "@/components/NavigationCard/NavigationCard";
import { TuneCardBodyComponent } from "@/components/TuneCardBodyComponent/TuneCardBodyComponent";
import { dateFormater } from "@/utilities/date-formater";
import { Grid, Tooltip } from "@mui/material";
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
              imageHeight={defaultTuneImageHeight}
              cardTitle={tune.title}
              navigationLink=""
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
                  creationDate={dateFormater.dateToString(tune.creationDate)}
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
