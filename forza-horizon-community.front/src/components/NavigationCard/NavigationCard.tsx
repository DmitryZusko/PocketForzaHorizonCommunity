import { CardActionArea, Link } from "@mui/material";
import { BaseCard } from "../BaseCard";
import { INavigationCardProps } from "./types";

const NavigationCard = ({
  thumbnail,
  cardTitle,
  navigationLink,
  body,
  footer,
  imageWidth,
  imageHeight,
  ...props
}: INavigationCardProps) => {
  return (
    <CardActionArea {...props}>
      <Link href={navigationLink} target="_blank" underline="none">
        <BaseCard
          thumbnail={thumbnail}
          cardTitle={cardTitle}
          body={body}
          footer={footer}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      </Link>
    </CardActionArea>
  );
};

export default NavigationCard;
