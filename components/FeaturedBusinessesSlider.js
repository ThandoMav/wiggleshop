import React from 'react';
// import data
import { workoutsPosts } from '../utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const FeaturedBusinessesSlider = () => {
  // destructure data
  const { programs } = workoutsPosts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, idx) => {
        // destructure program
        const { image, name, category } = program;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative "
            key={idx}
          >
            <Link href={`/posts/${name}`}>
              <div
                className="w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition"
                data-aos="fade-up"
                data-aos-delay="100"
                key={idx}
              >
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    className="h-52 rounded-lg w-full object-cover"
                    alt="responsive"
                  ></Image>
                </div>
                <div>
                  <h5 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {name}
                  </h5>
                  <p>{category}</p>
                </div>
                <div className="flex items-center justify-between mt-8 lg:mb-0">
                  {/* stars */}
                  <div className="flex gap-x-2 text-orange">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <Link className="font-medium" href={`/posts/${name}`}>
                    Visit
                  </Link>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FeaturedBusinessesSlider;
