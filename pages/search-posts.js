import Layout from '../components/Layout';
import BeautyServicess from '../components/BeautyServicessss';
import Product from '../models/Post';
import db from '../utils/db';

export default function Search(props) {
  
  const { products } = props;

 
  return (
    <Layout title="Salon Posts">
      <section className="wrapper !bg-primary-700 h-[500px]">
      <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
        <div className="flex flex-wrap mx-[-15px] mt-32">
          <div className="md:w-9/12 lg:w-7/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">Blogs</h1>
            <p className="lead xxl:!px-[2.5rem] leading-[1.65] text-[0.9rem] font-medium">Stay up-to-date with Beauty Industry.</p>
          </div>
        </div>
      </div>
    </section>
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
