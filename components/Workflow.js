import React from 'react';

import { FaVideo, FaRoad, FaStore   ,FaTools  } from 'react-icons/fa';

const Workflow = () => {
  // destructure about data
  return (
    <section className="section py-2 lg:section px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="p-6 rounded-xl bg-white">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
            <div className="p-4 text-center border border-gray-200 rounded-md">
              <i className="ti ti-bed text-4xl text-blue-500">
                <FaVideo  />
              </i>
              <h4 className="text-base font-semibold text-gray-500 mt-2">
                We start with a 30-minute consultation
              </h4>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md">
              <i className="ti ti-table-column text-4xl text-blue-500">
                <FaRoad  />
              </i>
              <h4 className="text-base font-semibold text-gray-500 mt-2">
                Roadmap for your website, marketing, and automation.
              </h4>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md">
              <i className="ti ti-home-2 text-4xl text-blue-500">
                <FaStore  />
              </i>
              <h4 className="text-base font-semibold text-gray-500 mt-2">
                Build and launch your high-performing, client-focused digital
                platform.
              </h4>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md">
              <i className="ti ti-hand-ring-finger text-4xl text-blue-500">
                <FaTools  />
              </i>
              <h4 className="text-base font-semibold text-gray-500 mt-2">
                Teach your team to use the tools + monthly maintenance
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
