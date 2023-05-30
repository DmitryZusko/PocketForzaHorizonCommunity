import {
  ClutchType,
  defaultIconSize,
  DifferentialType,
  TransmissionType,
} from "@/components/constants";
import { globalStyles } from "@/styles";
import { enumFormater } from "@/utilities";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "../styles";
import { IDrivetrainDetailsComponentProps } from "./styles";

const DrivetrainDetailsComponent = ({
  drivetrainDescription,
  clutch,
  transmission,
  differential,
  ...props
}: IDrivetrainDetailsComponentProps) => {
  return (
    <Box sx={globalStyles.centeredColumnFlexContainer} {...props}>
      <Divider flexItem>
        <Typography variant="blockTitle" sx={styles.textHeader}>
          Drivetrain
        </Typography>
      </Divider>
      <Typography variant="textBody" sx={styles.textBody}>
        {drivetrainDescription}
      </Typography>
      <Box sx={styles.sparePartsBlock}>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"ClutchIcon"}
            src="/EnumIcons/ClutchIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(clutch || "", ClutchType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"TransmissionIcon"}
            src="/EnumIcons/TransmissionIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(transmission || "", TransmissionType)}
          </Typography>
        </Box>
        <Box sx={[styles.sparePart]}>
          <Image
            alt={"DifferentialIcon"}
            src="/EnumIcons/DifferentialIcon.png"
            width={defaultIconSize.width}
            height={defaultIconSize.width}
            loading="lazy"
          />
          <Typography variant="textBody">
            {enumFormater.getValueByStringKey(differential || "", DifferentialType)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DrivetrainDetailsComponent;
