import Layout from '../components/Layout';

import BannerSec from '../components/BannerSec';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
//import Work from '../components/Courses';
import Join from '../components/Join';
import Testimonials from '../components/Testimonials';
import Servicesa from '../components/Servicesa';
import BackToTop from '../components/BackToTop';
//import Reservation from '../components/Reservation';
//import LawBanner from '../components/LawBanner';
import BlogHome from '../components/BlogHomeData';
import Workflow from '../components/Workflow';
import CatsDrs from '../components/CatsDrs';
import FeaturedDrs from '../components/FeaturedDrs';
import Post from '../models/Post';
import Product from '../models/Product';
import Dr from '../models/BusinessListing';
import db from '../utils/db';
import { Store } from '../utils/Store';
import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export default function Home({posts, drs, plans }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  
  return (
    <Layout title="Mzansi Medical Web Agency">
      {/*mmwa*/}
      <BannerSec />
      <Workflow />
      <Servicesa />
      <About />
      <CatsDrs />
      <FeaturedDrs drs={drs} />
      <Pricing plans={plans} addToCartHandler={addToCartHandler}/>
      <Testimonials />
      <Join />
      <Faq />
      <BlogHome posts={posts} />
      <BackToTop />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  //const products = await Product.find().lean().limit(6);
  const drs = await Dr.find().lean().limit(6);
  const posts = await Post.find().lean().limit(6);
  const plans = await Product.find().lean().limit(6);
  
  return {
    props: {
      plans: plans.map(db.convertDocToObj),
      drs: drs.map(db.convertDocToObj),
      posts: posts.map(db.convertDocToObj),
    },
  };
}
