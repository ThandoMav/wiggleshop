import { getToken } from 'next-auth/jwt';
import Product from '../../../../../models/Service';
import db from '../../../../../utils/db';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || (user && !user.isAdmin)) {
    return res.status(401).send('signin required');
  }

  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};
const putHandler = async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    product.name = req.body.name;
    product.slug = req.body.slug;
    product.price = req.body.price;
    product.downloadFile = req.body.downloadFile;
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.rating = req.body.rating;
    product.numReviews = req.body.numReviews;
    product.description = req.body.description;
    product.countInStock = req.body.countInStock;
    product.image1 = req.body.image1;
    product.drImage = req.body.drImage;
    product.image3 = req.body.image3;
    product.image4 = req.body.image4;
    product.image5 = req.body.image5;
    await product.save();
    await db.disconnect();
    res.send({ message: 'Service updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Service not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.send({ message: 'Service deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Service not found' });
  }
};
export default handler;
