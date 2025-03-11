import React from 'react';
import ResponsiveNav from '../Navbar/Navbar';

const ContactUs = () => {
  return (
    <>
      {/* navigation bar */}
      <ResponsiveNav />

      {/* contact form */}
      <div className="absolute h-screen w-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 bg-gray-200 p-12 rounded-lg shadow-lg neumorphism">
          <div className="flex flex-col items-center">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-2 text-center text-sm text-gray-700">
              We'd love to hear from you! Please fill out the form below or contact us at:
            </p>
            <p className="mt-2 text-center text-sm text-gray-700">
              <strong>Mobile:</strong> +91 7385911875
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" required className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg" placeholder="Message"></textarea>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;