import React from 'react';

// import data
//import { pricing } from '../utils/data';

// import components
import PlanList from './PlanList';

const Pricing = ({plans}) => {
  // destructure pricing
  //const {  title, plans } = pricing;
  return (
    <section className="section">
      {/* section title */}

<div className="text-center mb-16 lg:mb-16">

          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-down"
            data-aos-delay="20"
          >
            Pricing Plan<span className='text-primary-200'>.</span>
          </h2>
        </div>

      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
