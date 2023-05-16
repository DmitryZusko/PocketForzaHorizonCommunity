import { Container, Typography } from "@mui/material";
import { defaultPriceStep } from "../constants";
import { CustomCheckboxListComponent, CustomRangeSliderComponent } from "./components";
import { styles } from "./styles";
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
    <Container sx={styles.outerContainer} {...props}>
      <Typography variant="textBody" sx={styles.textTitle}>
        Select Country
      </Typography>
      <Container sx={styles.checkboxContainer}>
        <CustomCheckboxListComponent entities={countries()} applyChanges={handleSelectedCountry} />
      </Container>
      <Typography variant="textBody" sx={styles.textTitle}>
        Select Manufacture
      </Typography>
      <Container sx={styles.checkboxContainer}>
        <CustomCheckboxListComponent
          entities={manufactures.map((item) => item.name)}
          applyChanges={handleSelectedManufacture}
        />
      </Container>
      <Typography variant="textBody" sx={styles.textTitle}>
        Select Car Type
      </Typography>
      <Container sx={styles.checkboxContainer}>
        <CustomCheckboxListComponent
          entities={carTypes.map((item) => item.name)}
          applyChanges={handleSelectedCarType}
        />
      </Container>
      <Typography variant="textBody" sx={styles.textTitle}>
        Select Car Price
      </Typography>
      <CustomRangeSliderComponent
        validRange={selectedPriceRange}
        min={minPrice}
        max={maxPrice}
        step={defaultPriceStep}
        handleRangeChange={handlePriceRangeChange}
      />
      <Typography variant="textBody" sx={styles.textTitle}>
        Select Car Year
      </Typography>
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
