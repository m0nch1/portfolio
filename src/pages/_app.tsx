import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';

import Layout from './layouts/index';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
