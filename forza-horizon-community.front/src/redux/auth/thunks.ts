import {
  IConfirmEmailRequest,
  IGoogleSingInRequest,
  IResetPasswordRequest,
  ISendResetPasswordMessageRequest,
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
} from "@/data-transfer-objects";
import { IRegisterUserRequest } from "@/data-transfer-objects/requests/AuthRequests/RegisterUserRequest";
import { authService } from "@/services";
import { EmailConfirmationMessage, errorHandler, SignInMessage, SignUpMessage } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const signInAsync = createAsyncThunk(
  "auth/signIn",
  async (request: ISignInRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.signInAsync(request),
      dispatch,
      true,
      true,
      SignInMessage,
    ) as Promise<ISignInResponse>;
  },
);

export const signUpAsync = createAsyncThunk(
  "auth/signUp",
  async (request: ISignUpRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.signUpAsync(request),
      dispatch,
      true,
      true,
      SignUpMessage,
    ) as Promise<ISignUpResponse>;
  },
);

export const googleSignInAsync = createAsyncThunk(
  "auth/googleSignInAsync",
  async (request: IGoogleSingInRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.googleSignInAsync(request),
      dispatch,
      false,
      true,
      SignInMessage,
    ) as Promise<ISignInResponse>;
  },
);

export const sendResetPasswordMessageAsync = createAsyncThunk(
  "auth/sendResetPasswordMessageAsync",
  async (request: ISendResetPasswordMessageRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.sendResetPasswordMessageAsync(request),
      dispatch,
    ) as Promise<AxiosResponse<any, any>>;
  },
);

export const resetPasswordAsync = createAsyncThunk(
  "auth/resetPasswordAsync",
  async (request: IResetPasswordRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.resetPasswordAsync(request),
      dispatch,
      true,
    ) as Promise<AxiosResponse<any, any>>;
  },
);

export const confirmEmailAsync = createAsyncThunk(
  "auth/confirmEmailAsync",
  async (request: IConfirmEmailRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.confirmEmailAsync(request),
      dispatch,
      false,
      true,
      EmailConfirmationMessage,
    ) as Promise<AxiosResponse<any, any>>;
  },
);

export const registerFunctionUserAsync = createAsyncThunk(
  "auth/registerFunctionUserAsync",
  async (request: IRegisterUserRequest, { dispatch }) => {
    return errorHandler.handleError(
      () => authService.registerFunctionUserAsync(request),
      dispatch,
      true,
      true,
      SignUpMessage,
    );
  },
);
