import { GuideCardFooterComponent, NavigationCard } from "@/components";
import { imageUtil } from "@/utilities";
import { Grid, Tooltip } from "@mui/material";
import useDesignBlockComponent from "./useDesignBlockComponent";

const DesignBlockComponent = ({ ...props }) => {
  const { isLoading, latestDesigns } = useDesignBlockComponent();

  return (
    <Grid container spacing={2} {...props}>
      {latestDesigns.map((design) => (
        <Tooltip key={design.id} title="Go to design page">
          <Grid item key={design.id} xs={12} md={3}>
            <NavigationCard
              thumbnail={imageUtil.addJpgHeader(design.thumbnail)}
              cardTitle={design.title}
              navigationLink={`designs/${design.id}`}
              body={design.description}
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
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default DesignBlockComponent;
