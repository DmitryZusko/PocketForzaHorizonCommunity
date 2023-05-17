import { CardSkeletonComponent, GuideCardFooterComponent, NavigationCard } from "@/components";
import { CustomTooltipComponent } from "@/components/CustomTooltipComponent";
import { imageUtil } from "@/utilities";
import { Box, Grow, Slide, Typography } from "@mui/material";
import { styles } from "./styles";
import useDesignBlockComponent from "./useDesignBlockComponent";

const DesignBlockComponent = ({ ...props }) => {
  const { isLoading, latestDesigns } = useDesignBlockComponent();

  return (
    <Box sx={styles.outerBox}>
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
          latestDesigns.map((design) => (
            <Slide key={design.id} direction="right" in={!isLoading} mountOnEnter timeout={500}>
              <Box>
                <CustomTooltipComponent title="Go to Design" sx={styles.cardBlock}>
                  <Box>
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
