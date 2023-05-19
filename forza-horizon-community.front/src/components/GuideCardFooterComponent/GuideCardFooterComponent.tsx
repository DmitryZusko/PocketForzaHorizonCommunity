import { dateFormater } from "@/utilities";
import { Grid, Rating, Typography } from "@mui/material";
import { baseTheme } from "../constants";
import { styles } from "./styles";
import { IGuideCardFooterComponentProps } from "./types";

const GuideCardFooterComponent = ({
  shareCode,
  rating,
  author,
  creationDate,
  carModel,
}: IGuideCardFooterComponentProps) => (
  <Grid container sx={styles.outerContainer}>
    <Grid item xs={6}>
      <Typography variant="textBody" color={baseTheme.palette.primary.main}>
        Car Model:
      </Typography>
    </Grid>
    <Grid item xs={6} textAlign="center">
      <Typography variant="textBody">{carModel}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="textBody" color={baseTheme.palette.primary.main}>
        Forza Share Code:
      </Typography>
    </Grid>
    <Grid item xs={6} textAlign="center" sx={styles.shareCodeBlock}>
      <Typography variant="textBody">{shareCode}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="textBody" color={baseTheme.palette.primary.main}>
        Rating
      </Typography>
    </Grid>
    <Grid item xs={6} textAlign="center">
      <Rating value={rating} readOnly />
    </Grid>
    <Grid item xs={6} textAlign="start">
      <Typography variant="smallText">{author}</Typography>
    </Grid>
    <Grid item xs={6} textAlign="end">
      <Typography variant="smallText">{dateFormater.dateToString(creationDate)}</Typography>
    </Grid>
  </Grid>
);

export default GuideCardFooterComponent;
