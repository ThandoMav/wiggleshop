import React from 'react';
import Image from 'next/image';
// import footer data
import { BeautyfooterData } from '../utils/data';
import Socials from './BeautySocials';
import Link from 'next/link';
// import components
//import Copyright from './BeautyCopyright';



const Footer = () => {
  // destructure footer data
  const { logo, footerFlower, address, email, phone, list1, } = BeautyfooterData;
  return (
    <footer className='bg-primary-700 px-8 py-8 lg:px-32' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
          {/* info */}
          <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start'>
            
            {/* address */}
            <div className='max-w-[260px] mb-5 text-primary font-bold'>
              {address}
            </div>
            {/* email */}
            <div className='font-light italic'>{email}</div>
            {/* phone */}
            <div className='font-light italic'>{phone}</div>
            <Link href={`/about-us`}>
                    <button
                       className="mx-auto btnB my-6"
                       data-aos="fade-down"
                       data-aos-delay="700"
                     >
                      Book 
                   </button>
                  </Link>
            <div className='font-light italic my-6'>Follow Us</div>
            <Socials />
          </div>
          {/* lists */}
          <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between'>
            {/* list 1 */}
            <div>
              <div className='font-extrabold text-primary mb-8'>About</div>
              <ul className='flex flex-col gap-y-4'>
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='text-primary' href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 2 */}
            <div>
            <div className='mx-auto flex flex-col items-center '>
            {/* logo */}
            <a href='#'>
              <Image
                src={footerFlower}
                width={245}
                height={345}
                alt="yeah"
              />
            </a>
          </div>
            </div>
            {/* social list */}
            <div>
            <div className=' mx-auto flex flex-col items-center '>
            {/* logo */}
            <a href='#'>
              <Image
                src={logo}
                width={245}
                height={345}
                alt="yeah"
              />
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
