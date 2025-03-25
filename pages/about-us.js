import React from 'react';
import Layout from '../components/Layout';
//import iimage from '../assets/img/about.png';
//import Image from 'next/image';
//import Link from 'next/link';
//import hlengiwe from '../assets/hlengiwe.jpg';
import Servicesa from '../components/BeautyServicess';
import Dr1Banner from '../components/Dr1Banner';
//import Pricing from '../components/Pricing';
//import Faq from '../components/Faq';

//import Testimonials from '../components/Testimonials';
//import { BsStarFill } from 'react-icons/bs';

export default function AboutMe() {
  return (
    <Layout title="About Us">
      <Dr1Banner /> 
      <Servicesa /> 
      
      {/*<Pricing />
      <Faq />
      <Testimonials />*/}
    </Layout>
  );
}
