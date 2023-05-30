import { iconSizeLarge } from "@/components/constants";
import { Container, ContainerProps, Skeleton, Typography } from "@mui/material";

const AchievementSkeletonComponent = (props?: ContainerProps) => {
  return (
    <Container {...props}>
      <Skeleton variant="rectangular" width="100%" height={iconSizeLarge.height} />
      <Typography variant="textTitle">
        <Skeleton variant="text" />
      </Typography>
      <Typography variant="textBody">
        <Skeleton variant="text" />
      </Typography>
    </Container>
  );
};

export default AchievementSkeletonComponent;
