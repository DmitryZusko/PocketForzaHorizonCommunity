import Image from "next/image";

import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IDesignDetailsBodyComponentProps } from "./types";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";
import lgShare from "lightgallery/plugins/share";
import classes from "./styles.module.css";
import { baseTheme, defaultAnimationDuration } from "@/components/constants";
import { styles } from "./styles";

const DesignDetailsBodyComponent = ({ description, gallery }: IDesignDetailsBodyComponentProps) => {
  return (
    <Grid container padding={baseTheme.spacing(7)} maxWidth={"100%"}>
      <Grid item xs={12}>
        <Typography variant="textBody">{description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <LightGallery
          speed={defaultAnimationDuration}
          mousewheel
          getCaptionFromTitleOrAlt={false}
          hideScrollbar
          plugins={[lgThumbnail, lgFullscreen, lgRotate, lgShare]}
          elementClassNames={classes.imageListWrapper}
        >
          {gallery.map((item, index) => (
            <a
              href={item}
              key={index}
              style={{
                padding: baseTheme.spacing(7),
              }}
            >
              <Box sx={styles.imageBox}>
                <Image alt="image" src={item} loading="lazy" fill className={classes.image} />
              </Box>
            </a>
          ))}
        </LightGallery>
      </Grid>
    </Grid>
  );
};

export default DesignDetailsBodyComponent;
