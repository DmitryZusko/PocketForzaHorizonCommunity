import NavigationCard from "@/components/NavigationCard/NavigationCard";
import { Grid, Tooltip, Typography } from "@mui/material";
import useDesignBlockComponent from "./useDesignBlockComponent";
import { Star } from "@mui/icons-material";

const DesignBlockComponent = () => {
  const { isLoading, latestDesigns } = useDesignBlockComponent();

  console.log(latestDesigns[0]);

  return (
    <Grid container spacing={2}>
      {latestDesigns.map((design) => (
        <Tooltip key={design.id} title="Go to design page">
          <Grid item key={design.id} xs={12} md={3}>
            <NavigationCard
              thumbnail={`data:image/jpeg;base64,${design.thumbnail}`}
              cardTitle={design.title}
              navigationLink=""
              body=""
              footer={
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <Typography variant="body1">{design.carModel}</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body1">{design.authorUsername}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Star />
                    <Typography variant="body1">{design.rating}</Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default DesignBlockComponent;
