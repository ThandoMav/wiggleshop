import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
//import Axios from 'axios';
//import { toast } from 'react-toastify';
//import { getError } from '../utils/error';

export default function ShippingScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { business } = state;
  const { shippingAddress } = business;
  const router = useRouter();

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
    setValue('description', shippingAddress.description);
    setValue('time', shippingAddress.time);
    setValue('date', shippingAddress.date);
    setValue('email', shippingAddress.email);
  }, [setValue, shippingAddress]);

/*
  const submitEmail = async ({ email, fullName, description}) => {
    try {
      const { data } = await Axios.post('/api/emailProduct', {
        email,
        fullName,
        description,
      });
      toast.success(data.message);
    } catch (err) {
      toast.error(getError(err));
    }
  }; 
*/
  const submitHandler = ({ fullName, address, city, postalCode, country, description, time, date, email }) => {
    dispatch({
      type: 'SAVE_BUS_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country, description, time, date, email },
    });
    Cookies.set(
      'business',
      JSON.stringify({
        ...business,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
          date,
          description,
          time,
          email
        }
      })
    );
    //submitEmail();
    router.push('/busappointmentpayment');
  };

  return (
    <Layout title="Appointment Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md mt-6 px-6  md:mt-32 md:px-32"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter full name',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            {...register('address', {
              required: 'Please enter address',
              minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            {...register('city', {
              required: 'Please enter city',
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode"
            {...register('postalCode', {
              required: 'Please enter postal code',
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country"
            {...register('country', {
              required: 'Please enter country',
            })}
          />
          {errors.country && (
            <div className="text-red-500 ">{errors.country.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="date">date</label>
          <input
            className="w-full"
            id="date"
            {...register('date', {
              required: 'Please enter date',
            })}
          />
          {errors.date && (
            <div className="text-red-500 ">{errors.date.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="time">time</label>
          <input
            className="w-full"
            id="time"
            {...register('time', {
              required: 'Please enter time',
            })}
          />
          {errors.time && (
            <div className="text-red-500 ">{errors.time.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            className="w-full"
            id="email"
            {...register('email', {
              required: 'Please enter email',
            })}
          />
          {errors.email && (
            <div className="text-red-500 ">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description">description</label>
          <input
            className="w-full"
            id="description"
            {...register('description', {
              required: 'Please enter description',
            })}
          />
          {errors.description && (
            <div className="text-red-500 ">{errors.description.message}</div>
          )}
        </div>

        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
