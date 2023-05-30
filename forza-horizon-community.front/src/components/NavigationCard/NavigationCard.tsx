import { CardActionArea } from "@mui/material";
import { BaseCard } from "../BaseCard";
import { CustomLinkComponent } from "../CustomLinkComponent";
import { INavigationCardProps } from "./types";

const NavigationCard = ({
  thumbnail,
  cardTitle,
  navigationLink,
  target,
  body,
  footer,
  imageWidth,
  imageHeight,
  ...props
}: INavigationCardProps) => {
  return (
    <CardActionArea>
      <CustomLinkComponent href={navigationLink} target={target}>
        <BaseCard
          thumbnail={thumbnail}
          cardTitle={cardTitle}
          body={body}
          footer={footer}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          {...props}
        />
      </CustomLinkComponent>
    </CardActionArea>
  );
};

export default NavigationCard;
