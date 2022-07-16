import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../Models/Layout';
import Layout from '../components/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/config';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper>
    <SWRConfig
      value={{
          fetcher: async (url: string) => instance.get(url),
      }}
    
    >
    <Component {...pageProps} />
    </SWRConfig>
    </LayoutWrapper>)
}

export default MyApp
