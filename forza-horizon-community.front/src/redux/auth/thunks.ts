import { ISignInRequest, ISignUpRequest } from "@/data-transfer-objects";
import { authService } from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInAsync = createAsyncThunk("auth/signIn", async (request: ISignInRequest) => {
  return authService.signInAsync(request);
});

export const signUpAsync = createAsyncThunk("auth/signUp", async (request: ISignUpRequest) => {
  return authService.signUpAsync(request);
});
