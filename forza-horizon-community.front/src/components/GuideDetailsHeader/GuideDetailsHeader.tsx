import { imageUtil } from "@/utilities";
import { Grid } from "@mui/material";
import Image from "next/image";
import { defaultCardImageSize } from "../constants";
import { DetailsTextBlockComponent } from "./components";
import { IGuideDetailsHeaderProps } from "./types";

const GuideDetailsHeader = ({
  thumbnail,
  title,
  authorName,
  shareCode,
  rating,
  creationDate,
}: IGuideDetailsHeaderProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Image
          alt="thumbnail"
          src={imageUtil.addJpgHeader(thumbnail || "")}
          width={defaultCardImageSize}
          height={defaultCardImageSize}
        />
      </Grid>
      <Grid item xs={12}>
        <DetailsTextBlockComponent
          title={title}
          authorName={authorName}
          shareCode={shareCode}
          rating={rating}
          creationDate={creationDate}
        />
      </Grid>
    </Grid>
  );
};

export default GuideDetailsHeader;
