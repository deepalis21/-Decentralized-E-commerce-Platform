import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="pt-28 max-w-4xl mx-auto px-4 py-12 flex-grow text-center">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-gray-600 text-lg">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
            Suspendisse vulputate semper nunc eget rhoncus.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Mission</h2>
          <p className="text-gray-700 mb-6">
            At the heart of everything, we set out to offer the best quality. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie
            dignissim non eget nunc.
          </p>
         
        </div>

        {/* How it Started Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">How it Started</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-col items-center lg:flex-row lg:justify-center">
            <div className="bg-pink-100 p-6 rounded-lg mb-6 lg:mb-0 lg:mr-6 text-left">
              <h3 className="text-xl font-semibold mb-4">
                Vel mauris molestie dignissim
              </h3>
              <p className="text-gray-700">
                Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus.
                Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
