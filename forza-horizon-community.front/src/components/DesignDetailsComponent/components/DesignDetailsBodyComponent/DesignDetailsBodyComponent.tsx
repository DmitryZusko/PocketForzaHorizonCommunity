import { imageUtil } from "@/utilities";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { IDesignDetailsBodyComponentProps } from "./types";

const DesignDetailsBodyComponent = ({ description, gallery }: IDesignDetailsBodyComponentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">{description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageList variant="masonry" cols={3} gap={5}>
          {gallery.map((item, index) => (
            <ImageListItem key={index}>
              <Image
                src={imageUtil.addJpgHeader(item)}
                alt="image"
                loading="lazy"
                width={500}
                height={500}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default DesignDetailsBodyComponent;
