import { Container, Typography } from "@mui/material";
import { defaultPriceStep } from "../constants";
import { CustomCheckboxListComponent, CustomRangeSliderComponent } from "./components";
import { useFilterCarTableComponent } from "./useFilterCarTableComponent";

const FilterCarTableComponent = ({ ...props }) => {
  const {
    isLoadingManufacture,
    manufactures,
    isLoadingCarTypes,
    carTypes,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    selectedPriceRange,
    selectedYearRange,
    countries,
    handlePriceRangeChange,
    handleYearRangeChange,
    handleSelectedManufacture,
    handleSelectedCarType,
    handleSelectedCountry,
  } = useFilterCarTableComponent();

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }} {...props}>
      <Typography>Select Country</Typography>
      <CustomCheckboxListComponent entities={countries()} applyChanges={handleSelectedCountry} />
      <Typography>Select Manufacture</Typography>
      <CustomCheckboxListComponent
        entities={manufactures.map((item) => item.name)}
        applyChanges={handleSelectedManufacture}
      />
      <Typography>Select Car Type</Typography>
      <CustomCheckboxListComponent
        entities={carTypes.map((item) => item.name)}
        applyChanges={handleSelectedCarType}
      />
      <Typography variant="h6">Select Car Price</Typography>
      <CustomRangeSliderComponent
        validRange={selectedPriceRange}
        min={minPrice}
        max={maxPrice}
        step={defaultPriceStep}
        handleRangeChange={handlePriceRangeChange}
      />
      <Typography variant="h6">Select Car Year</Typography>
      <CustomRangeSliderComponent
        validRange={selectedYearRange}
        min={minYear}
        max={maxYear}
        handleRangeChange={handleYearRangeChange}
      />
    </Container>
  );
};

export default FilterCarTableComponent;
