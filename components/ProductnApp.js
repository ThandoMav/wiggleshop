import React from 'react';

import Link from 'next/link';
import { BsBuildings, BsFillTagsFill } from 'react-icons/bs';

const FeaturedAccCard = ({ rental }) => (
  <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${rental.image1}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
     <BsBuildings />
      <p className="text-white mb-4 text-shadow font-semibold text-xs"> {rental.city}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{rental.name}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <BsFillTagsFill />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">From R{rental.price}</p>
      </div>
    </div>
    <Link href={`/rental/${rental.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedAccCard;