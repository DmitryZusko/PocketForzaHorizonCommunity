import { AccessTokenKey, RefreshTokenKey } from "@/components";
import { BadRequestError, UnauthorizedError } from "@/errors";
import { setIsLogged } from "@/redux";
import { authService } from "@/services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import showToast from "../show-toast";
import { DefaultErrorMessage, EnterCredentialsMessage, InvalidInput } from "./constants";
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
    showToast.showPromise(promise, loadingMessage, successMessage, errorMessage);
    return promise;
  }

  const promise = defaultErrorHandler(action, dispatch);
  showToast.showPromise(promise, loadingMessage, successMessage, errorMessage);
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
  } catch (error) {
    //if promise canceled in the thunk
    if (error.message === "canceled") return;

    if (error instanceof UnauthorizedError) {
      return refreshTokenHandler(action, dispatch);
    }
    showToast.showError(DefaultErrorMessage);
  }
};

const inputFormErrorHandler = async (
  action: ThunkActions,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
  try {
    return await action();
  } catch (error) {
    if (error.message === "canceled") return;

    if (error instanceof UnauthorizedError) {
      return refreshTokenHandler(action, dispatch);
    }
    if (error instanceof BadRequestError) {
      showToast.showError(InvalidInput);
      return;
    }
    showToast.showError(DefaultErrorMessage);
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
    showToast.showError(EnterCredentialsMessage);
  }
};

const errorHandler = { handleError };

export default errorHandler;
