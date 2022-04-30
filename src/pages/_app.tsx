import "assets/styles/main.scss";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { Layout } from "../components";
import { userData } from "src/components/utils/mock";

function MyApp({ Component, pageProps }: AppProps) {
  const [userName, setUserName] = useState(userData);

  return (
    <Layout userName={userName.user}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
