import { Autocomplete, Button, Grid, GridProps, Slide, TextField } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { AccessRole, defaultSearchTreshhold, defaultTuneImageHeight } from "../constants";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { GuideCardFooterComponent } from "../GuideCardFooterComponent";
import { InfiniteScrollEndComponent } from "../InfiniteScrollEndComponent";
import { NavigationCard } from "../NavigationCard";
import { SearchComponent } from "../SearchComponent";
import { TuneCardBodyComponent } from "../TuneCardBodyComponent";
import { styles } from "./styles";
import { useTuneListComponent } from "./useTuneListComponent";
import { AddBox } from "@mui/icons-material";
import { RoleGate } from "../gates";

const TuneListComponent = (props?: GridProps) => {
  const {
    tunes,
    autocompleteOptions,
    page,
    pageSize,
    totalEntities,
    handleAddNewClick,
    loadNext,
    handleSearchQueryChange,
    handleAutocompleteChange,
  } = useTuneListComponent();

  return (
    <Grid container sx={styles.outerContainer} {...props}>
      <Grid item xs={12} md={5}>
        <SearchComponent
          label="Search"
          threshold={defaultSearchTreshhold}
          handleQueryChange={handleSearchQueryChange}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <Autocomplete
          options={autocompleteOptions}
          onChange={handleAutocompleteChange}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Car" />}
        />
      </Grid>
      <RoleGate accessRoles={[AccessRole.admin, AccessRole.creator]}>
        <Grid item xs={12} textAlign="center">
          <Button startIcon={<AddBox />} variant="contained" onClick={handleAddNewClick}>
            Add New
          </Button>
        </Grid>
      </RoleGate>
      <Grid item xs={12}>
        <InfiniteScroll
          dataLength={tunes.length}
          next={loadNext}
          hasMore={page * pageSize + pageSize < totalEntities} // + pageSize in case a first page = 0
          loader={<DefaultLoaderComponent />}
          endMessage={<InfiniteScrollEndComponent text="You've discovered all tunes!" />}
          style={styles.infiniteScroll}
        >
          <Grid container>
            {tunes.map((tune) => (
              <Slide key={tune.id} in={true} timeout={500} direction={"right"}>
                <Grid item xs={12} md={6} lg={4}>
                  <NavigationCard
                    thumbnail="/tuneThumbnail.pngumbnail.png"
                    cardTitle={tune.title}
                    navigationLink={`/guides/tunes/${tune.id}`}
                    target={"_self"}
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
                        isDesign={false}
                        shareCode={tune.forzaShareCode}
                        rating={tune.rating}
                        author={tune.authorUsername}
                        creationDate={tune.creationDate}
                        carModel={tune.carModel}
                      />
                    }
                  />
                </Grid>
              </Slide>
            ))}
          </Grid>
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};

export default TuneListComponent;
