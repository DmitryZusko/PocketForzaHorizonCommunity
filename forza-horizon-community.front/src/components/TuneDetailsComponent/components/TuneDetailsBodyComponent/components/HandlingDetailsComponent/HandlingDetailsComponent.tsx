import {
  AntiRollBarsType,
  BrakesType,
  defaultIconSize,
  RollCageType,
  SuspensionType,
} from "@/components/constants";
import { globalStyles } from "@/styles";
import { enumFormater } from "@/utilities";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "../styles";
import { IHandlingDetailsComponentProps } from "./types";

const HandlingDetailsComponent = ({
  handlingDescription,
  brakes,
  suspension,
  antiRollBars,
  rollCage,
}: IHandlingDetailsComponentProps) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer}>
      <Divider flexItem sx={styles.divider}>
        <Typography variant="blockTitle" sx={styles.textHeader}>
          Handling
        </Typography>
      </Divider>
      <Typography variant="textBody" sx={styles.textBody}>
        {handlingDescription}
      </Typography>
      <Box sx={styles.sparePartsBlock}>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"BrakesIcon"}
            src="/EnumIcons/BrakesIcon.png"
            width={defaultIconSize}
            height={defaultIconSize}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(brakes || "", BrakesType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"SuspensionIcon"}
            src="/EnumIcons/SuspensionIcon.png"
            width={defaultIconSize}
            height={defaultIconSize}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(suspension || "", SuspensionType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"AntiRollBarsIcon"}
            src="/EnumIcons/AntiRollBarsIcon.png"
            width={defaultIconSize}
            height={defaultIconSize}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(antiRollBars || "", AntiRollBarsType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"RollCageIcon"}
            src="/EnumIcons/RollCageIcon.png"
            width={defaultIconSize}
            height={defaultIconSize}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(rollCage || "", RollCageType)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HandlingDetailsComponent;
