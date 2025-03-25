import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import BeautyServicess from '../components/BeautyServicesss';
import Product from '../models/Service';
import db from '../utils/db';

export default function Search(props) {
  const router = useRouter();
  const { products } = props;

 

  const { state, dispatch } = useContext(Store);
  const addToCartHandler = async (product) => {
    const existItem = state.business.businessItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/services/${product._id}`);
    if (data.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_BUS_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cartBus');
  };
  return (
    <Layout title="Salon Search">
      <section className="wrapper !bg-primary-700 h-[500px]">
      <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
        <div className="flex flex-wrap mx-[-15px] mt-32">
          <div className="md:w-9/12 lg:w-7/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">Our Services</h1>
            <p className="lead xxl:!px-[2.5rem] leading-[1.65] text-[0.9rem] font-medium">
            Nestled in the heart of Nelspruit Mbombela, our salon offers a wide range of day-to-day beauty treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
      <BeautyServicess addToCartHandler={addToCartHandler} products={products}/> 
    </Layout>
  );
}

export async function getServerSideProps() {
  
  await db.connect();

  const productDocs = await Product.find();
  
  await db.disconnect();
  const products = productDocs.map(db.convertDocToObj);

  return {
    props: {
      products,
    },
  };
}
