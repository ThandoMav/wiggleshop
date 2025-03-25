import { getToken } from 'next-auth/jwt';
import Product from '../../../../../models/BusinessListing';
import db from '../../../../../utils/db';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user) {
    return res.status(401).send('signin required');
  }
 if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
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
    product.tag = req.body.tag;
    product.rating = req.body.rating;
    product.numReviews = req.body.numReviews;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    product.image1 = req.body.image1;
    product.drImage = req.body.drImage;
    product.image3 = req.body.image3;
    product.image4 = req.body.image4;
    product.image5 = req.body.image5;
    product.feature1 = req.body.feature1;
    product.feature2= req.body.feature2;
    product.feature3 = req.body.feature3;
    product.feature4 = req.body.feature4;
    product.feature5 = req.body.feature5;
    product.facebook = req.body.facebook;
    product.instagram = req.body.instagram;
    product.tiktok = req.body.tiktok;
    product.twitter = req.body.twitter;
    product.website = req.body.website;
    product.email = req.body.email;
    product.contactNumber = req.body.contactNumber;
    product.drName = req.body.drName;
    product.province = req.body.province;
    product.city = req.body.city;
    product.street = req.body.street;
    

    await product.save();
    await db.disconnect();
    res.send({ message: 'Product updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Product not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.send({ message: 'Product deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Product not found' });
  }
};
export default handler;
