// pages/_app.js
import Layout from '../components/Layout/Layout';
import '../globals.css'
import React from "react";
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps)  {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
