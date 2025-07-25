import React from "react";
import Navbar from "../components/Navbar";

import {
  Info,
  Search,
  Lightbulb,
  Hammer,
  Goal,
} from "lucide-react";

const About = () => {
  return (
    <>
       <Navbar/>
    
    <div className="bg-white min-h-screen px-4 py-10 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Our Platform</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and connect with top-tier service providers across industries — all in one place.
          </p>
        </div>

        {/* Mission */}
        <section className="flex items-start gap-4">
          <Info className="w-8 h-8 text-blue-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">What is This?</h2>
            <p className="text-gray-600">
              Our platform is built to organize service categories like AI, Marketing, Management, and more into a clean,
              visual, and accessible experience. It's designed for users who value clarity and simplicity.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="flex items-start gap-4">
          <Search className="w-8 h-8 text-green-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">What You Can Do</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Explore services through intuitive categories</li>
              <li>Engage with visual cards that are responsive and informative</li>
              <li>Navigate effortlessly with a clean UI powered by React Router</li>
            </ul>
          </div>
        </section>

        {/* Why We Built This */}
        <section className="flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-yellow-500 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Why We Built It</h2>
            <p className="text-gray-600">
              With so many services scattered online, it's difficult to find what you need quickly. We wanted to bridge that gap
              with a solution that's fast, clear, and modern — built with the user in mind.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="flex items-start gap-4">
          <Hammer className="w-8 h-8 text-purple-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>React.js</strong> – UI components</li>
              <li><strong>React Router</strong> – Client-side routing</li>
              <li><strong>Tailwind CSS</strong> – Clean utility-first styling</li>
              <li><strong>Vite</strong> – Fast dev/build experience</li>
            </ul>
          </div>
        </section>

        {/* Vision */}
        <section className="flex items-start gap-4">
          <Goal className="w-8 h-8 text-red-500 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              We're aiming to expand this into a complete service discovery and connection platform — where professionals and
              businesses can thrive and grow their visibility.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default About;

 