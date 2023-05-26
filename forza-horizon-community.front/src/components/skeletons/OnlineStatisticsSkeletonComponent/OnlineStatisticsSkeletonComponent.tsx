import { Container, ContainerProps, Skeleton, Typography } from "@mui/material";

const OnlineStatisticsSkeletonComponent = (props?: ContainerProps) => {
  return (
    <Container {...props}>
      <Typography variant="textTitle">
        <Skeleton variant="text" />
      </Typography>
      <Skeleton variant="rounded" height={150} width={"100%"} />
      <Typography variant="textBody">
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
  );
};

export default OnlineStatisticsSkeletonComponent;
