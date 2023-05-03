import { CardActionArea, Link } from "@mui/material";
import BaseCard from "../BaseCard/BaseCard";
import { INavigationCard } from "./types";

const NavigationCard = ({
  thumbnail,
  cardTitle,
  body,
  navigationLink,
  ...props
}: INavigationCard) => {
  return (
    <CardActionArea {...props}>
      <Link href={navigationLink} target="_blank" underline="none">
        <BaseCard thumbnail={thumbnail} cardTitle={cardTitle} body={body} />
      </Link>
    </CardActionArea>
  );
};

export default NavigationCard;
