import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const authStateSelector = ({ auth }: RootState) => auth;

export const authSelector = createSelector(authStateSelector, ({ isLogged, user }) => ({
  isLogged,
  user,
}));

export const logStateSelector = createSelector(authStateSelector, ({ isLogged }) => ({ isLogged }));

export const userSelector = createSelector(authStateSelector, ({ user }) => ({ user }));
