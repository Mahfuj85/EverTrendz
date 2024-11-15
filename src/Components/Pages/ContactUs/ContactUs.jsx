import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className="container mx-auto p-6 md:p-12 bg-white shadow-lg rounded-lg w-[700px] my-10 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need assistance? We'd love to hear from you!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Reach Us</h3>

          <p className="text-gray-600">support@evertrendz.com</p>
          <p className="text-gray-600">+1 (234) 567-890</p>
          <p className="text-gray-600">123 EverTrendz St, E-commerce City, EC 45678</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
