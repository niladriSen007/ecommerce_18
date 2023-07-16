import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-8">
          <h2 className="text-4xl font-bold mb-6 text-indigo-800 text-center">Contact Us</h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-indigo-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-indigo-500 focus:border-blue-500 focus:ring-blue-500 outline-none placeholder:text-indigo-800"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-indigo-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-indigo-500 focus:border-blue-500 focus:ring-blue-500 outline-none placeholder:text-indigo-800"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-indigo-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-lg border border-indigo-500 focus:border-blue-500 focus:ring-blue-500 outline-none placeholder:text-indigo-800"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
