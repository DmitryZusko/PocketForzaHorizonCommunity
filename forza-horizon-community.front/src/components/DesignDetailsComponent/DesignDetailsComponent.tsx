import { imageUtil } from "@/utilities";
import { Grid } from "@mui/material";
import { GuideDetailsHeader } from "../GuideDetailsHeader";
import { DesignDetailsBodyComponent } from "./components";
import { IDesignDetailsComponentProps } from "./types";
import { useDesignDetailsComponent } from "./useDesignDetailsComponent";

const DesignDetailsComponent = ({ id }: IDesignDetailsComponentProps) => {
  const { isLoading, selectedDesign } = useDesignDetailsComponent({ id });
  return (
    <>
      {isLoading ? null : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <GuideDetailsHeader
              thumbnail={imageUtil.addJpgHeader(selectedDesign?.thumbnail)}
              title={selectedDesign?.title || ""}
              authorName={selectedDesign?.authorUsername || ""}
              shareCode={selectedDesign?.forzaShareCode || ""}
              rating={selectedDesign?.rating || 0}
              creationDate={selectedDesign?.creationDate || new Date()}
            />
          </Grid>
          <Grid item xs={12}>
            <DesignDetailsBodyComponent
              description={selectedDesign?.description || ""}
              gallery={selectedDesign?.gallery || []}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DesignDetailsComponent;
