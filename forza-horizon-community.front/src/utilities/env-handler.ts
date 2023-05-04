const GetServerApiUrl = () => {
  return process.env.NEXT_PUBLIC_SERVER_API_URL;
};

const getSteamImagesPath = () => {
  return process.env.NEXT_PUBLIC_STEAM_IMAGES_PATH;
};

const envHandler = {
  GetServerApiUrl,
  getSteamImagesPath,
};

export default envHandler;
