import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import Header from './Header';
import Footer from './BeautyFooter';
import Copyright from './Copyright';

import Script from 'next/script';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'HlengiZulu'}</title>
        <meta name="student blog" content="student Website" />
        <meta name="monetag" content="7dfb0ee4ccebd9518e6723ad5b453b9b" />
        <meta
          name="09687ede797df4e3ed7eca4e8f37df3852d14ac8"
          content="09687ede797df4e3ed7eca4e8f37df3852d14ac8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="goterthing"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('goomaphy.com',6594796,document.createElement('script'))
          `,
        }}
      />
      <ToastContainer position="bottom-center" limit={1} />

      <div className="'max-w-[1440px] mx-auto bg-page overflow-hidden relative'">
       {/*<Header />*/} 
       <Header />
        <div>{children}</div>
        <Footer /> 
        <Copyright />
      </div>
    </>
  );
}
