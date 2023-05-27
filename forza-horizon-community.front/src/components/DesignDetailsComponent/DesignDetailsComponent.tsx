import { imageUtil } from "@/utilities";
import { Grid, Slide } from "@mui/material";
import { defaultAnimationDuration, extendedAnimationDuration } from "../constants";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { GuideDetailsHeader } from "../GuideDetailsHeader";
import { DesignDetailsBodyComponent } from "./components";
import { IDesignDetailsComponentProps } from "./types";
import { useDesignDetailsComponent } from "./useDesignDetailsComponent";

const DesignDetailsComponent = ({ id, ...props }: IDesignDetailsComponentProps) => {
  const { isLoading, selectedDesign, galleryInView, galleryRef } = useDesignDetailsComponent({
    id,
  });
  return (
    <>
      {isLoading ? (
        <DefaultLoaderComponent />
      ) : (
        <Grid container {...props}>
          <Slide in={true} direction="right" timeout={defaultAnimationDuration}>
            <Grid item xs={12}>
              <GuideDetailsHeader
                thumbnail={imageUtil.addJpgHeader(selectedDesign?.thumbnail || "")}
                title={selectedDesign?.title || ""}
                authorName={selectedDesign?.authorUsername || ""}
                shareCode={selectedDesign?.forzaShareCode || ""}
                rating={selectedDesign?.rating || 0}
                creationDate={selectedDesign?.creationDate || new Date()}
              />
            </Grid>
          </Slide>
          <Slide in={galleryInView} direction="right" timeout={extendedAnimationDuration}>
            <Grid item xs={12} ref={galleryRef}>
              <DesignDetailsBodyComponent
                description={selectedDesign?.description || ""}
                gallery={[selectedDesign?.thumbnail ?? "", ...(selectedDesign?.gallery ?? [])]}
              />
            </Grid>
          </Slide>
        </Grid>
      )}
    </>
  );
};

export default DesignDetailsComponent;
