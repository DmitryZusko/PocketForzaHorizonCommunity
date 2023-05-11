import { DesignDetailsComponent } from "@/components";
import { Grid } from "@mui/material";
import { IDesignDetailsContentProps } from "./types";

const DesignDetailsContent = ({ id }: IDesignDetailsContentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DesignDetailsComponent id={id} />
      </Grid>
    </Grid>
  );
};

export default DesignDetailsContent;
