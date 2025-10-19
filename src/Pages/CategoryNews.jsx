import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Triangle } from "react-loader-spinner";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (!data) return;

    if (id === "0") {
      setCategoryNews(data);
    } else if (id === "1") {
      const filteredNews = data.filter(
        (news) => news?.others?.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  // ✅ Render news list
  return (
    <div className="p-4">
      <h2 className="font-semibold mb-5">
        Total{" "}
        <span className="text-secondary italic font-bold">
          {categoryNews.length}
        </span>{" "}
        Category News
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
