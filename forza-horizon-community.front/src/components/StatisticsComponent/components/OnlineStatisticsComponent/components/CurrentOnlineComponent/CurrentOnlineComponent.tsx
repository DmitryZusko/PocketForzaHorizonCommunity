import { Container, Typography } from "@mui/material";
import { styles } from "./styles";
import { ICurrentOnlineComponentProps } from "./types";

const CurrentOnlineComponent = ({ totalPlayers }: ICurrentOnlineComponentProps) => {
  return (
    <Container sx={styles.currentOnlineBlock}>
      <Typography variant="textTitle" align="center">
        Current online
      </Typography>
      <Typography variant="textBody" align="center">
        {totalPlayers} players
      </Typography>
    </Container>
  );
};

export default CurrentOnlineComponent;
