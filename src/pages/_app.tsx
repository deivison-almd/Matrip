import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  ConfigProvider.config({
    theme: {
      primaryColor: 'royalblue',
    },
  });

  return (
    <ConfigProvider>
      <Component {...pageProps} />
      <Header />
    </ConfigProvider>
  );
}

export default MyApp;
