import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-9xl font-extrabold text-red-500">404</h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-800 mt-6">
                Oops! Page Not Found
            </p>
            <p className="text-gray-500 mt-4 mb-8">
                The page you're looking for might have been removed or you might have entered an incorrect URL.
            </p>
            <Link to="/" className="inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md text-lg mt-6">
                <FaHome className="mr-2" />
                Go Back to Dashboard
            </Link>
        </div>
    );
};

export default PageNotFound;
