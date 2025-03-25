import React from 'react';
// import data
import { faq } from '../utils/data';

// import components
import Accordion from './Accordion';

const Faq = () => {
  // destructure faq data
  const { title, accordions } = faq;
  return (
    <section className="sectionb py-[80px] lg:py-[80px] ">
      <div className="max-w-[768px] mx-auto  lg:h-[580px] lg:pt-6">
        {/* section title */}

        <div className="text-center mb-16 lg:mb-15">
          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-down"
            data-aos-delay="20"
          >
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>

        {/* accordion list */}
        <div
          className="flex flex-col px-4"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
