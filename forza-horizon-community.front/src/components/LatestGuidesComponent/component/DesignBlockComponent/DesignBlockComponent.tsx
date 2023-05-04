import NavigationCard from "@/components/NavigationCard/NavigationCard";
import { Grid, Typography } from "@mui/material";
import useDesignBlockComponent from "./useDesignBlockComponent";

const DesignBlockComponent = () => {
  const { isLoading, latestDesigns } = useDesignBlockComponent();
  console.log(latestDesigns);

  return (
    <Grid container spacing={2}>
      {latestDesigns.map((design) => (
        <NavigationCard
          key={design.id}
          thumbnail={`data:image/jpeg;base64,${design.thumbnail}`}
          cardTitle={design.title}
          body={
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1">{design.carModel}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">{design.authorUsername}</Typography>
              </Grid>
            </Grid>
          }
          navigationLink=""
        />
      ))}
    </Grid>
  );
};

export default DesignBlockComponent;
