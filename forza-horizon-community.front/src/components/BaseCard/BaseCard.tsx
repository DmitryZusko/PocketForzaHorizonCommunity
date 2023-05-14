import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
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
    <Card sx={styles.baseCard} {...props}>
      <CardMedia
        component="img"
        image={thumbnail}
        alt="thumbnail"
        width={imageWidth}
        height={imageHeight}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sx={styles.title}>
            <Typography variant="textTitle">{cardTitle}</Typography>
          </Grid>
          <Grid item xs={12}>
            {body}
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
