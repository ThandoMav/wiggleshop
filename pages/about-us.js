import React from 'react';
import Layout from '../components/Layout';
//import iimage from '../assets/img/about.png';
//import Image from 'next/image';
//import Link from 'next/link';
//import hlengiwe from '../assets/hlengiwe.jpg';
import Servicesa from '../components/BeautyServicess';
//import Dr1Banner from '../components/Dr1Banner';
//import Pricing from '../components/Pricing';
//import Faq from '../components/Faq';

//import Testimonials from '../components/Testimonials';
//import { BsStarFill } from 'react-icons/bs';

export default function AboutMe() {
  return (
    <Layout title="About Us">
      <section className="wrapper !bg-primary-700 h-[500px]">
      <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
        <div className="flex flex-wrap mx-[-15px] mt-32">
          <div className="md:w-9/12 lg:w-7/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">About Us </h1>
            <p className="lead xxl:!px-[2.5rem] leading-[1.65] text-[0.9rem] font-medium">
            Nestled in the heart of Nelspruit Mbombela, our salon offers a wide range of day-to-day beauty treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
      <Servicesa /> 
      
      {/*<Pricing />
      <Faq />
      <Testimonials />*/}
    </Layout>
  );
}
