import { combineReducers, configureStore, EnhancedStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carReducer } from "./car";
import { designReducer } from "./design";
import { filterSchemeReducer } from "./filter-scheme";
import { gameStatisticsReducer } from "./game-statistics";
import { guideUploaderReducer } from "./guide-uploader";
import { modalReducer } from "./modal";
import { newsReducer } from "./news";
import { selectedFilterParamsReducer } from "./selectedFilterParams";
import { settingsReducer } from "./settings";
import { tuneReducer } from "./tune";
import { authReducer } from "./auth";
import localforage from "localforage";

let store: EnhancedStore;

const persistConfig = {
  key: "root",
  storage: localforage,
  whitelist: ["auth", "filterScheme", "settings"],
};

const rootReducer = combineReducers({
  news: newsReducer,
  gameStatistics: gameStatisticsReducer,
  design: designReducer,
  tune: tuneReducer,
  car: carReducer,
  filterScheme: filterSchemeReducer,
  selectedFilterParams: selectedFilterParamsReducer,
  guideUploader: guideUploaderReducer,
  modal: modalReducer,
  settings: settingsReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = <T>(preloadedState?: T) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredActionPaths: ["payload.headers", "payload.config", "payload.request"],
        },
      }),
    preloadedState,
  });

export const initializeStore = (preloadedState?: RootState) => {
  let newStore = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    newStore = createStore({ ...store.getState(), ...preloadedState });
  }

  if (!store) {
    store = newStore;
  }

  return newStore;
};

export const initializePersistor = (store: Store) => {
  return persistStore(store);
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
