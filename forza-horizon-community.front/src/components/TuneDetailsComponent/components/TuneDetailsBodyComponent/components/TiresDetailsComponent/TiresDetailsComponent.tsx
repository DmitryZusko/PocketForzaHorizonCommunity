import {
  defaultIconSize,
  TiresCompoundType,
  TiresWidthType,
  TrackWidthType,
} from "@/components/constants";
import { globalStyles } from "@/styles";
import { enumFormater } from "@/utilities";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "../styles";
import { ITiresDetailsComponentProps } from "./types";

const TiresDetailsComponent = ({
  tiresDescription,
  tiresCompound,
  frontTireWidth,
  rearTireWidth,
  frontTrackWidth,
  rearTrackWidth,
  ...props
}: ITiresDetailsComponentProps) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer} {...props}>
      <Divider flexItem>
        <Typography variant="blockTitle" sx={styles.textHeader}>
          Tires
        </Typography>
      </Divider>
      <Typography variant="textBody" sx={styles.textBody}>
        {tiresDescription}
      </Typography>
      <Box sx={styles.sparePartsBlock}>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"TireWidthIcon"}
            src="/EnumIcons/TiresWidthIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(frontTireWidth || "", TiresWidthType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"TireWidthIcon"}
            src="/EnumIcons/TiresWidthIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(rearTireWidth || "", TiresWidthType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"frontTrackWidthIcon"}
            src="/EnumIcons/FrontTrackWidthIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(frontTrackWidth || "", TrackWidthType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"rearTrackWidthIcon"}
            src="/EnumIcons/RearTrackWidthIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"        
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(rearTrackWidth || "", TrackWidthType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"TiresCompoundIcon"}
            src="/EnumIcons/TiresCompoundIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(tiresCompound || "", TiresCompoundType)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TiresDetailsComponent;
