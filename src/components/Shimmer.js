// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full mb-4 rounded-lg"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default Shimmer;
