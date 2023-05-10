import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { defaultSearchTreshhold, defaultTuneImageHeight } from "../constants";
import { GuideCardFooterComponent } from "../GuideCardFooterComponent";
import { NavigationCard } from "../NavigationCard";
import { SearchComponent } from "../SearchComponent";
import { TuneCardBodyComponent } from "../TuneCardBodyComponent";
import { useTuneListComponent } from "./useTuneListComponent";

const TuneListComponent = () => {
  const {
    tunes,
    searchQuery,
    autocompleteOptions,
    pageSize,
    totalEntities,
    handleSearchQueryChange,
    handleAutocompleteChange,
    makePageSizeBigger,
  } = useTuneListComponent();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SearchComponent
          threshold={defaultSearchTreshhold}
          handleQueryChange={handleSearchQueryChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          options={autocompleteOptions}
          onChange={handleAutocompleteChange}
          renderInput={(params) => <TextField {...params} label="Car" />}
        />
      </Grid>
      <Grid item xs={12}>
        <InfiniteScroll
          dataLength={totalEntities}
          next={makePageSizeBigger}
          hasMore={pageSize < totalEntities}
          loader={<CircularProgress />}
          endMessage={"this is it"}
        >
          {tunes.map((tune) => (
            <NavigationCard
              key={tune.id}
              thumbnail="TuneThumbnail.png"
              cardTitle={tune.title}
              navigationLink=""
              imageHeight={defaultTuneImageHeight}
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
          ))}
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};

export default TuneListComponent;
