import '@/styles/globals.css'
import { mainFont } from '@/utils/fonts';
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mainFont.variable}>
      <NextNProgress color='#D7C0AE'/> 
      <Component {...pageProps} /> 
    </div>
  );
}
