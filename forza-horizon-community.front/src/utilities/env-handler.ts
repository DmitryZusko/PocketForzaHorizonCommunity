const GetServerApiUrl = () => {
  return process.env.SERVER_API_URL;
};

const getSteamImagesPath = () => {
  return process.env.STEAM_IMAGES_PATH;
};

const getGoogleId = () => {
  return process.env.GOOGLE_CLIENT_ID;
};

const envHandler = {
  GetServerApiUrl,
  getSteamImagesPath,
  getGoogleId,
};

export default envHandler;
