import { Autocomplete, Grid, TextField } from "@mui/material";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { useDesginListComponent } from "./useDesginListComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";
import NavigationCard from "../NavigationCard/NavigationCard";
import { GuideCardFooterComponent } from "../GuideCardFooterComponent/GuideCardFooterComponent";
import { dateFormater } from "@/utilities/date-formater";
import imageConverter from "@/utilities/imageConverter";

export const DesginListComponent = () => {
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
              thumbnail={imageConverter.addJpgHeader(design.thumbnail)}
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
