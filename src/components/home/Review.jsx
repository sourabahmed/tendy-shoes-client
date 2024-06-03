import React from "react";

const Review = ({ author, date, content, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 overflow-hidden rounded-full mr-4">
          <img src={image} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-bold">{author}</div>
          <div className="text-gray-600">{date}</div>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Review;
