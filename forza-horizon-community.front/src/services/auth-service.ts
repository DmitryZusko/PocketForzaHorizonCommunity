import {
  IRefreshTokenRequest,
  ISignUpRequest,
  IUser,
  ISignInRequest,
  IGoogleSingInRequest,
  ISignUpResponse,
  ITokenResponse,
  ISignInResponse,
  ISendResetPasswordMessageRequest,
  IResetPasswordRequest,
  IConfirmEmailRequest,
} from "@/data-transfer-objects";
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

  const emailResult = await sendEmailConfirmationMessageAsync(
    response.data.accessToken,
    user.data.email,
  );

  const result: ISignUpResponse = {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
    user: user.data,
    isEmailSend: emailResult.status === 200 ? true : false,
  };

  return result;
};

const googleSignInAsync = async (request: IGoogleSingInRequest) => {
  const axios = await customAxios.getAxiosInstance();
  const response = await axios.post<ITokenResponse>("authentication/google-sign-in", {
    Googletoken: request.googleToken,
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

const sendEmailConfirmationMessageAsync = async (accessToken: string, destinationEmail: string) => {
  const axios = await customAxios.getAxiosInstance();
  axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

  return axios.post("authentication/send-verification-message", {
    DestinationEmail: destinationEmail,
  });
};

const confirmEmailAsync = async (request: IConfirmEmailRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get("authentication/verify-email", {
    params: { UserId: request.userId, ConfirmationToken: request.confirmationToken },
  });
};

const sendResetPasswordMessageAsync = async (request: ISendResetPasswordMessageRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.post("authentication/reset-password-message", { Email: request.email });
};

const resetPasswordAsync = async (request: IResetPasswordRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.post("authentication/reset-password", {
    UserId: request.userId,
    ResetToken: request.resetToken,
    Password: request.password,
  });
};

const authService = {
  signInAsync,
  signUpAsync,
  googleSignInAsync,
  refreshTokenAsync,
  confirmEmailAsync,
  sendResetPasswordMessageAsync,
  resetPasswordAsync,
};

export default authService;
