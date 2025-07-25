import React from "react";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard"; // You'll need to create this component

const Services = () => {
  // Popular services data
  const popularServices = [
    {
      title: "Web Development",
      description: "Creating responsive websites tailored to your needs.",
    },
    {
      title: "Graphic Design",
      description: "Creating visually stunning designs for your brand.",
    },
    {
      title: "Content Writing",
      description: "Creating engaging and SEO-friendly content.",
    },
    {
      title: "Digital Marketing",
      description: "Boosting your online presence with effective strategies.",
    },
    {
      title: "Mobile App Development",
      description: "Building innovative mobile apps for iOS and Android.",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces.",
    },
  ];

  // All services data
  const allServices = [
    {
      price: "Starting at $450",
      title: "AI model development",
      description: "I will develop a custom AI model for your business needs",

    },
    {
      price: "Starting at $500",
      title: "Web Development",
      description: "I will create a responsive website for your business",
      
    },
    {
      price: "Starting at $300",
      title: "UI/UX Design",
      description: "I will create an incredible user experience for your app",
      
    },
    // Add more services as needed
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">AFRILANCER</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Services</h2>
        </div>

        {/* Search Section */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-3xl">
            <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <svg
                className="w-6 h-6 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for services"
                className="bg-white outline-none w-full text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-xl font-bold mb-6">Popular services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* All Services Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold mb-6">All services</h3>
          <div className="space-y-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-500">{service.price}</p>
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;