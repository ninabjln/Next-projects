import React from "react";

const Singup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Singup
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="username-input"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username-input"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outlie-none focus:ring-2 focus:ring-blue-500"
              name="username"
              placeholder="Zahra-Ahmadi"
            />
          </div>
          <div>
            <label
              htmlFor="email-input"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email-input"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outlie-none focus:ring-2 focus:ring-blue-500"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password-input"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password-input"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outlie-none focus:ring-2 focus:ring-blue-500"
              name="password"
              placeholder="•••••••••"
            />
          </div>
          <button
            className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Sing Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-center ">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
