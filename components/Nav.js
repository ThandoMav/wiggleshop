import React from 'react';
import Link from 'next/link';
// import data
import { nav } from '../utils/data';

const Nav = ({header}) => {
  return (
    <nav className={`${header ? 'text-primary-500' : 'text-white'}
        hidden lg:flex`}>
      <ul className="flex gap-x-8 ">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                href={item.href}
                className="hover:text-primary-700 transition"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

