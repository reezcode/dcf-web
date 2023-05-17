import { AuthProvider } from "@/firebase/provider/AuthProvider";
import app from "@/services/firebase";
import "@/styles/globals.css";
import { mainFont } from "@/utils/fonts";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { getAnalytics } from "firebase/analytics";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const analytics = getAnalytics(app);
  });
  return (
    <AuthProvider>
      <CookiesProvider>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <Notifications />
          <div className={mainFont.variable}>
            <NextNProgress color="#D7C0AE" />
            <Component {...pageProps} />
          </div>
        </MantineProvider>
      </CookiesProvider>
    </AuthProvider>
  );
}
