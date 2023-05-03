import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface IBaseCard {
  thumbnail?: string;
  cardTitle: string;
  body: string;
}

const BaseCard = ({ thumbnail, cardTitle, body, ...props }: IBaseCard) => {
  return (
    <Card {...props}>
      <CardMedia component="img" image={thumbnail} alt="thumbnail" />
      <CardContent>
        <Typography variant="h5">{cardTitle}</Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default BaseCard;
