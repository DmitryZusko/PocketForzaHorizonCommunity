import { defaultAchievementSize } from "@/components/constants/applicationConstants";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { IAchievementItemComponentProps } from "../../types";

const AchievementItemComponent = ({ achievement, ...props }: IAchievementItemComponentProps) => {
  return (
    <Grid container spacing={1} {...props}>
      <Grid item xs={4}>
        <Image
          alt="icon"
          src={achievement.icon}
          width={defaultAchievementSize}
          height={defaultAchievementSize}
        />
        <Grid />
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" align="center" fontWeight={700}>
                {achievement.displayName}
              </Typography>
              <Typography variant="body2" align="center">
                {achievement.globalScorePercent}% of all players
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AchievementItemComponent;
