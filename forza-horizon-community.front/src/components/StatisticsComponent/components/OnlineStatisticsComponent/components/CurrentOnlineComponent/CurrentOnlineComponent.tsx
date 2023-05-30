import { Container, Typography } from "@mui/material";
import { styles } from "./styles";
import { ICurrentOnlineComponentProps } from "./types";

const CurrentOnlineComponent = ({ totalPlayers, ...props }: ICurrentOnlineComponentProps) => {
  return (
    <Container sx={styles.currentOnlineBlock} {...props}>
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
