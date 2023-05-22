import {
  IConfirmEmailRequest,
  IGoogleSingInRequest,
  IResetPasswordRequest,
  ISendResetPasswordMessageRequest,
  ISignInRequest,
  ISignUpRequest,
} from "@/data-transfer-objects";
import { authService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInAsync = createAsyncThunk("auth/signIn", async (request: ISignInRequest) => {
  return authService.signInAsync(request);
});

export const signUpAsync = createAsyncThunk("auth/signUp", async (request: ISignUpRequest) => {
  return authService.signUpAsync(request);
});

export const googleSignInAsync = createAsyncThunk(
  "auth/googleSignInAsync",
  async (request: IGoogleSingInRequest) => {
    return authService.googleSignInAsync(request);
  },
);

export const sendResetPasswordMessageAsync = createAsyncThunk(
  "auth/sendResetPasswordMessageAsync",
  async (request: ISendResetPasswordMessageRequest) => {
    return authService.sendResetPasswordMessageAsync(request);
  },
);

export const resetPasswordAsync = createAsyncThunk(
  "auth/resetPasswordAsync",
  async (request: IResetPasswordRequest) => {
    return authService.resetPasswordAsync(request);
  },
);

export const confirmEmailAsync = createAsyncThunk(
  "auth/confirmEmailAsync",
  async (request: IConfirmEmailRequest) => {
    return authService.confirmEmailAsync(request);
  },
);
