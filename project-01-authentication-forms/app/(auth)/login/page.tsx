import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6  ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email-input"
              className="block text-sm font-meduim text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email-input"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              className="block text-sm font-meduim text-gray-700"
              htmlFor="password-label"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password-input"
              placeholder="••••••••"
            />
          </div>
          <button
            className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-center ">
            Don&apos;t have an account?{" "}
            <a href="/singup" className="text-blue-500 hover:underline">
              Singup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
