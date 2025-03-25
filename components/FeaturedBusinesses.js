import React from 'react';

// import data
//import { workoutsPosts } from '../utils/data';

// import components
import FeaturedBusinessesSlider from './FeaturedBusinessesSlider';

const Workouts = () => {
  // destructure workouts data
  //const { title, icon } = workoutsPosts;
  return (
    <section className="sectionn">
      {/* section title */}
      <div className="text-center mb-16 lg:mb-32">
        <h2
          className="h2 mb-3 lg:mb-[18px]"
          data-aos="fade-down"
          data-aos-delay="20"
        >
          Featured Home Service Businesses
        </h2>
        <p
          className="max-w-[480px] mx-auto"
          data-aos="fade-down"
          data-aos-delay="30"
        >
          I hold a Uni Diploma in ICT in App Development and I have 4 years
          experience in MERN & Next.js web development. I am a Son of God.
        </p>
      </div>
      {/* slider */}
      <div data-aos="fade-up" data-aos-delay="30">
        <FeaturedBusinessesSlider />
      </div>
    </section>
  );
};

export default Workouts;
