/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function DrItem({ product }) {
  return (
    <div className="card group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
      <Image
        src={product.image}
        alt="hjh"
        width={500}
        height={500}
        className="block mx-auto mb-2 object-cover h-64 w-full"
      ></Image>
      <Link href={`/post/${product.slug}`} className="hover:text-primary-500">{product.name}</Link>
      <div className="flex items-center justify-center mt-1">
        
        <button
              className="mx-auto btnBeauty btn-secondaryBeauty text-white"
              
            >
               View 
          </button>
      </div>
    </div>
  );
}
