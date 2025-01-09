import React from "react";
const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="pt-28 max-w-7xl mx-auto px-4 py-12 flex-grow">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-gray-600 text-lg">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
            Suspendisse vulputate semper nunc eget rhoncus.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="bg-pink-100 p-8 rounded-lg flex-grow lg:flex-shrink-0 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor,
              congue justo at, lobortis orci.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-lg">📍</span>
                <p className="ml-2 text-gray-700">
                  123 ABCD, New Delhi
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-lg">✉️</span>
                <p className="ml-2 text-gray-700">
                  <a href="mailto:contact@info.com" className="underline">
                    contact@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-lg">📞</span>
                <p className="ml-2 text-gray-700">9-XXX-XXXX-XXXX</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-grow lg:w-1/2">
            <form className="space-y-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 border border-gray-300 rounded p-3 focus:ring focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 border border-gray-300 rounded p-3 focus:ring focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full border border-gray-300 rounded p-3 focus:ring focus:outline-none"
              />
              <textarea
                placeholder="Message..."
                rows="5"
                className="w-full border border-gray-300 rounded p-3 focus:ring focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
