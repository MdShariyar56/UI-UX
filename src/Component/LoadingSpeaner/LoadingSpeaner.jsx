import React from "react";
import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <HashLoader color="#2563EB" size={60} />
    </div>
  );
};

export default LoadingSpinner;
