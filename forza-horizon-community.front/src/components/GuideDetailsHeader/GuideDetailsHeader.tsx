import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { DetailsTextBlockComponent } from "./components";
import { IGuideDetailsHeaderProps } from "./types";

const GuideDetailsHeader = ({
  thumbnail,
  isTune = false,
  title,
  authorName,
  shareCode,
  rating,
  creationDate,
}: IGuideDetailsHeaderProps) => {
  return (
    <Grid container>
      {isTune ? (
        <Grid item xs={12} textAlign="center">
          <DetailsTextBlockComponent
            title={title}
            authorName={authorName}
            shareCode={shareCode}
            rating={rating}
            creationDate={creationDate}
          />
        </Grid>
      ) : (
        <>
          <Grid item xs={12} md={6} lg={8}>
            <Box
              sx={{
                width: { xs: "100vw", md: "50vw", lg: "66vw" },
                height: { xs: `${100 / 1.77}vw`, md: `${50 / 1.77}vw`, lg: `${66 / 1.77}vw` }, //1.77 means aspect ratio will be 16:9
                position: "relative",
              }}
            >
              <Image
                alt="thumbnail"
                src={thumbnail || "/TuneThumbnail.png"}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailsTextBlockComponent
              title={title}
              authorName={authorName}
              shareCode={shareCode}
              rating={rating}
              creationDate={creationDate}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default GuideDetailsHeader;
