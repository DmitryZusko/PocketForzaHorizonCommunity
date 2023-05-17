import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { defaultSearchTreshhold } from "../constants";
import { SearchComponent } from "../SearchComponent";
import { useDesginListComponent } from "./useDesginListComponent";
import "react-virtualized/styles.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { InfiniteScrollEndComponent } from "../InfiniteScrollEndComponent";
import { NavigationCard } from "../NavigationCard";
import { imageUtil } from "@/utilities";
import { GuideCardFooterComponent } from "../GuideCardFooterComponent";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { styles } from "./styles";

const DesginListComponent = () => {
  const {
    autocompleteOptions,
    designs,
    page,
    pageSize,
    totalEntities,
    handleSearchQueryChange,
    handleAutocompleteChange,
    loadNext,
  } = useDesginListComponent();

  return (
    <Grid container sx={styles.outerContainer}>
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
      <Grid item xs={12}>
        <InfiniteScroll
          dataLength={designs.length}
          next={loadNext}
          hasMore={page * pageSize < totalEntities}
          loader={<DefaultLoaderComponent />}
          endMessage={<InfiniteScrollEndComponent text={"You've discovered all designs!"} />}
          style={styles.infiniteScroll}
        >
          <Grid container>
            {designs.map((design) => {
              console.log("render");
              return (
                <Grid item xs={12} md={6} lg={4} key={design.id}>
                  <NavigationCard
                    navigationLink={`designs/${design.id}`}
                    target={"_self"}
                    cardTitle={design.title}
                    body={<Typography variant="textBody">{design.description}</Typography>}
                    thumbnail={imageUtil.addJpgHeader(design.thumbnail)}
                    footer={
                      <GuideCardFooterComponent
                        shareCode={design.forzaShareCode}
                        rating={design.rating}
                        author={design.authorUsername}
                        creationDate={design.creationDate}
                        carModel={design.carModel}
                      />
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};

export default DesginListComponent;
