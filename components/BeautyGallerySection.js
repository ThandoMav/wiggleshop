import React, { useState } from 'react';
// import data
import { galleryData } from '../utils/data';
// import photo album & lightbox
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../utils/variants';

const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { btnText, btnIcon, images } = galleryData;
  return (
    <section className='bg-[#F9F9F9] section relative mt-[40px] lg:mt-0'>
        <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Our Treatment Gallery
            </h3>
          </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='mb-8 lg:mb-20'
      >
        <PhotoAlbum
          layout='rows'
          photos={images}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: 'rgba(0,0,0,.9)' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='flex justify-center'
      >
        <button className='btn btn-lg btn-dark'>
          {btnText}
          <div className='text-xl'>{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
