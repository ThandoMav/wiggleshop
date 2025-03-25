import { getToken } from 'next-auth/jwt';
import Order from '../../../models/BusinessListing';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user) {
    return res.status(401).send('signin required');
  }

  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: user._id,
    name: 'sample name',
    slug: 'sample-name-' + Math.random(),
    price: 0,
    downloadFile: 'download file',
    category: 'sample category',
    countInStock: 0,
    description: 'sample description',
    rating: 0,
    numReviews: 0,
    tag: 'sample tag',
    image1: '/images/shirt1.jpg',
    drImage: '/images/shirt1.jpg',
    image3: '/images/shirt1.jpg',
    image4: '/images/shirt1.jpg',
    image5: '/images/shirt1.jpg',
    feature1: 'sample feature1',
    feature2: 'sample feature1',
    feature3: 'sample feature1',
    feature4: 'sample feature1',
    feature5: 'sample feature1',
    facebook: 'sample social',
    instagram: 'sample social',
    tiktok: 'sample social',
    twitter: 'sample social',
    website: 'sample website',
    email: 'sample email',
    contactNumber: 71,
    drName: 'sample name',
    province: 'sample province',
    city: 'sample city',
    street: 'sample street',
  });

  const order = await newOrder.save();
  res.status(201).send(order);
};
export default handler;
