import { globalStyles } from "@/styles";
import { Button, Grid, Slide } from "@mui/material";
import { LatestGuidesComponent } from "../LatestGuidesComponent";
import { SettingsSuggest, Palette, ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useGuidesComponent } from "./useGuidesComponent";
import { buttonSlideAnimationDuration } from "./constants";

const GuidesComponent = () => {
  const {
    isSlide,
    tuneButtonStyle,
    designButtonStyle,
    handleTunesClick,
    handleTuneEnter,
    handleTuneLeave,
    handleDesignsClick,
    handleDesignEnter,
    handleDesignLeave,
  } = useGuidesComponent();

  return (
    <Grid
      container
      sx={[globalStyles.centeredColumnFlexContainer, { overflow: "hidden" }]}
      maxWidth={"100%"}
    >
      <Slide
        in={isSlide}
        timeout={buttonSlideAnimationDuration}
        direction={isSlide ? "right" : "left"}
      >
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
          <Button
            variant="contained"
            startIcon={<SettingsSuggest />}
            endIcon={<ArrowForwardIos />}
            onClick={handleTunesClick}
            onMouseEnter={handleTuneEnter}
            onMouseLeave={handleTuneLeave}
            sx={tuneButtonStyle}
          >
            Explore tunes
          </Button>
        </Grid>
      </Slide>
      <Slide
        in={isSlide}
        timeout={buttonSlideAnimationDuration}
        direction={isSlide ? "left" : "right"}
      >
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIos />}
            endIcon={<Palette />}
            onClick={handleDesignsClick}
            onMouseEnter={handleDesignEnter}
            onMouseLeave={handleDesignLeave}
            sx={designButtonStyle}
          >
            Explore designs
          </Button>
        </Grid>
      </Slide>

      <Grid item xs={12} maxWidth="100vw">
        <LatestGuidesComponent />
      </Grid>
    </Grid>
  );
};

export default GuidesComponent;
