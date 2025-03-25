import React from 'react';
import { useState } from 'react';
import { sanitize } from '../utils/misc';
import Loading from '../utils/loading';
// import icons
import { MdEmail } from 'react-icons/md';

const Newsletter = ( { status, message, onValidated }) => {
 
  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <section className='section-sm lg:section-lg bg-green min-h-[520px]'>
      <div className='container mx-auto'>
        <div
          className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-offset='300'
        >
          <h4
            className='text-[26px] text-white font-bold mb-[14px]'
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-offset='300'
          >
            Subscribe Our Newsletter
          </h4>
          <p
            className='text-green-200 mb-12'
            data-aos='fade-up'
            data-aos-delay='800'
            data-aos-offset='300'
          >
            Subscribe our newsletter for further updates about us
          </p>
          <form
            className='max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 p-4 lg:p-0 gap-x-4'
            data-aos='fade-up'
            data-aos-delay='1000'
          >
            <div className='w-full relative flex'>
              <div className='absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300'>
                <MdEmail />
              </div>
              <input
                onChange={(event) => setEmail(event?.target?.value ?? '')}
                type="email"
                onKeyUp={(event) => handleInputKeyEvent(event)}
                className='form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]'
                placeholder='Enter your email address'
              />
            </div>
            <button  onClick={handleFormSubmit} className='btn btn-lg btn-orange text-white w-full lg:max-w-[180px]'>
              Get started
            </button>
          </form>
          <div className="min-h-42px mt-2">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
