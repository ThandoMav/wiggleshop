import React from 'react';
import Image from 'next/image';
//import moment from 'moment';
import Link from 'next/link';

const About = ({ post }) => {
  return (
    <>
      <div className="p-6 mb-6 border border-gray-100 transition duration-500 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
        <Link
          href={`/post/${post.slug}`}
          className="absolute opacity-0 top-0 end-0 start-0-0 bottom-0"
        ></Link>
        <div className="relative mb-4 rounded-lg">
          <Image
            src={post.image}
            width={500}
            height={500}
            className="h-52 rounded-lg w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            alt="responsive"
          ></Image>
          <Link
            className="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 start-0-0 w-full h-full text-white rounded-lg opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
            href={`/post/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read article{' '}
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full pb-4 mb-auto">
          <div className="flex items-center">
            <div className="flex flex-1">
              <div className="bcfbg">
                <p className="text-sm font-semibold">Admin</p>
                <p className="text-sm text-gray-500">{post.category}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="text-sm flex items-center text-gray-500">
              6 min{' '}
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="font-medium text-xl leading-8">
          <Link
            href={`/post/${post.slug}`}
            className="block relative group-hover:text-purple-500 transition-colors duration-200"
          >
            {post.name}
          </Link>
        </h3>
      </div>
    </>
  );
};

export default About;
