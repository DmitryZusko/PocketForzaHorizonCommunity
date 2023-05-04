import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IBaseCard } from "./types";

const BaseCard = ({ thumbnail, cardTitle, body, footer, ...props }: IBaseCard) => {
  return (
    <Card {...props}>
      <CardMedia component="img" image={thumbnail} alt="thumbnail" />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">{cardTitle}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{body}</Typography>
          </Grid>
          <Grid item xs={12}>
            {footer}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BaseCard;
