import { defaultIconSize } from "@/components/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles";
import { IAchievementItemComponentProps } from "./types";

const AchievementItemComponent = ({ achievement, ...props }: IAchievementItemComponentProps) => {
  return (
    <Box sx={styles.achievementContainer} {...props}>
      <Image
        alt="icon"
        src={achievement.icon}
        width={defaultIconSize.width}
        height={defaultIconSize.width}
      />
      <Typography variant="textTitle" align="center">
        {achievement.displayName}
      </Typography>
      <Typography variant="textBody" align="center">
        {achievement.globalScorePercent.toFixed(2)}% of all players
      </Typography>
    </Box>
  );
};

export default AchievementItemComponent;
