import React from 'react';
import Image from 'next/image';
// import data
import { join } from '../utils/data';

const Join = () => {
  // destructure join data
  const { image, subtitle, btnText } = join;
  return (
    <section className="bg-neutral-500 min-h-[537px]">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          {/* image */}
          <div
            className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <Image
              src={image}
              width={500}
              height={500}
              alt="responsive"
            ></Image>
          </div>
          {/* text */}
          <div
            className="max-w-[350px] lg:max-w-[492px] ml-[30px]"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <h2 className="h1 md:text-[60px] md:leading-[62px] text-white mb-4 lg:mb-6">
              Website <span className="text-primary-200">&</span> Marketing?
            </h2>
            <p className="text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">
              {subtitle}
            </p>
            <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
            <button className="btn btn-secondary btn-lg">{btnText}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
