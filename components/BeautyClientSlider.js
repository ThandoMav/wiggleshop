import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';

const ClientSlider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {clients.map((client, index) => {
        // destructure client
        const { message, image } = client;
        // slide
        return (
          <SwiperSlide
            key={index}
            className=''
          >
            {/* card */}
            
              {/* person name, img & position */}
              <div className='flex gap-x-[10px]'>
                <div className="group relative overflow-hidden hover:shadow-lg rounded-md duration-500 p-6 text-center">
                  <Image
                    src={image}
                    alt="jhjh"
                    width={600}
                    height={600}
                   className="rounded-full shadow-md  h-20 w-20 block mx-auto mb-2"
                 ></Image>
                 <Link href="/" className="font-semibold hover:text-primary-600 text-lg">{message}</Link>
               </div>
              </div>
            
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientSlider;
