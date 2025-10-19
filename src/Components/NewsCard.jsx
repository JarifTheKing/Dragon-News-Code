import React from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
    published_date,
  } = {
    ...news,
    published_date: news.author.published_date,
  };

  return (
    <div className="card w-full bg-white shadow-md rounded-xl p-5">
      {/* Author Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center   text-gray-500">
          <button className="btn btn-lg btn-circle btn-ghost">
            <FaRegBookmark />
            <IoMdShare />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-52 object-cover rounded-md mb-4"
      />

      {/* Tags & Details */}
      <div className="text-sm text-gray-600 mb-2">
        {new Date(published_date).toDateString()} |
        <span className="ml-1 text-xs">
          Tags: {tags.slice(0, 5).join(", ")}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-4">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <span className="text-red-500 font-semibold ml-2 cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center border-t pt-4 text-sm">
        {/* Rating */}
        <div className="flex items-center text-yellow-500 gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-700 ml-2 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
