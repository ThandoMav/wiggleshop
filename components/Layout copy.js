import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { Store } from '../utils/Store';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function Layout({ children, title }) {
  const router = useRouter();
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, [isOpen]);

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
  const navMenu = () => {
    return (
      <>
        <form
          onSubmit={submitHandler}
          className="mx-auto mr-3 mt-1 flex w-full justify-center md:hidden"
        >
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            className="rounded-tr-none rounded-br-none p-1 text-sm"
            placeholder="Search products"
          />
          <button
            className="rounded rounded-tl-none rounded-bl-none bg-gradient-to-l from-pink-400 to-blue-600 p-1 text-sm dark:text-black"
            type="submit"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>

        {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          <Menu as="div" className="relative inline-block">
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
          <Link href="/login">
            <a className="p-2">Login</a>
          </Link>
        )}

        <div className="mx-auto p-2">
          <Link href="/cart">
            <a className="flex items-center p-2">
              Cart{' '}
              {cart.cartItems.length > 0 && (
                <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </a>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>{title ? title : 'HlengiZulu'}</title>
        <meta name="student blog" content="student Website" />
        <meta name="monetag" content="7dfb0ee4ccebd9518e6723ad5b453b9b" />
        <meta
          name="09687ede797df4e3ed7eca4e8f37df3852d14ac8"
          content="09687ede797df4e3ed7eca4e8f37df3852d14ac8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="goterthing"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('goomaphy.com',6594796,document.createElement('script'))
          `,
        }}
      />
      <ToastContainer position="bottom-center" limit={1} />
      <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
     
      <div>
          <nav
            className="relative flex h-12 items-center  justify-between shadow-md dark:shadow-gray-700 "
            role="navigation"
          >
            <div className="flex items-center">
              <div
                className="cursor-pointer px-4  "
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-5 w-5 text-blue-500 bg-gradient-to-l from-pink-400 to-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <Link href="/">
                <a className="text-lg font-bold text-black dark:text-white">
                  HlengiZulu.
                </a>
              </Link>
            </div>
            <form
              onSubmit={submitHandler}
              className="mx-auto   hidden w-full justify-center md:flex "
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-gradient-to-l from-pink-400 to-blue-600 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
            <div className="cursor-pointer px-4 md:hidden" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 h-5 w-5 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
            <div className="hidden items-center md:flex">{navMenu()}</div>
          </nav>
          <div
            className={
              isOpen ? 'grid grid-rows-2 items-center text-center' : 'hidden'
            }
            onClick={toggle}
          >
            {navMenu()}
          </div>
          <div
            className={`fixed top-0 left-0 z-40 h-full w-[20rem] bg-accent-primary bg-neutral-500 p-10 duration-300  ease-in-out dark:bg-gray-800 ${
              showSidebar ? 'translate-x-0' : 'translate-x-[-20rem]'
            }`}
          >
            <div className="mb-2 flex justify-between">
              <h2 className="text-white">You never alone</h2>
              <button onClick={() => setShowSidebar(!showSidebar)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <ul>
              <li onClick={() => setShowSidebar(false)}>
                <Link href={`/search`}> Shop</Link>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <Link href={`/search-freebies`}>Freebies </Link>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <Link href={`/about-me`}>About Me </Link>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <Link href={`/search-services`}>Services </Link>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <Link href={`/contact`}>Contact </Link>
              </li>
              <li onClick={() => setShowSidebar(false)}>
                <Link href={`/policy`}>Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container m-auto mt-4 px-2">{children}</div>
        <div className="flex h-10 items-center justify-center shadow-inner dark:shadow-gray-700">
          <p>Copyright © 2024 HlengiZulu</p>
        </div>
      </div>
    </>
  );
}
