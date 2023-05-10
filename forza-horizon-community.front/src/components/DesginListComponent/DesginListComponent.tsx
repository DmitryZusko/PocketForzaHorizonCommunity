import { dateFormater, imageUtil } from "@/utilities";
import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { GuideCardFooterComponent } from "../GuideCardFooterComponent";
import { NavigationCard } from "../NavigationCard";
import { SearchComponent } from "../SearchComponent";
import { useDesginListComponent } from "./useDesginListComponent";

const DesginListComponent = () => {
  const {
    searchQuery,
    autocompleteOptions,
    designs,
    pageSize,
    totalEntities,
    handleSearchQueryChange,
    handleAutocompleteChange,
    makePageSizeBigger,
  } = useDesginListComponent();

  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchComponent trashhold={3} handleQueryChange={handleSearchQueryChange} />
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
          {designs.map((design) => (
            <NavigationCard
              key={design.id}
              navigationLink={""}
              cardTitle={design.title}
              body={design.description}
              thumbnail={imageUtil.addJpgHeader(design.thumbnail)}
              footer={
                <GuideCardFooterComponent
                  shareCode={design.forzaShareCode}
                  rating={design.rating}
                  author={design.authorUsername}
                  creationDate={dateFormater.dateToString(design.creationDate)}
                  carModel={design.carModel}
                />
              }
            />
          ))}
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};

export default DesginListComponent;
