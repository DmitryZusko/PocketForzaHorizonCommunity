import { Container, Typography } from "@mui/material";
import CustomCheckboxListComponent from "./components/CustomCheckboxListComponent/CustomCheckboxListComponent";
import CustomRangeSliderComponent from "./components/CustomRangeSlider/CustomRangeSliderComponent";
import useFilterCarTableComponent from "./useFilterCarTableComponent";

export default function FilterCarTableComponent({ ...props }) {
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
        step={5000}
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
}
