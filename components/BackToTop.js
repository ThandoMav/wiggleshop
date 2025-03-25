import React, { useEffect, useState } from 'react';
//import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { FaChevronUp, FaWhatsapp } from 'react-icons/fa';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <div className="flex justify-center items-center fixed gap-x-2 bottom-16 lg:bottom-8 right-8">
        <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
          <div className="w-12 h-12 rounded-sm flex items-center justify-center text-white cursor-pointer z-10 bg-red-500 hover:bg-red-600 transition-all duration-500">
            <i className="ti ti-brand-youtube text-2xl">
              <FaWhatsapp onClick={() => scrollToTop()} />
            </i>
          </div>
          </a>
        <button
          onClick={() => scrollToTop()}
          className="btn-secondary bg-primary-500 hover:bg-primary-600 flex items-center justify-center  w-12 h-12 rounded-sm cursor-pointer text-white text-sm z-10"
        >
          <FaChevronUp />
        </button>
      </div>
    )
  );
};

export default BackToTop;
