import React from "react";

import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

const categories = [
  { name: "Management" },
  { name: "UI/UX Design" },
  { name: "Marketing & Sales" },
  { name: "Tech & Dev" },
  { name: "AI" },
  { name: "Architecture" },
  { name: "Remote learning" },
  { name: "Writing & translation" },
];

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      <div className="flex justify-center mt-2 mb-8">
        <div className="w-full max-w-3xl">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            <input type="text" placeholder="Search  for fields" className="bg-gray-100 outline-none w-full text-gray-700" />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-8">Explore Categories</h2>
      <Categories categories={categories} />
    </div>
    </>
  );
};

export default Services; 