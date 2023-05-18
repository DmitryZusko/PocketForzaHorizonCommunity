import { globalStyles } from "@/styles";
import { Grid } from "@mui/material";
import { baseTheme } from "../constants";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { GuideDetailsHeader } from "../GuideDetailsHeader";
import { TuneDetailsBodyComponent } from "./components";
import { ITuneDetailsComponentProps } from "./types";
import { useTuneDetailsComponent } from "./useTuneDetailsComponent";

const TuneDetailsComponent = ({ id }: ITuneDetailsComponentProps) => {
  const { isLoading, selectedTune } = useTuneDetailsComponent({ id });
  return (
    <Grid
      container
      sx={(globalStyles.centeredColumnFlexContainer, { padding: baseTheme.spacing(7) })}
    >
      {isLoading ? (
        <DefaultLoaderComponent />
      ) : (
        <>
          <Grid item xs={12}>
            <GuideDetailsHeader
              thumbnail="/TuneThumbnail.png"
              isTune={true}
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
        </>
      )}
    </Grid>
  );
};

export default TuneDetailsComponent;
