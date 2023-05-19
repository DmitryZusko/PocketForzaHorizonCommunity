import { Container, Typography } from "@mui/material";
import { defaultPriceStep } from "../constants";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { CustomCheckboxListComponent, CustomRangeSliderComponent } from "./components";
import { styles } from "./styles";
import { useFilterCarTableComponent } from "./useFilterCarTableComponent";

const FilterCarTableComponent = ({ ...props }) => {
  const {
    isLoadingManufacture,
    manufactures,
    isLoadingCarTypes,
    carTypes,
    isLoadingCarFilterScheme,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    selectedPriceRange,
    selectedYearRange,
    checkboxContainerStyles,
    countries,
    handlePriceRangeChange,
    handleYearRangeChange,
    handleSelectedManufacture,
    handleSelectedCarType,
    handleSelectedCountry,
  } = useFilterCarTableComponent();

  return (
    <Container sx={styles.outerContainer} {...props}>
      {isLoadingManufacture || isLoadingCarTypes || isLoadingCarFilterScheme ? (
        <DefaultLoaderComponent />
      ) : (
        <>
          <Typography variant="textBody" sx={styles.textTitle}>
            Select Country
          </Typography>
          <Container sx={checkboxContainerStyles}>
            <CustomCheckboxListComponent
              entities={countries()}
              applyChanges={handleSelectedCountry}
            />
          </Container>
          <Typography variant="textBody" sx={styles.textTitle}>
            Select Manufacture
          </Typography>
          <Container sx={checkboxContainerStyles}>
            <CustomCheckboxListComponent
              entities={manufactures.map((item) => item.name)}
              applyChanges={handleSelectedManufacture}
            />
          </Container>
          <Typography variant="textBody" sx={styles.textTitle}>
            Select Car Type
          </Typography>
          <Container sx={checkboxContainerStyles}>
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
        </>
      )}
    </Container>
  );
};

export default FilterCarTableComponent;
