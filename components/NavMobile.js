import React, { useContext } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

import { Store } from '../utils/Store';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import Link from 'next/link';
// import data
import { nav } from '../utils/data';

const NavMobile = ({ navMobile }) => {

const { status, data: session } = useSession();
    const { state, dispatch } = useContext(Store);
    const { cart } = state;

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } w-full fixed top-0 left-0 right-0 bg-primary-700 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
    {/* buttons */}
      <div className="mt-8 flex justify-center align-items gap-x-8">
      {status === 'loading' ? (
        'Loading'
      ) : session?.user ? (
        <Menu as="div" className="ml-12 relative inline-block">
          <Menu.Button className="text-blue-600">
            {session.user.name}
          </Menu.Button>
          <Menu.Items className="absolute right-0 w-56 origin-top-right   bg-white shadow-lg   dark:bg-black dark:shadow-gray-700">
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
          <Link href="/login">
              <button className="w-full btnBeauty btn-secondaryBeauty text-white">
                Book
              </button>
            </Link>
        </div>
      )}
      <Link href="/cart">
      {cart.cartItems.length > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
      </Link>
      </div>
      <ul className="w-full mb-12 top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link className="text-white text-body-md" href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </nav>
  );
};

export default NavMobile;
