import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import data
import { accomodations } from '../utils/data';
// import icons
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Courses = () => {
  return (
    <section className="sectionn mt-5 sm:mb-30 mb-40">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center mb-16 lg:mb-32">
          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-down"
            data-aos-delay="20"
          >
            Popular Courses
          </h2>
          <p
            className="max-w-[480px] mx-auto"
            data-aos="fade-down"
            data-aos-delay="30"
          >
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>
        {/* course list */}
        <div className="flex flex-col justify-center lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
          {accomodations.map((item, index) => {
            const {
              image,
              title,
              exerpt,
              price,
              institution,
              nearerPlaces,
              link,
              delay,
            } = item;
            return (
              <Link href={`/posts/${link}`} key={index}>
                <div
                  className="w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                    <Image
                      src={image}
                      width={500}
                      height={500}
                      alt="responsive"
                    ></Image>
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                      {title}
                    </h4>
                    <h6 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                      R{price}
                    </h6>
                    <p>{exerpt}</p>

                    <div className="flex mt-2 gap-x-2 text-orange">
                      <BsStarFill />
                      <p>{nearerPlaces}</p>
                    </div>
                    <div className="flex mt-2 gap-x-2 text-orange">
                      <BsStarFill />
                      <p>{institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                    {/* stars */}
                    <div className="flex gap-x-2 text-orange">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                    <a className="font-medium" href={`/posts/${link}`}>
                      {link}
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link className="font-medium" href="#">
            <button
              className="btn btn-sm btn-orange"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Browse all
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
