import { dateFormater } from "@/utilities";
import { Grid, Rating, Typography } from "@mui/material";
import { IGuideCardFooterComponentProps } from "./types";

const GuideCardFooterComponent = ({
  shareCode,
  rating,
  author,
  creationDate,
  carModel,
}: IGuideCardFooterComponentProps) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography variant="h6">Car Model:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" fontWeight={700}>
          {carModel}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">Forza Share Code:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" fontWeight={700}>
          {shareCode}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">Rating</Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating value={rating} readOnly />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{author}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{dateFormater.dateToString(creationDate)}</Typography>
      </Grid>
    </Grid>
  );
};

export default GuideCardFooterComponent;
