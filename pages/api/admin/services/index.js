import { getToken } from 'next-auth/jwt';
import Product from '../../../../models/Service';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || !user.isAdmin) {
    return res.status(401).send('admin signin required');
  }
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const postHandler = async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'sample name',
    slug: 'sample-name-' + Math.random(),
    price: 0,
    downloadFile: 'download file',
    category: 'sample category',
    brand: 'tag',
    description: 'sample description',
    rating: 0,
    numReviews: 0,
    countInStock: 0,
    image1: '/images/shirt1.jpg',
    drImage: '/images/shirt1.jpg',
    image3: '/images/shirt1.jpg',
    image4: '/images/shirt1.jpg',
    image5: '/images/shirt1.jpg',
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Service created successfully', product });
};
const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
};
export default handler;
