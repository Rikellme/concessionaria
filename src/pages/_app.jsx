import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

import { Toaster } from "react-hot-toast";
// import { Cookie } from "@/components/Cookie";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Concessionária</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
