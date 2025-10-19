import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);
  console.log(categories);

  return (
    <div>
      <h2 className="font-bold">All Categories {categories.length}</h2>

      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn btn-outline border-none font-semibold"}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
