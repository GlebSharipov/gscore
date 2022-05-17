import "assets/styles/main.scss";
import type { AppProps } from "next/app";
import React from "react";
import { Layout } from "../components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "src/store/store";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
