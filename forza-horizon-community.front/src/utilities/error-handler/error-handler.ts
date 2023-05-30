import { AccessTokenKey, RefreshTokenKey } from "@/components";
import { BadRequestError, UnauthorizedError } from "@/errors";
import { setIsLogged } from "@/redux";
import { authService } from "@/services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { DefaultErrorMessage, EnterCredentialsMessage, InvalidInput } from "../toast";
import toastHandler from "../toast/toastHandler";
import { ThunkActions } from "./types";

const handleError = (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
  inputFormHandler: boolean = false,
  withPromiseToast: boolean = false,
  loadingMessage?: string,
  successMessage?: string,
  errorMessage?: string,
) => {
  if (withPromiseToast) {
    return handleWithPromiseToast(
      action,
      dispatch,
      inputFormHandler,
      loadingMessage,
      successMessage,
      errorMessage,
    );
  }

  return handleDefault(action, dispatch, inputFormHandler);
};

const handleWithPromiseToast = (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
  inputFormHandler: boolean,
  loadingMessage?: string,
  successMessage?: string,
  errorMessage?: string,
) => {
  if (inputFormHandler) {
    const promise = inputFormErrorHandler(action, dispatch);
    toastHandler.showPromise(promise, loadingMessage, successMessage, errorMessage);
    return promise;
  }

  const promise = defaultErrorHandler(action, dispatch);
  toastHandler.showPromise(promise, loadingMessage, successMessage, errorMessage);
  return promise;
};

const handleDefault = (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
  inputFormHandler: boolean,
) => {
  if (inputFormHandler) {
    return inputFormErrorHandler(action, dispatch);
  }

  return defaultErrorHandler(action, dispatch);
};

const defaultErrorHandler = async (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
  try {
    return await action();
  } catch (error: any) {
    //if promise canceled in the thunk
    if (error.message === "canceled") return;

    if (error instanceof UnauthorizedError) {
      return refreshTokenHandler(action, dispatch);
    }
    toastHandler.showError(DefaultErrorMessage);
  }
};

const inputFormErrorHandler = async (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
  try {
    return await action();
  } catch (error: any) {
    if (error.message === "canceled") return;

    if (error instanceof UnauthorizedError) {
      return refreshTokenHandler(action, dispatch);
    }
    if (error instanceof BadRequestError) {
      toastHandler.showError(InvalidInput);
      return;
    }
    toastHandler.showError(DefaultErrorMessage);
    return;
  }
};

const refreshTokenHandler = async (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
  try {
    const result = await authService.refreshTokenAsync({
      accessToken: (await AsyncStorage.getItem(AccessTokenKey)) || "",
      refreshToken: (await AsyncStorage.getItem(RefreshTokenKey)) || "",
    });

    await AsyncStorage.multiSet([
      [AccessTokenKey, result.data.accessToken],
      [RefreshTokenKey, result.data.refreshToken],
    ]);

    return await action();
  } catch (error) {
    AsyncStorage.multiRemove([AccessTokenKey, RefreshTokenKey]);
    dispatch(setIsLogged(false));
    toastHandler.showError(EnterCredentialsMessage);
  }
};

const errorHandler = { handleError };

export default errorHandler;
