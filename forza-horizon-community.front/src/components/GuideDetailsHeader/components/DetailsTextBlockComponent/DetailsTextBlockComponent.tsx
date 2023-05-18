import { baseTheme } from "@/components/constants";
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
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="textTitle">{title}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="textBody" color={baseTheme.palette.primary.main}>
          Author:
        </Typography>
      </Grid>

      <Grid item xs={6} textAlign="center">
        <Typography variant="textBody">{authorName}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="textBody" color={baseTheme.palette.primary.main}>
          Forza Share Code:
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <Typography variant="textBody">{shareCode}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="textBody" color={baseTheme.palette.primary.main}>
          Rating:
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <Typography variant="textBody">{rating}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="textBody" color={baseTheme.palette.primary.main}>
          Created:
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <Typography variant="textBody">{dateFormater.dateToString(creationDate)}</Typography>
      </Grid>
    </Grid>
  );
};

export default DetailsTextBlockComponent;
