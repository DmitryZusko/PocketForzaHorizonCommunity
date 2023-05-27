import { ImageSize } from "lightgallery/lg-utils";
import { IImageSize } from "./types";

//accessibility
export const defaultPageSize = 15;

export const defaultRowsPerPageOptions = [5, 15, 30, 50, 100];

export const defaultCardDescriptionLimit = 200;

export const defaultNewsLength = 500;

export const defaultNewsAmount = 9;

export const defaultLatestGuidesAmount = 3;

export const defaultAchievementsAmount = 10;

export const defaultPriceStep = 5000;

export const defaultSearchTreshhold = 3;

export const defaultRatingPrecision = 0.5;

export const defaultScrollButtonTreshhold = 30;

//animations
export const defaultAnimationDuration = 500;

export const longerAnimationDuration = 750;

export const extendedAnimationDuration = 1000;

//images
export const defaultIconSize: IImageSize = {
  width: 100,
  height: 100,
};

export const iconSizeLarge: ImageSize = {
  width: 150,
  height: 150,
};

export const defaultLogoSize: ImageSize = {
  width: 150,
  height: 100,
};

export const smallLogoSize: ImageSize = {
  width: 125,
  height: 75,
};

export const defaultImageSize: IImageSize = {
  width: 300,
  height: 300,
};

export const imageSizeSmall: IImageSize = {
  width: 225,
  height: 225,
};

export const defaultChartSize: ImageSize = {
  width: 400,
  height: 400,
};

export const maxImageSizeInMB = 3;

//application settings
export const AccessTokenKey = "@accessToken";

export const RefreshTokenKey = "@refreshToken";
