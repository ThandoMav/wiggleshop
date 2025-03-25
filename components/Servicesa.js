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
              My Services
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
            Achieve growth, efficiency, and work-life balance with cutting-edge web solutions, automation, and passive income strategies .
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
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
                  <div>Web Development</div>
                </Link>
                <p className="text-slate-400 mt-3">
                SEO-optimized, modern websites designed to rank high and convert visitors into patients. Websites optimized for patient bookings.
                </p>
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
                  <div>Automation & Funnels</div>
                </Link>
                <p className="text-slate-400 mt-3">
                  Automated customer onboarding and retention systems to save time and boost efficiency.
                </p>
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
                  <div>Passive Income Strategies</div>
                </Link>
                <p className="text-slate-400 mt-3">
                 Monetize your expertise with digital ads, products, and other revenue streams.
                </p>
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
                  <div>Social Media Marketing</div>
                </Link>
                <p className="text-slate-400 mt-3">
                 Engaging campaigns to expand your reach and build patient trust.
                </p>
              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  );
};

export default About;
