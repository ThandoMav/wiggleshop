import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';
import { useForm } from 'react-hook-form';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false, errorPay: action.payload };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false, errorPay: '' };

    case 'DELIVER_REQUEST':
      return { ...state, loadingDeliver: true };
    case 'DELIVER_SUCCESS':
      return { ...state, loadingDeliver: false, successDeliver: true };
    case 'DELIVER_FAIL':
      return { ...state, loadingDeliver: false };
    case 'DELIVER_RESET':
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
      };


      case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };

    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };


    default:
      state;
  }
}
function OrderScreen() {
  const { data: session } = useSession();
  // order/:id
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const { query } = useRouter();
  const orderId = query.id;

  const [
    {
      loading,
      error,
      order,
      successPay,
      loadingPay,
      loadingDeliver,
      successDeliver,
      loadingUpdate,
      loadingUpload,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/buss/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        setValue('name', data.name);
        setValue('slug', data.slug);
        setValue('price', data.price);
        setValue('downloadFile', data.downloadFile);
        setValue('category', data.category);
        setValue('countInStock', data.countInStock);
        setValue('description', data.description);
        setValue('tag', data.tag);
        setValue('rating', data.rating);
        setValue('numReviews', data.numReviews);
        setValue('image1', data.image1);
        setValue('drImage', data.drImage);
        setValue('image3', data.image3);
        setValue('image4', data.image4);
        setValue('image5', data.image5);
        setValue('feature1', data.feature1);
        setValue('feature2', data.feature2);
        setValue('feature3', data.feature3);
        setValue('feature4', data.feature4);
        setValue('feature5', data.feature5);
        setValue('facebook', data.facebook);
        setValue('instagram', data.instagram);
        setValue('tiktok', data.tiktok);
        setValue('twitter', data.twitter);
        setValue('website', data.website);
        setValue('email', data.email);
        setValue('contactNumber', data.contactNumber);
        setValue('drName', data.drName);
        setValue('province', data.province);
        setValue('city', data.city);
        setValue('street', data.street);
        setValue('drName', data.drName);

      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (
      !order._id ||
      successPay ||
      successDeliver ||
      (order._id && order._id !== orderId)
    ) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: 'PAY_RESET' });
      }
      if (successDeliver) {
        dispatch({ type: 'DELIVER_RESET' });
      }
    } else {
      const loadPaypalScript = async () => {
        const { data: clientId } = await axios.get('/api/keys/paypal');
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': clientId,
            currency: 'USD',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      loadPaypalScript();
    }
  }, [order, orderId, paypalDispatch, successDeliver, successPay, setValue]);

  const router = useRouter();
  
  const uploadHandler1 = async (e, imageField = 'image1') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };
  const uploadHandler2 = async (e, imageField = 'drImage') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };
  const uploadHandler3 = async (e, imageField = 'image3') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };
  const uploadHandler4 = async (e, imageField = 'image4') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };
  const uploadHandler5 = async (e, imageField = 'image5') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  const submitHandler = async ({
    name,
    slug,
    price,
    category,
    numReviews,
    rating,
    downloadFile,
    tag,
    countInStock,
    description,
    image1,
    drImage,
    image3,
    image4,
    image5,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    facebook,
    instagram,
    tiktok,
    twitter,
    website,
    email,
    contactNumber,
    drName,
    province,
    city,
    street,

  }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/buss/${orderId}`, {
        name,
    slug,
    price,
    category,
    downloadFile,
    tag,
    numReviews,
    rating,
    countInStock,
    description,
    image1,
    drImage,
    image3,
    image4,
    image5,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    facebook,
    instagram,
    tiktok,
    twitter,
    website,
    email,
    contactNumber,
    drName,
    province,
    city,
    street,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Accomodation updated successfully');
      router.push('/bus-history');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };




  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `/api/buss/${order._id}/pay`,
          details
        );
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('accomodation order is paid successgully');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

  async function deliverOrderHandler() {
    try {
      dispatch({ type: 'DELIVER_REQUEST' });
      const { data } = await axios.put(
        `/api/admin/buss/${order._id}/deliver`,
        {}
      );
      dispatch({ type: 'DELIVER_SUCCESS', payload: data });
      toast.success('Order is delivered');
    } catch (err) {
      dispatch({ type: 'DELIVER_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  }


  return (
    <Layout title={`BusinessListing ${orderId}`}>
      <h1 className="mb-4 mt-16 text-xl">{`BusinessListing ${orderId}`}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="alert-error">{error}</div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 px-16">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card  p-5">
              <h2 className="mb-2 text-lg"> Address</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country},{' '}
                
              </div>
              <div className="alert-success">
                Appointment Date: {shippingAddress.date} <br/>
                Appointment Time: {shippingAddress.time} <br/>
              </div>
              <div className="alert-success">
                Message: <br/> 
                {shippingAddress.description} 
              </div>
              {isDelivered ? (
                <div className="alert-success">Delivered at {deliveredAt}</div>
              ) : (
                <div className="alert-error">Not delivered</div>
              )}
              <h2 className="mb-2 text-lg"> Edit </h2>
              <div>
                <div className="md:col-span-3">
                          {loading ? (
                            <div>Loading...</div>
                          ) : error ? (
                            <div className="alert-error">{error}</div>
                          ) : (
                            <form
                              className="mx-auto max-w-screen-md"
                              onSubmit={handleSubmit(submitHandler)}
                            >
                              <h1 className="mb-4 text-xl">{`Edit Product ${orderId}`}</h1>
                              <div className="mb-4">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="name"
                                  autoFocus
                                  {...register('name', {
                                    required: 'Please enter name',
                                  })}
                                />
                                {errors.name && (
                                  <div className="text-red-500">{errors.name.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="name">downloadFile</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="downloadFile"
                                  autoFocus
                                  {...register('downloadFile', {
                                    required: 'Please enter downloadFile',
                                  })}
                                />
                                {errors.downloadFile && (
                                  <div className="text-red-500">
                                    {errors.downloadFile.message}
                                  </div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="slug">Slug</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="slug"
                                  {...register('slug', {
                                    required: 'Please enter slug',
                                  })}
                                />
                                {errors.slug && (
                                  <div className="text-red-500">{errors.slug.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="price">Price</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="price"
                                  {...register('price', {
                                    required: 'Please enter price',
                                  })}
                                />
                                {errors.price && (
                                  <div className="text-red-500">{errors.price.message}</div>
                                )}
                              </div>
                              
                              <div className="mb-4">
                                <label htmlFor="category">category</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="category"
                                  {...register('category', {
                                    required: 'Please enter category',
                                  })}
                                />
                                {errors.category && (
                                  <div className="text-red-500">{errors.category.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="tag">tag</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="tag"
                                  {...register('tag', {
                                    required: 'Please enter tag',
                                  })}
                                />
                                {errors.tag && (
                                  <div className="text-red-500">{errors.tag.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="countInStock">countInStock</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="countInStock"
                                  {...register('countInStock', {
                                    required: 'Please enter countInStock',
                                  })}
                                />
                                {errors.countInStock && (
                                  <div className="text-red-500">
                                    {errors.countInStock.message}
                                  </div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="countInStock">description</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="description"
                                  {...register('description', {
                                    required: 'Please enter description',
                                  })}
                                />
                                {errors.description && (
                                  <div className="text-red-500">
                                    {errors.description.message}
                                  </div>
                                )}
                              </div>
                
                
                
                              <div className="mb-4">
                                <label htmlFor="image1">image1</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="image1"
                                  {...register('image1', {
                                    required: 'Please enter image1',
                                  })}
                                />
                                {errors.image1 && (
                                  <div className="text-red-500">{errors.image1.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="imageFile1">Upload image</label>
                                <input
                                  type="file"
                                  className="w-full"
                                  id="imageFile1"
                                  onChange={uploadHandler1}
                                />
                
                                {loadingUpload && <div>Uploading....</div>}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="drImage">drImage</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="drImage"
                                  {...register('drImage', {
                                    required: 'Please enter drImage',
                                  })}
                                />
                                {errors.drImage && (
                                  <div className="text-red-500">{errors.drImage.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="imageFile2">Upload image</label>
                                <input
                                  type="file"
                                  className="w-full"
                                  id="imageFile2"
                                  onChange={uploadHandler2}
                                />
                
                                {loadingUpload && <div>Uploading....</div>}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="image3">image3</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="image3"
                                  {...register('image3', {
                                    required: 'Please enter image3',
                                  })}
                                />
                                {errors.image3 && (
                                  <div className="text-red-500">{errors.image3.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="imageFile3">Upload image</label>
                                <input
                                  type="file"
                                  className="w-full"
                                  id="imageFile3"
                                  onChange={uploadHandler3}
                                />
                
                                {loadingUpload && <div>Uploading....</div>}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="image4">image4</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="image4"
                                  {...register('image4', {
                                    required: 'Please enter image4',
                                  })}
                                />
                                {errors.image4 && (
                                  <div className="text-red-500">{errors.image4.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="imageFile4">Upload image</label>
                                <input
                                  type="file"
                                  className="w-full"
                                  id="imageFile4"
                                  onChange={uploadHandler4}
                                />
                
                                {loadingUpload && <div>Uploading....</div>}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="image5">image5</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="image5"
                                  {...register('image5', {
                                    required: 'Please enter image5',
                                  })}
                                />
                                {errors.image5 && (
                                  <div className="text-red-500">{errors.image5.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="imageFile5">Upload image</label>
                                <input
                                  type="file"
                                  className="w-full"
                                  id="imageFile5"
                                  onChange={uploadHandler5}
                                />
                
                                {loadingUpload && <div>Uploading....</div>}
                              </div>
                             
                
                
                
                              <div className="mb-4">
                                <label htmlFor="feature1">feature1</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="feature1"
                                  {...register('feature1', {
                                    required: 'Please enter feature1',
                                  })}
                                />
                                {errors.feature1 && (
                                  <div className="text-red-500">{errors.feature1.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="feature2">feature2</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="feature2"
                                  {...register('feature2', {
                                    required: 'Please enter feature2',
                                  })}
                                />
                                {errors.feature2 && (
                                  <div className="text-red-500">{errors.feature2.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="feature3">feature3</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="feature3"
                                  {...register('feature3', {
                                    required: 'Please enter feature3',
                                  })}
                                />
                                {errors.feature3 && (
                                  <div className="text-red-500">{errors.feature3.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="feature4">feature4</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="feature4"
                                  {...register('feature4', {
                                    required: 'Please enter feature4',
                                  })}
                                />
                                {errors.feature4 && (
                                  <div className="text-red-500">{errors.feature4.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="feature5">feature5</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="feature5"
                                  {...register('feature5', {
                                    required: 'Please enter feature5',
                                  })}
                                />
                                {errors.feature5 && (
                                  <div className="text-red-500">{errors.feature5.message}</div>
                                )}
                              </div>
                
                              <div className="mb-4">
                                <label htmlFor="facebook">facebook</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="facebook"
                                  {...register('facebook', {
                                    required: 'Please enter facebook',
                                  })}
                                />
                                {errors.facebook && (
                                  <div className="text-red-500">{errors.facebook.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="instagram">instagram</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="instagram"
                                  {...register('instagram', {
                                    required: 'Please enter instagram',
                                  })}
                                />
                                {errors.instagram && (
                                  <div className="text-red-500">{errors.instagram.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="tiktok">tiktok</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="tiktok"
                                  {...register('tiktok', {
                                    required: 'Please enter tiktok',
                                  })}
                                />
                                {errors.tiktok && (
                                  <div className="text-red-500">{errors.tiktok.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="twitter">twitter</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="twitter"
                                  {...register('twitter', {
                                    required: 'Please enter twitter',
                                  })}
                                />
                                {errors.twitter && (
                                  <div className="text-red-500">{errors.twitter.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="website">website</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="website"
                                  {...register('website', {
                                    required: 'Please enter website',
                                  })}
                                />
                                {errors.website && (
                                  <div className="text-red-500">{errors.website.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="rating">rating</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="rating"
                                  {...register('rating', {
                                    required: 'Please enter rating',
                                  })}
                                />
                                {errors.rating && (
                                  <div className="text-red-500">{errors.rating.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="numReviews">numReviews</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="numReviews"
                                  {...register('numReviews', {
                                    required: 'Please enter numReviews',
                                  })}
                                />
                                {errors.numReviews && (
                                  <div className="text-red-500">{errors.numReviews.message}</div>
                                )}
                              </div>
                
                              <div className="mb-4">
                                <label htmlFor="email">email</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="email"
                                  {...register('email', {
                                    required: 'Please enter email',
                                  })}
                                />
                                {errors.email && (
                                  <div className="text-red-500">{errors.email.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="contactNumber">contactNumber</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="contactNumber"
                                  {...register('contactNumber', {
                                    required: 'Please enter contactNumber',
                                  })}
                                />
                                {errors.contactNumber && (
                                  <div className="text-red-500">{errors.contactNumber.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="drName">drName</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="drName"
                                  {...register('drName', {
                                    required: 'Please enter drName',
                                  })}
                                />
                                {errors.drName && (
                                  <div className="text-red-500">{errors.drName.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="province">province</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="province"
                                  {...register('province', {
                                    required: 'Please enter province',
                                  })}
                                />
                                {errors.province && (
                                  <div className="text-red-500">{errors.province.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="city">city</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="city"
                                  {...register('city', {
                                    required: 'Please enter city',
                                  })}
                                />
                                {errors.city && (
                                  <div className="text-red-500">{errors.city.message}</div>
                                )}
                              </div>
                              <div className="mb-4">
                                <label htmlFor="street">street</label>
                                <input
                                  type="text"
                                  className="w-full"
                                  id="street"
                                  {...register('street', {
                                    required: 'Please enter street',
                                  })}
                                />
                                {errors.street && (
                                  <div className="text-red-500">{errors.street.message}</div>
                                )}
                              </div>
                
                              
                
                
                              <div className="mb-4">
                                <button disabled={loadingUpdate} className="primary-button">
                                  {loadingUpdate ? 'Loading' : 'Update'}
                                </button>
                              </div>
                              <div className="mb-4">
                                <Link href={`/admin/accomodations`}>Back</Link>
                              </div>
                            </form>
                          )}
                        </div>
              </div>
            </div>

            <div className="card p-5">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <div>{paymentMethod}</div>
              {isPaid ? (
                <div className="alert-success">Paid at {paidAt}</div>
              ) : (
                <div className="alert-error">Not paid</div>
              )}
            </div>

            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">Order Items</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td>
                        <Link href={`/service/${item.slug}`}>
                          <a className="flex items-center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            ></Image>
                            &nbsp;
                            {item.name}
                          </a>
                        </Link>
                      </td>
                      <td className=" p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.quantity * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>{' '}
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                {!isPaid && (
                  <li>
                    {isPending ? (
                      <div>Loading...</div>
                    ) : (
                      <div className="w-full">
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    )}
                    {loadingPay && <div>Loading...</div>}
                  </li>
                )}
                {session.user.isAdmin && order.isPaid && !order.isDelivered && (
                  <li>
                    {loadingDeliver && <div>Loading...</div>}
                    <button
                      className="primary-button w-full"
                      onClick={deliverOrderHandler}
                    >
                      Deliver Order
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

OrderScreen.auth = true;
export default OrderScreen;
