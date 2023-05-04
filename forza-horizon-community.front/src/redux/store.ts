import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore, EnhancedStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { designReducer } from "./design";
import { gameStatisticsReducer } from "./game-statistics";
import { newsReducer } from "./news";

let store: EnhancedStore;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = combineReducers({
  news: newsReducer,
  gameStatistics: gameStatisticsReducer,
  design: designReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = <T>(preloadedState?: T) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
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
