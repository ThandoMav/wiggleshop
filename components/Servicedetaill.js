import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import moment from 'moment';
import Newsletter from './Newsletter';
import GallerySection from './GallerySection';
import Socials from './SocialsDetails';

const htmlFrom = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString, {
    USE_PROFILES: { html: true },
  });
  const html = ReactHtmlParser(cleanHtmlString);
  return html;
};

const PostDetail = ({ post, addToCartHandler }) => {
  const body = post.description;

  return (
    <div className="shadow-lg rounded-lg px-4 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <h1 className="mb-8 text-3xl font-semibold">{post.name}</h1>
        <GallerySection post={post} />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className=" md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              By Admin
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>

        <div className="flex items-center mb-8 w-full">
          <div className="md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
            <h3 className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              ${post.price}
            </h3>
          </div>
          <div className="font-medium text-gray-700">
            
            <span className="align-middle">
            <button
              className="btnBB secondaryBeauty w-full"
              onClick={addToCartHandler}
            >
              Start Project!
            </button>
              </span>
          </div>
        </div>

        <div className="flex items-center mb-8 w-full">
          <div className="md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
            Category: {post.category}, Tag: {post.brand}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            
            <span className="align-middle">
               {post.rating} of {post.numReviews} reviews
               <div>Status</div>
              <div>{post.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
              </span>
          </div>
        </div>

        <div className="flex justify-center mt-4 mb-4">
          <Newsletter />
        </div>
      </div>
      {htmlFrom(body)}
      <Socials social={post} />
      <div className="flex justify-center mt-4">
        <Newsletter />
      </div>
    </div>
  );
};

export default PostDetail;
