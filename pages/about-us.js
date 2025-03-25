import React from 'react';
import Layout from '../components/Layout';
//import iimage from '../assets/img/about.png';
//import Image from 'next/image';
import Link from 'next/link';
//import hlengiwe from '../assets/hlengiwe.jpg';
import Servicesa from '../components/BeautyServicess';
import Dr1Banner from '../components/Dr1Banner';
//import Pricing from '../components/Pricing';
//import Faq from '../components/Faq';

//import Testimonials from '../components/Testimonials';
import { BsStarFill } from 'react-icons/bs';

export default function AboutMe() {
  return (
    <Layout title="About Me - Thando Mav Web">
      <Dr1Banner /> 
      <Servicesa /> 
      <section className=" mt-16 relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              My Skillset
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              I hold a Uni Diploma in ICT in App Development and I have 4 years
              experience in MERN & Next.js web development. I am a GodSon.{' '}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="monitor" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">
                  Next.js & MERN STACK
                </h4>
              </div>
            </div>

            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="heart" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">Rest API & GraphQL</h4>
              </div>
            </div>

            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="eye" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">Hygraph & Sanity</h4>
              </div>
            </div>

            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="layout" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">
                  Illustrator, XD, Figma
                </h4>
              </div>
            </div>

            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="feather" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">Typescript</h4>
              </div>
            </div>

            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="code" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">
                  Nginx & Digital Ocean
                </h4>
              </div>
            </div>

            <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                <BsStarFill />
                <i data-feather="user-check" className="h-5 w-5 rotate-45"></i>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-lg font-medium">Photoshop&Lighroom</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-center">
            <div className="mt-6 text-center flex justify-center">
              <Link
                href="/contact"
                className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
              >
                Contact Me <BsStarFill />
                <i className="uil uil-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*<Pricing />
      <Faq />
      <Testimonials />*/}
    </Layout>
  );
}
