import React from 'react';
import {
  FaWifi,
} from 'react-icons/fa';

const Facilities = ({ post }) => {
  const facilities = [
    { name: post.feature1, icon: FaWifi },
    { name: post.feature2, icon: FaWifi },
    { name: post.feature3, icon: FaWifi },
    { name: post.feature4, icon: FaWifi },
    { name: post.feature5, icon: FaWifi },
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
