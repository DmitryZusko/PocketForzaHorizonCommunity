import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { DetailsTextBlockComponent } from "./components";
import { styles } from "./styles";
import { IGuideDetailsHeaderProps } from "./types";

const GuideDetailsHeader = ({
  thumbnail,
  isDesign = true,
  title,
  authorName,
  shareCode,
  rating,
  creationDate,
  ...props
}: IGuideDetailsHeaderProps) => {
  return (
    <Grid container {...props}>
      {isDesign && (
        <Grid item xs={12} md={6} lg={8} sx={styles.outerContainer}>
          <Box sx={styles.imageBox}>
            <Image
              alt="thumbnail"
              src={thumbnail || "/tuneThumbnail.pngumbnail.png"}
              fill
              loading="lazy"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        md={isDesign && 6}
        lg={isDesign && 4}
        textAlign={isDesign ? "unset" : "center"}
      >
        <DetailsTextBlockComponent
          title={title}
          authorName={authorName}
          shareCode={shareCode}
          rating={rating}
          creationDate={creationDate}
          isDesign={isDesign}
        />
      </Grid>
    </Grid>
  );
};

export default GuideDetailsHeader;
