import React from "react";
import { useRegistration } from "../../hooks/useRegistration";

const Registration = () => {
  const { formData, errorMessage, successMessage, handleChange, handleSubmit } =
    useRegistration();

  return (
    <div className="flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please fill in your details to register
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{errorMessage}</div>
              </div>
            )}
            {successMessage && (
              <div className="rounded-md bg-green-50 p-4">
                <div className="text-sm text-green-700">{successMessage}</div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out"
              >
                Sign up
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
