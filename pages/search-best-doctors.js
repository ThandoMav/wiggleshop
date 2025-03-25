import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { XCircleIcon } from '@heroicons/react/outline';
import PostItem from '../components/DrItem';
import Post from '../models/BusinessListing';
import db from '../utils/db';
import { FaWhatsapp } from 'react-icons/fa';

const PAGE_SIZE = 2;

const ratings = [1, 2, 3, 4, 5];

export default function PostSearch(props) {
  const router = useRouter();

  const {
    query = 'all',
    category = 'all',
    rating = 'all',
    sort = 'featured',
    page = 1,
  } = router.query;

  const { posts, countPosts, categories, pages } = props;

  const filterSearch = ({
    page,
    category,
    sort,
    min,
    max,
    searchQuery,
    rating,
  }) => {
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  const pageHandler = (page) => {
    filterSearch({ page });
  };

  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };

  const ratingHandler = (e) => {
    filterSearch({ rating: e.target.value });
  };


  return (
    <Layout title="Best RSA Drs search">
      <div className="grid md:grid-cols-4 md:gap-5 mt-6 px-6  md:mt-32 md:px-32">
        <div>
          <div className="my-3">
            <h2>Categories</h2>
            <select
              className="w-full"
              value={category}
              onChange={categoryHandler}
            >
              <option value="all">All</option>
              {categories &&
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-3">
            <h2>Ratings</h2>
            <select className="w-full" value={rating} onChange={ratingHandler}>
              <option value="all">All</option>
              {ratings &&
                ratings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} star{rating > 1 && 's'} & up
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-4 mb-4">

          </div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center">
              {posts.length === 0 ? 'No' : countPosts} Results
              {query !== 'all' && query !== '' && ' : ' + query}
              {category !== 'all' && ' : ' + category}

              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              &nbsp;
              {(query !== 'all' && query !== '') ||
              category !== 'all' ||
              rating !== 'all' ? (
                <button onClick={() => router.push('/search-posts')}>
                  <XCircleIcon className="h-5 w-5" />
                </button>
              ) : null}
            </div>
            <div>
              Sort by{' '}
              <select value={sort} onChange={sortHandler}>
                <option value="featured">Featured</option>
               <option value="toprated">Customer Reviews</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          <div>
          <div className="flex justify-center mt-4">
             <h2 className="h2 my-4">South African Best Drs</h2>
             <a className="my-4" href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
              <div className="alert-error flex flex-row gap-2">
                 <a href='https://wa.me/message/EI4TEDTFQR4LO1' target='_blank' rel='noreferrer'>
                   <div className="w-12 h-12 rounded-sm flex items-center justify-center text-white cursor-pointer z-10 bg-red-500 hover:bg-red-600 transition-all duration-500">
                       <i className="ti ti-brand-youtube text-2xl">
                          <FaWhatsapp/>
                       </i>
                   </div>
                  </a>
                Or Click HERE! to Text Your Business details on our whatsApp to be listed on our website and marketing campaign:
                
              </div>
              </a>
          </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3  ">
              {posts.map((post) => (
                <PostItem
                  key={post._id}
                  post={post}
                />
              ))}
            </div>
            <div className="flex items-center justify-center mt-4 mb-4">

            </div>
            <ul className="flex">
              {posts.length > 0 &&
                [...Array(pages).keys()].map((pageNumber) => (
                  <li key={pageNumber}>
                    <button
                      className={`default-button m-2 ${
                        page == pageNumber + 1 ? 'font-bold' : ''
                      } `}
                      onClick={() => pageHandler(pageNumber + 1)}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                ))}
            </ul>
            <div className="flex items-center justify-center mt-4 mb-4">

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || '';
  const rating = query.rating || '';
  const sort = query.sort || '';
  const searchQuery = query.query || '';

  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};
  const categoryFilter = category && category !== 'all' ? { category } : {};
 const ratingFilter =
    rating && rating !== 'all'
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {};

  const order =
    sort === 'featured'
      ? { isFeatured: -1 }
      : sort === 'toprated'
      ? { rating: -1 }
      : sort === 'newest'
      ? { createdAt: -1 }
      : { _id: -1 };

  await db.connect();
  const categories = await Post.find().distinct('category');
 const postDocs = await   Post.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...ratingFilter,
    },
    '-reviews'
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();

  const countPosts = await Post.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...ratingFilter,
  });

  await db.disconnect();
  const posts = postDocs.map(db.convertDocToObj);

  return {
    props: {
      posts,
      countPosts,
      page,
      pages: Math.ceil(countPosts / pageSize),
      categories
    },
  };
}
