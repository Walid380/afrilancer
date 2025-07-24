import React from "react";
import Category from "./Category";

const Categories = ({ categories }) => (
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
    {categories.concat(categories).map((cat, idx) => (
      <Category key={idx} name={cat.name} image={cat.image} />
    ))}
  </div>
);

export default Categories; 