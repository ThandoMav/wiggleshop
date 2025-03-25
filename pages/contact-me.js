import Axios from 'axios';
//import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, name, subject, message }) => {
    try {
      const { data } = await Axios.post('/api/contact-me', {
        email,
        name,
        message,
        subject,
      });
      toast.success(data.message);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Contact Me">
      <section className=" py-14 mt-32" id="home">
        <div className="container mx-auto">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  Let&apos;s keep in touch.
                </h1>
                <p className="text-base text-gray-400">
                  I&apos;m here to help you on your journey, and I&apos;d love
                  to hear from you. Whether you&apos;re ready to book a session,
                  have questions about my services, or just want to connect,
                  I&apos;m just a message away.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2">Email Address</h1>
                  <a
                    className="text-gray-400 text-sm font-medium"
                    href="mailto:support.yourdomain@email.com"
                  >
                    support.yourdomain@email.com
                  </a>
                </div>

                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2">Telephone</h1>
                  <a
                    className="text-gray-400 text-sm font-medium"
                    href="tel:+(123) 456-7890"
                  >
                    +(123) 456-7890
                  </a>
                </div>

                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2">Address</h1>
                  <h1 className="text-gray-400 text-sm">
                    09 Design Street, Downtown Victoria, Australia
                  </h1>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form
                method="post"
                name="myForm"
                id="myForm"
                onSubmit={handleSubmit(submitHandler)}
              >
                <p id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      {...register('name', {
                        required: 'Please your enter name',
                        minLength: {
                          value: 6,
                          message: 'Name is more than 5 chars',
                        },
                      })}
                      className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                      autoFocus
                    ></input>
                    {errors.name && (
                      <div className="text-red-500">{errors.name.message}</div>
                    )}
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Please enter email',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                          message: 'Please enter valid email',
                        },
                      })}
                      className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      autoFocus
                    ></input>
                    {errors.email && (
                      <div className="text-red-500">{errors.email.message}</div>
                    )}
                  </div>

                  <input
                    type="text"
                    {...register('subject', {
                      required: 'Please your enter subject',
                      minLength: {
                        value: 6,
                        message: 'subject is more than 5 chars',
                      },
                    })}
                    className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    name="subject"
                    placeholder="Your subject"
                    id="subject"
                    autoFocus
                  ></input>
                  {errors.subject && (
                    <div className="text-red-500">{errors.subject.message}</div>
                  )}
                  <textarea
                    className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    placeholder="Your Message"
                    name="comments"
                    id="comments"
                    rows="3"
                    spellcheck="false"
                  ></textarea>
                  <input
                    type="text"
                    {...register('message', {
                      required: 'Please your enter message',
                      minLength: {
                        value: 6,
                        message: 'message is more than 5 chars',
                      },
                    })}
                    className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    name="message"
                    placeholder="Your message"
                    id="message"
                    rows="3"
                    spellcheck="false"
                    autoFocus
                  ></input>
                  {errors.message && (
                    <div className="text-red-500">{errors.message.message}</div>
                  )}

                  <div className="text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white"
                      value="Send Message"
                    />
                    <button className="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white">
                      Communicate
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
