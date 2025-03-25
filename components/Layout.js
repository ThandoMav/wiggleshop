import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import Header from './Header';
import Footer from './BeautyFooter';
import Copyright from './Copyright';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Salon'}</title>
        <meta name="student blog" content="student Website" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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
