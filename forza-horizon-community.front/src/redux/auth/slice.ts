import { AccessTokenKey, RefreshTokenKey } from "@/components";
import { IUser } from "@/data-transfer-objects";
import { showToast } from "@/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { ActionWithPayload, IAuthState } from "../types";
import { googleSignInAsync, signInAsync, signUpAsync } from "./thunks";

const initialState: IAuthState = {
  isLogged: false,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogged: (state, { payload }: ActionWithPayload<boolean>) => {
      state.isLogged = payload;
    },
    setUser: (state, { payload }: ActionWithPayload<IUser | undefined>) => {
      state.user = payload;
      if (payload === undefined) state.isLogged = false;
    },
    logOut: (state) => {
      state.user = undefined;
      state.isLogged = false;
      AsyncStorage.multiRemove([AccessTokenKey, RefreshTokenKey]);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInAsync.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      AsyncStorage.multiSet([
        [AccessTokenKey, payload.accessToken],
        [RefreshTokenKey, payload.refreshToken],
      ]);
      state.isLogged = true;
    });
    builder.addCase(signUpAsync.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      AsyncStorage.multiSet([
        [AccessTokenKey, payload.accessToken],
        [RefreshTokenKey, payload.refreshToken],
      ]);
      state.isLogged = true;
      payload.isEmailSend &&
        showToast.showInfo("We've send you an email confirmation link. \nPlease, check your email");
    });
    builder.addCase(googleSignInAsync.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      AsyncStorage.multiSet([
        [AccessTokenKey, payload.accessToken],
        [RefreshTokenKey, payload.refreshToken],
      ]);
      state.isLogged = true;
    });
  },
});

export const { setIsLogged, setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
