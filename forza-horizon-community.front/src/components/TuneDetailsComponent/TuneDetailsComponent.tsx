import { Grid } from "@mui/material";
import { GuideDetailsHeader } from "../GuideDetailsHeader";
import { TuneDetailsBodyComponent } from "./components";
import { ITuneDetailsComponentProps } from "./types";
import { useTuneDetailsComponent } from "./useTuneDetailsComponent";

const TuneDetailsComponent = ({ id }: ITuneDetailsComponentProps) => {
  const { isLoading, selectedTune } = useTuneDetailsComponent({ id });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <GuideDetailsHeader
          thumbnail="/TuneThumbnail.png"
          title={selectedTune?.title || ""}
          authorName={selectedTune?.authorUsername || ""}
          shareCode={selectedTune?.forzaShareCode || ""}
          rating={selectedTune?.rating || 0}
          creationDate={selectedTune?.creationDate || new Date()}
        />
      </Grid>
      <Grid item xs={12}>
        <TuneDetailsBodyComponent selectedTune={selectedTune} />
      </Grid>
    </Grid>
  );
};

export default TuneDetailsComponent;
