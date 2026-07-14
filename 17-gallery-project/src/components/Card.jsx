import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="w-72 rounded-2xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-400">

        <div className="h-56 overflow-hidden">
          <img
            src={elem.download_url}
            alt={elem.author}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-bold text-white truncate">
            {elem.author}
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Click to view original image
          </p>
        </div>

      </div>
    </a>
  );
};

export default Card;