import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import PostDetail from '../../components/Postdetail';
import Loader from '../../components/Loader';
import Post from '../../models/Freebie';
import db from '../../utils/db';

export default function FreebieScreen(props) {
  const { post, featuredPosts, categories } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (!post) {
    return <Layout title="Freebie Not Found">Freebie Not Found</Layout>;
  }

  return (
    <Layout title={post.name}>
      <div className="py-2">
        <Link href="/search-freebies">Back to Freebies</Link>
      </div>
      <div className="container mx-auto py-12 my-12 mt-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <div className="py-2">
              <Link href="/search-freebies">BY ADMIN</Link>
              {/* <Ads /><Ads />*/}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <div className="card shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  {post.slug ? 'Related Posts' : 'Recent Posts'}
                </h3>
                {featuredPosts.map((post, index) => (
                  <div key={index} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                      <Image
                        alt={post.name}
                        height="60px"
                        width="60px"
                        unoptimized
                        className="align-middle rounded-full"
                        src={post.image}
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-gray-500 font-xs">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                      </p>
                      <Link
                        href={`/freebie/${post.slug}`}
                        className="text-md"
                        key={index}
                        passHref
                      >
                        {post.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  Categories
                </h3>
                {categories.map((category, index) => (
                  <Link key={index} href={`/freebie/${category.slug}`} passHref>
                    <span
                      className={`cursor-pointer block ${
                        index === categories.length - 1
                          ? 'border-b-0'
                          : 'border-b'
                      } pb-3 mb-3`}
                    >
                      {category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const post = await Post.findOne({ slug }).lean();
  const featuredPosts = await Post.find({ isFeatured: true }).lean();
  const categories = await Post.find().distinct('category');

  await db.disconnect();
  return {
    props: {
      post: post ? db.convertDocToObj(post) : null,
      featuredPosts,
      categories,
    },
  };
}
