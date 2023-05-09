import NavigationCard from "@/components/NavigationCard/NavigationCard";
import { Grid, Tooltip } from "@mui/material";
import useDesignBlockComponent from "./useDesignBlockComponent";
import { GuideCardFooterComponent } from "@/components/GuideCardFooterComponent/GuideCardFooterComponent";
import { dateFormater } from "@/utilities/date-formater";
import imageConverter from "@/utilities/imageConverter";

const DesignBlockComponent = ({ ...props }) => {
  const { isLoading, latestDesigns } = useDesignBlockComponent();

  return (
    <Grid container spacing={2} {...props}>
      {latestDesigns.map((design) => (
        <Tooltip key={design.id} title="Go to design page">
          <Grid item key={design.id} xs={12} md={3}>
            <NavigationCard
              thumbnail={imageConverter.addJpgHeader(design.thumbnail)}
              cardTitle={design.title}
              navigationLink=""
              body={design.description}
              footer={
                <GuideCardFooterComponent
                  shareCode={design.forzaShareCode}
                  rating={design.rating}
                  author={design.authorUsername}
                  creationDate={dateFormater.dateToString(design.creationDate)}
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
