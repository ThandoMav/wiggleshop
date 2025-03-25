import React from 'react';
import BlogCardItem from './BlogCardItemData';
//import { accomodations } from '../utils/data';

const About = ({posts}) => {
  return (
    <>
      <section className="relative mx-auto md:py-2 py-1">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2
              className="h2 mb-3 lg:mb-[18px]"
              data-aos="fade-down"
              data-aos-delay="20"
            >
              Stories & Tips
            </h2>
            <p
              className="max-w-[480px] mx-auto"
              data-aos="fade-down"
              data-aos-delay="30"
            >
              Stay informed and inspired with my God-driven business and
              purpose-driven life perspective.
            </p>
          </div>

          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {posts.map((post) => (
                <BlogCardItem key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
