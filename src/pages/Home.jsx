import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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

const Home = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };
  
  console.log(session);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center text-gray-500 mt-2 mb-2 text-sm">
        In association with Bitnob
      </div>
      <div className="flex justify-center mt-2 mb-8">
        <div className="w-full max-w-3xl">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            <input type="text" placeholder="Search  for fields" className="bg-gray-100 outline-none w-full text-gray-700" />
          </div>
        </div>
        <p onClick={handleSignOut}
          className="hover:cursor-pointer  border inline-block text-red-400"
        >
          Sign out
        </p>
      </div>
      <h2 className="text-2xl font-bold text-center mb-8">Explore Categories</h2>
      <Categories categories={categories} />
    </div>
  );
};

export default Home; 