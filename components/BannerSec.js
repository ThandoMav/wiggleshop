import React from 'react';
import { FaWhatsapp, FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';

// import data
import { banner } from '../utils/data';

const Banner = () => {
  // destructure banner data
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white mb-8"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />
              <span className="text-primary-200">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {textBtn} 
            </button>
            </a>
            <ul className="mt-12 flex items-center gap-2">
              <li>
              <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
                  <div className="h-10 w-10 rounded-md flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500">
                    <i className="ti ti-brand-facebook text-2xl">
                      <FaFacebookF />
                    </i>
                  </div>
                </a>
              </li>
              <li>
              <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
                  <div className="h-10 w-10 rounded-md flex items-center justify-center text-white bg-pink-500 hover:bg-pink-600 transition-all duration-500">
                    <i className="ti ti-brand-instagram text-2xl">
                      <FaInstagram />
                    </i>
                  </div>
                </a>
              </li>
              <li>
              <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
                  <div className="h-10 w-10 rounded-md flex items-center justify-center text-white bg-sky-500 hover:bg-sky-600 transition-all duration-500">
                    <i className="ti ti-brand-twitter text-2xl">
                      <FaTiktok />
                    </i>
                  </div>
                </a>
              </li>
              <li>
              <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
                  <div className="h-10 w-10 rounded-md flex items-center justify-center text-white bg-red-500 hover:bg-red-600 transition-all duration-500">
                    <i className="ti ti-brand-youtube text-2xl">
                      <FaWhatsapp />
                    </i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* image */}
          <div
            className="bg-purple-50 w-full h-full  bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
