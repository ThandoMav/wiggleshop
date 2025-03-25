import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import BeautyServicess from '../components/BeautyServicessss';
import Product from '../models/Post';
import db from '../utils/db';

export default function Search(props) {
  const router = useRouter();
  const { products } = props;

 
  return (
    <Layout title="Salon Search">
      <BeautyServicess products={products}/> 
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
