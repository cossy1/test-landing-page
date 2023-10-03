import AppLayout from "@/app/layout";
import type { AppProps } from "next/app";
import GlobalStyle from "../../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../../themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}
