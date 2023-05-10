import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IBaseCardProps } from "./types";

const BaseCard = ({
  thumbnail,
  cardTitle,
  body,
  footer,
  imageWidth,
  imageHeight,
  ...props
}: IBaseCardProps) => {
  return (
    <Card {...props}>
      <CardMedia
        component="img"
        image={thumbnail}
        alt="thumbnail"
        width={imageWidth}
        height={imageHeight}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">{cardTitle}</Typography>
          </Grid>
          <Grid item xs={12}>
            {typeof body === typeof String ? <Typography variant="body1">{body}</Typography> : body}
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
