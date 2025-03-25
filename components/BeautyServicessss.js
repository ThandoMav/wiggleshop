import React from 'react';
import CategoryItem from './BeautyServiceItemmm';

// import data
//import { data } from '../utils/data';

const Banner = ({products, addToCartHandler}) => {
  // destructure banner data
  return (
    <section className="relative py-16">
      <div className="container relative mx-auto">
      
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
