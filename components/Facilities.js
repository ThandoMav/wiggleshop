import React from 'react';
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

const Facilities = ({ product }) => {
  const facilities = [
    { name: product.name, icon: FaWifi },
    { name: product.name, icon: FaCoffee },
    { name: 'Bath', icon: FaBath },
    { name: 'Parking Space', icon: FaParking },
    { name: 'Swimming Pool', icon: FaSwimmingPool },
    { name: 'Breakfast', icon: FaHotdog },
    { name: 'GYM', icon: FaStopwatch },
    { name: 'Drinks', icon: FaCocktail },
  ];

  console.log(facilities);
  // destructure gallery data
  return (
    <div className="grid grid-cols-3 gap-6 py-2 px-32 mb-12">
      {facilities.map((item, index) => (
        <div key={index} className="flex items-center gap-x-3 flex-1">
          <div className="text-3xl text-accent">{<item.icon />}</div>
          <div className="text-base">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
