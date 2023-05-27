import { Palette, PaletteOutlined, Settings, SettingsOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { defaultRatingPrecision } from "../constants";
import { IRatingComponentProps } from "./types";

const RatingComponent = ({ isDesign = true, ...props }: IRatingComponentProps) => {
  if (isDesign) {
    return (
      <Rating
        icon={<Palette />}
        emptyIcon={<PaletteOutlined />}
        precision={defaultRatingPrecision}
        {...props}
      />
    );
  }

  return (
    <Rating
      icon={<Settings />}
      emptyIcon={<SettingsOutlined />}
      precision={defaultRatingPrecision}
      {...props}
    />
  );
};

export default RatingComponent;
