import '@/styles/globals.css'
import { mainFont } from '@/utils/fonts';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Notifications />
        <div className={mainFont.variable}>
          <NextNProgress color='#D7C0AE'/> 
          <Component {...pageProps} /> 
        </div>
      </MantineProvider>    
    </CookiesProvider>
  );
}
