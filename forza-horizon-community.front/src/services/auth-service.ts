import {
  IRefreshTokenRequest,
  ISignUpRequest,
  IUser,
  ISignInRequest,
} from "@/data-transfer-objects";
import { ISignInResponse } from "@/data-transfer-objects/responses/AuthResponse/SignInResponse";
import { ITokenResponse } from "@/data-transfer-objects/responses/AuthResponse/TokenResponse";
import { customAxios } from "@/utilities";

const signInAsync = async (request: ISignInRequest) => {
  const axios = await customAxios.getAxiosInstance();
  const response = await axios.post<ITokenResponse>("authentication/sign-in", {
    email: request.email,
    password: request.password,
  });

  const user = await getUserAsync(response.data.accessToken);

  const result: ISignInResponse = {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
    user: user.data,
  };

  return result;
};

const signUpAsync = async (request: ISignUpRequest) => {
  const axios = await customAxios.getAxiosInstance();
  const response = await axios.post<ITokenResponse>("authentication/sign-up", {
    email: request.email,
    username: request.username,
    password: request.password,
  });

  const user = await getUserAsync(response.data.accessToken);

  const result: ISignInResponse = {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
    user: user.data,
  };

  return result;
};

const refreshTokenAsync = async (request: IRefreshTokenRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.post<ITokenResponse>("authentication/refresh", {
    accessToken: request.accessToken,
    refreshToken: request.refreshToken,
  });
};

const getUserAsync = async (accessToken: string) => {
  const axios = await customAxios.getAxiosInstance();
  axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

  return axios.get<IUser>("authentication/me");
};

const authService = { signInAsync, signUpAsync, refreshTokenAsync };

export default authService;
