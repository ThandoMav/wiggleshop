import React from 'react';

// import icons
//import { BsStarFill } from 'react-icons/bs';
import Link from 'next/link';

const About = () => {
  return (
    <>
      
      <section className="section-sm lg:section-lg relative mb-8">
       
        <div className="container  mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-8 gap-[30px]">
          <section className="py-28 w-full table relative bg-product bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold"> Products</h3>

                <div className="mt-6">
                  <Link href={`/search`}>
                    <button
                       className="mx-auto btnBeauty btn-secondaryBeauty"
                       data-aos="fade-down"
                       data-aos-delay="700"
                     >
                      View Items 
                   </button>
                  </Link>
                </div>
            </div>
        </div>
    </section>
    <section className="py-28 w-full table relative bg-about bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">About us</h3>

                <div className="mt-6">
                  <Link href={`/about-us`}>
                    <button
                       className="mx-auto btnBeauty btn-secondaryyBeauty"
                       data-aos="fade-down"
                       data-aos-delay="700"
                     >
                      Learn more 
                   </button>
                  </Link>
                </div>
            </div>
        </div>
    </section>


          </div>
        </div>

      </section>
    </>
  );
};

export default About;
