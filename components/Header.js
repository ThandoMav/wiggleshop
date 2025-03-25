import React, { useContext, useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

import { Store } from '../utils/Store';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';

import Link from 'next/link';
import Image from 'next/image';

// import header data
import { header } from '../utils/data';

// import components
import Nav from '../components/Nav';
import NavMobile from './NavMobile';

/// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = () => {
 
    const { status, data: session } = useSession();
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  // destructure header data
  const { logo, logoV2 } = header;
  return (
    <header
      className={`${
        isActive ? 'bg-white py-[6px]' : 'bg-transparent py-[10px]'
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      <Link href="/">
      
          <Image
            src={`${isActive ? logoV2 : logo}`}
            width={isActive ? 90 : 111}
            height={50}
            alt="yeah"
          />
        
       {/*<h2 className="text-white"> MMWA </h2>*/} 
      </Link>

      {/* nav - initially hidden - show in desktop mode */}
      <Nav header={header}/>

      {/* buttons - initally hidden - show in desktop mode */}
      <div className="hidden flex align-center lg:flex space-x-4">

      {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="text-blue-600">
              {session.user.name}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 origin-top-right   bg-white shadow-lg   dark:bg-black dark:shadow-gray-700">
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/cart">
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                       {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                   )}
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/profile">
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/order-history">
                  Order History
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/appointment-history">
                  Appointment History
                </DropdownLink>
              </Menu.Item>
             
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/admin/dashboard">
                  Admin Dashboard
                </DropdownLink>
              </Menu.Item>

              <Menu.Item>
                <a
                  className="dropdown-link"
                  href="#"
                  onClick={logoutClickHandler}
                >
                  Logout
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (

  
          <div>
            
              <button
                onClick={() => router.push('login?redirect=/search-services')}
                className="w-full btnBeauty btn-secondaryBeauty text-white">
                Book
              </button>
            
          </div>
        )}

      </div>

      {/* nav menu button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
