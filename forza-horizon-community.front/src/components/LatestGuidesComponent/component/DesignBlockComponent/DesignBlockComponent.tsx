import {
  CardSkeletonComponent,
  defaultAnimationDuration,
  GuideCardFooterComponent,
  NavigationCard,
} from "@/components";
import { CustomTooltipComponent } from "@/components/CustomTooltipComponent";
import { imageUtil } from "@/utilities";
import { Box, BoxProps, Grow, Slide, Typography } from "@mui/material";
import { styles } from "./styles";
import useDesignBlockComponent from "./useDesignBlockComponent";

const DesignBlockComponent = (props: BoxProps) => {
  const { isLoading, latestEntities } = useDesignBlockComponent();

  return (
    <Box sx={styles.outerBox} {...props}>
      <Typography variant="textTitle" align="center" color="primary" sx={styles.headerText}>
        Newest Designs
      </Typography>
      <Box sx={styles.cardBox}>
        {isLoading ? (
          <Grow in={isLoading} unmountOnExit>
            <Box sx={styles.cardBlock}>
              <CardSkeletonComponent />
            </Box>
          </Grow>
        ) : (
          latestEntities.map((design) => (
            <Slide
              key={design.id}
              direction="right"
              in={!isLoading}
              mountOnEnter
              timeout={defaultAnimationDuration}
            >
              <Box>
                <CustomTooltipComponent title="Go to Design" {...{ sx: styles.cardBlock }}>
                  <Box maxWidth={{ xs: "90vw", md: "45vw", lg: "30vw" }}>
                    <NavigationCard
                      thumbnail={imageUtil.addJpgHeader(design.thumbnail)}
                      cardTitle={design.title}
                      navigationLink={`/guides/designs/${design.id}`}
                      target={"_self"}
                      body={<Typography variant="textBody">{design.description}</Typography>}
                      footer={
                        <GuideCardFooterComponent
                          shareCode={design.forzaShareCode}
                          rating={design.rating}
                          author={design.authorUsername}
                          creationDate={design.creationDate}
                          carModel={design.carModel}
                        />
                      }
                    />
                  </Box>
                </CustomTooltipComponent>
              </Box>
            </Slide>
          ))
        )}
      </Box>
    </Box>
  );
};

export default DesignBlockComponent;
