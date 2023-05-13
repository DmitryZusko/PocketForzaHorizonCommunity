import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { initializePersistor, initializeStore } from "@/redux";
import { LeftBottomToastComponent } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  const store = useMemo(() => {
    return initializeStore(pageProps.internal?.initializeReduxState);
  }, [pageProps.internal?.initializeReduxState]);

  const persistor = useMemo(() => {
    return initializePersistor(store);
  }, [store]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
        <LeftBottomToastComponent />
      </PersistGate>
    </Provider>
  );
}
