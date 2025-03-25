import React from 'react';
import { FaWhatsapp, FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';
//import Link from 'next/link';


const Socials = () => {
  return (
    <section className="bg">
      
            <ul className="mt-12 flex items-center gap-2 z-10 pl-6 lg:pl-0">
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
    </section>
  );
};

export default Socials;
