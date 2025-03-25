import React from 'react';
//import iimage from '../assets/img/about.png';
//import Image from 'next/image';
//import { BsStarFill } from 'react-icons/bs';
//import Link from 'next/link';

const About = () => {
  return (
    <>
      <section className="py-10 mb-10 bg-primary-500">
        <div className="container mx-auto">
        <div
        className='flex justify-center'
      >

       <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="text-white mb-4 md:text-3xl md:leading-normal text-2xl leading-normal">
            Book Your Beauty Journey Today – We Can’t Wait to Pamper You! 
            </h3>
            <button
              className="mx-auto btnBeauty btn-whiteBeauty text-primary-500"
              data-aos="fade-down"
              data-aos-delay="700"
            >
               Book Now! 
            </button>
        </div>
        
        
      </div>
        </div>
      </section>  
    </>
  );
};

export default About;