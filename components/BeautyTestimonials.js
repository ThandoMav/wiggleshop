import React from 'react';
// import data
import { testimonialsSalon } from '../utils/data';
// import components
import ClientSlider from './BeautyClientSlider';

const Testimonials = () => {
  // destructure testimonials
  const { clients } = testimonialsSalon;
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="title h2 mb-10 lg:mb-20 text-center max-w-[920px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Client Testimonials
        </h2>
        {/* slider */}
        <div data-aos="fade-up" data-aos-delay="400">
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
