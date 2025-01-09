import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="pt-28 max-w-7xl mx-auto px-4 py-12 flex-grow">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <p className="text-gray-600 text-lg">
            Please log in to access your account and manage your preferences.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left Section: Optional Info/Message */}
          <div className="bg-pink-100 p-8 rounded-lg w-full lg:w-1/2 h-80 flex items-center justify-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sign in to continue
                exploring our collection of premium T-shirts.
              </p>
            </div>
          </div>

          {/* Right Section: Login Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded p-3 focus:ring focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded p-3 focus:ring focus:outline-none"
              />
              <div className="flex justify-between items-center">
                <div>
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-gray-600 text-sm">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded w-full hover:bg-gray-800 transition"
              >
                Log In
              </button>
            </form>

            {/* Additional Links */}
            <div className="text-center mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
