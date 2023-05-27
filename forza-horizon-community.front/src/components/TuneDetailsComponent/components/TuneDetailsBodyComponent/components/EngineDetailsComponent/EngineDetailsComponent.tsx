import { Box, Divider, Typography } from "@mui/material";
import {
  AspirationType,
  defaultIconSize,
  DisplacementType,
  EngineType,
  ExhaustType,
  IgnitionType,
  IntakeType,
} from "@/components/constants";
import { enumFormater } from "@/utilities";
import Image from "next/image";
import { styles } from "../styles";
import { IEngineDetailsComponentProps } from "./types";
import { globalStyles } from "@/styles";

const EngineDetailsComponent = ({
  engineDescription,
  engineType,
  aspirationType,
  intake,
  ignition,
  displacement,
  exhaust,
  ...props
}: IEngineDetailsComponentProps) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer} {...props}>
      <Divider flexItem variant="fullWidth">
        <Typography variant="blockTitle" sx={styles.textHeader}>
          Engine
        </Typography>
      </Divider>
      <Typography variant="textBody" sx={styles.textBody}>
        {engineDescription}
      </Typography>
      <Box sx={styles.sparePartsBlock}>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"EngineIcon"}
            src="/EnumIcons/EngineIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(engineType || "", EngineType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"AspirationIcon"}
            src="/EnumIcons/AspirationIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(aspirationType || "", AspirationType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"IntakeIcon"}
            src="/EnumIcons/IntakeIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(intake || "", IntakeType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"IgnitionIcon"}
            src="/EnumIcons/IgnitionIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(ignition || "", IgnitionType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"DisplacementIcon"}
            src="/EnumIcons/DisplacementIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(displacement || "", DisplacementType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"ExhaustIcon"}
            src="/EnumIcons/ExhaustIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(exhaust || "", ExhaustType)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EngineDetailsComponent;
