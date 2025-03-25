import React from 'react';
import CategoryItem from './BeautyServiceItemmm';

// import data
//import { data } from '../utils/data';

const Banner = ({products, addToCartHandler}) => {
  // destructure banner data
  return (
    <section className="relative py-16">
      <div className="container relative mx-auto">
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

        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px] flex justify-center text-center px-6 ld:px-16">
          {products.map((product) => (
            <CategoryItem key={product._id} product={product} addToCartHandler={addToCartHandler} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
