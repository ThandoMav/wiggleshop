import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/Servicedetaill';
import Product from '../../models/Service';
import db from '../../utils/db';
import { Store } from '../../utils/Store';
import moment from 'moment';

export default function ProductScreen(props) {
  const { product, featuredProducts, categories } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Service Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.business.businessItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/services/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Service is out of stock');
    }

    dispatch({ type: 'CART_BUS_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cartBus');
  };

  return (
    
<Layout title={product.name}>
      <div className="py-2">
        <Link href="/search-services">Back to Services</Link>
      </div>
      <div className="container mx-auto py-12 my-12 mt-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <ProductDetail post={product} addToCartHandler={addToCartHandler} />
            <div className="py-2">
              <Link href="/search-services">BY ADMIN</Link>
              {/* <Ads /><Ads />*/}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <div className="card shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  {product.slug ? 'Related Products' : 'Recent Products'}
                </h3>
                {featuredProducts.map((post, index) => (
                  <div key={index} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                      <Image
                        alt={post.name}
                        height="60px"
                        width="60px"
                        unoptimized
                        className="align-middle rounded-full"
                        src={post.image1}
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-gray-500 font-xs">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                      </p>
                      <Link
                        href={`/service/${post.slug}`}
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
                  <Link key={index} href={`/service/${category.slug}`} passHref>
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
  const product = await Product.findOne({ slug }).lean();
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  const categories = await Product.find().distinct('category');

  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
      featuredProducts,
      categories,
    },
  };
}
