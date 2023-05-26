import {
  Card,
  CardContent,
  CardMedia,
  Container,
  ContainerProps,
  Skeleton,
  Typography,
} from "@mui/material";
import { styles } from "./styles";

const CardSkeletonComponent = (props?: ContainerProps) => {
  return (
    <Card sx={styles.skeleton} {...props}>
      <CardMedia>
        <Skeleton variant="rectangular" width="100vw" height={150} />
      </CardMedia>
      <CardContent>
        <Container>
          <Typography variant="textTitle">
            <Skeleton variant="text" />
          </Typography>
          <Typography variant="textBody">
            <Skeleton variant="text" />
          </Typography>
          <Typography variant="textBody">
            <Skeleton variant="text" />
          </Typography>
          <Typography variant="textBody">
            <Skeleton variant="text" width="60%" />
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CardSkeletonComponent;
