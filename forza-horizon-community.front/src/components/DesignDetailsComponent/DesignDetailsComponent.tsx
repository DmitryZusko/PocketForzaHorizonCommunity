import { imageUtil } from "@/utilities";
import { Grid, Slide } from "@mui/material";
import { defaultAnimationDuration, extendedAnimationDuration } from "../constants";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { GuideDetailsHeader } from "../GuideDetailsHeader";
import { DesignDetailsBodyComponent } from "./components";
import { IDesignDetailsComponentProps } from "./types";
import { useDesignDetailsComponent } from "./useDesignDetailsComponent";

const DesignDetailsComponent = ({ id, ...props }: IDesignDetailsComponentProps) => {
  const { isLoading, selectedEntity, galleryInView, galleryRef } = useDesignDetailsComponent({
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
                thumbnail={imageUtil.addJpgHeader(selectedEntity?.thumbnail || "")}
                title={selectedEntity?.title || ""}
                authorName={selectedEntity?.authorUsername || ""}
                shareCode={selectedEntity?.forzaShareCode || ""}
                rating={selectedEntity?.rating || 0}
                creationDate={selectedEntity?.creationDate || new Date()}
              />
            </Grid>
          </Slide>
          <Slide in={galleryInView} direction="right" timeout={extendedAnimationDuration}>
            <Grid item xs={12} ref={galleryRef}>
              <DesignDetailsBodyComponent
                description={selectedEntity?.description || ""}
                gallery={[selectedEntity?.thumbnail ?? "", ...(selectedEntity?.gallery ?? [])]}
              />
            </Grid>
          </Slide>
        </Grid>
      )}
    </>
  );
};

export default DesignDetailsComponent;
