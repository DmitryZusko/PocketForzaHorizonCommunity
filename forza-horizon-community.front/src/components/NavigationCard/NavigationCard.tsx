import { CardActionArea } from "@mui/material";
import Link from "next/link";
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
      <Link href={navigationLink}>
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
