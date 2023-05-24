import { Palette, PaletteOutlined, Settings, SettingsOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { IRatingComponentProps } from "./types";

const RatingComponent = ({ isDesign = true, ...props }: IRatingComponentProps) => {
  if (isDesign) {
    return <Rating icon={<Palette />} emptyIcon={<PaletteOutlined />} precision={0.5} {...props} />;
  }

  return <Rating icon={<Settings />} emptyIcon={<SettingsOutlined />} precision={0.5} {...props} />;
};

export default RatingComponent;
