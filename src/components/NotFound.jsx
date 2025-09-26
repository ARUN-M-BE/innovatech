import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <h1 className="text-4xl font-bold text-red-500">404</h1> */}
      {/* <h2>Email Not Verified</h2>
      <p className="text-xl mt-4">
        Please verify your email to access this page
      </p> */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 mb-4">
            <svg
              className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Awaiting Email Verification
          </h2>

          
            <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 mt-2 space-y-1 text-left pl-4">
              <li>Check your spam/junk folder</li>
              <li>Ensure you entered the correct email address</li>
              <li>Contact our support team</li>
            </ol>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
