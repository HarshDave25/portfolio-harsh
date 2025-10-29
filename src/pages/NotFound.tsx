import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-3 text-6xl sm:text-7xl font-extrabold text-gray-800">
          404
        </h1>
        <p className="mb-4 text-lg sm:text-xl text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block mt-3 rounded-lg bg-blue-600 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-md transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
