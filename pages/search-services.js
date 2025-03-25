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
