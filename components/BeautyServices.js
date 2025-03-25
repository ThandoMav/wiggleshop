import React from 'react';

// import icons
import { BsStarFill } from 'react-icons/bs';
import Link from 'next/link';

const About = () => {
  return (
    <>
      
      <section className="section-sm lg:section-lg relative">
       
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Welcome to Energizing Beauty
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              At Energizing Beauty, we believe in making self-care a part of your daily routine. Whether you&apos;re 
              in need of a rejuvenating facial, a soothing massage, or an indulgent manicure and pedicure, 
              our team of experienced therapists is here to help you feel and look your best every day. 
              Nestled in the heart of Nelspruit Mbombela, our salon offers a wide range of day-to-day 
              beauty treatments that leave you feeling refreshed, confident, and revitalized.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 mt-8 gap-[30px]">
            <div className="text-center md:px-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-eye"></i>
                <BsStarFill className="afhf" />
              </div>

              <div className="content mt-7">
                <Link
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  <div>Facials That Glow</div>
                </Link>
              </div>
            </div>

            <div className="text-center md:px-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <BsStarFill className="ale" />{' '}
                <i className="uil uil-syringe"></i>
              </div>

              <div className="content mt-7">
                <Link
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  <div> Massage Therapy for Total Relaxation </div>
                </Link>
              </div>
            </div>

            <div className="text-center md:px-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <BsStarFill className="addle" />{' '}
                <i className="uil uil-thermometer"></i>
              </div>

              <div className="content mt-7">
                <Link
                  href="page-services.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  <div>Pedicures and Manicures – Perfectly Polished</div>
                </Link>
              </div>
            </div>

            <div className="text-center md:px-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <BsStarFill className="addle" />{' '}
                <i className="uil uil-thermometer"></i>
              </div>

              <div className="content mt-7">
                <Link
                  href="page-services.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  <div>Smooth Skin with Waxing and Tinting</div>
                </Link>
              </div>
            </div>
            <div className="text-center md:px-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <BsStarFill className="addle" />{' '}
                <i className="uil uil-thermometer"></i>
              </div>

              <div className="content mt-7">
                <Link
                  href="page-services.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  <div>Luscious Nails & Lash Extensions</div>
                </Link>
              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  );
};

export default About;
