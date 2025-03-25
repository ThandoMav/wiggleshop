import React from 'react';
//import { FaWhatsapp, FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';

// import data
import { bannerBeauty } from '../utils/data';

const Banner = () => {
  // destructure banner data
  const { titlePart1, titlePart2, subtitle } = bannerBeauty;
  return (
    <section className="h-[790px] bg-hero bg-cover bg-right lg:bg-center bg-no-repeat">
      <div className="container mx-auto h-full mx-8">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-primary-500 mb-8 "
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <span className="font-thin">{titlePart1}</span> <br />
              <span className="te">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-gray text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            
          </div>
          {/* image */}
          
          {/* <div
            className="bg-purple-50 w-full h-full  bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
