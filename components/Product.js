import React from 'react';
// import data
import { product } from '../utils/data';
// import components
import Cards from './Cards';

const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className="section relative">
      <div className="container mx-auto">
        {/* title & subtitle */}
        <div className="flex flex-col items-center md:flex-row lg:flex-row mb-10 lg:mb-20 lg:ml-0 mx-auto">
          <h2
            className="h2 section-title flex-1"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-delay="300"
          >
            {title}
          </h2>
          <p
            className="lead lg:max-w-[350px] flex-1"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-delay="400"
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
