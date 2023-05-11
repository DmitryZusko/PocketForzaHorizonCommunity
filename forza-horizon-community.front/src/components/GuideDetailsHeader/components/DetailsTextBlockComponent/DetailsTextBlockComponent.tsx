import { dateFormater } from "@/utilities";
import { Grid, Typography } from "@mui/material";
import { IDetailsTextBlockComponentProps } from "./types";

const DetailsTextBlockComponent = ({
  title,
  authorName,
  shareCode,
  rating,
  creationDate,
}: IDetailsTextBlockComponentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" fontSize={700}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Author:</Typography>
        <Typography variant="h6">{authorName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Forza Share Code:</Typography>
        <Typography variant="h6">{shareCode}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Rating:</Typography>
        <Typography variant="h6">{rating}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{dateFormater.dateToString(creationDate)}</Typography>
      </Grid>
    </Grid>
  );
};

export default DetailsTextBlockComponent;
