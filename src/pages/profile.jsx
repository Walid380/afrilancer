import React from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileBio from "../components/ProfileBio";


const Profile = () => {
  // Sample profile data (in a real app, this would come from an API or context)
  const profileData = {
    user: {
      name: "Alex Johnson",
      title: "Senior UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      coverImage: "https://source.unsplash.com/random/1600x400/?design",
      location: "San Francisco, CA",
      joined: "Member since June 2018",
    },
    stats: {
      completedProjects: 42,
      clientSatisfaction: 98,
      activeClients: 5,
    },
    bio: "I'm a passionate designer with 8+ years of experience creating beautiful, functional interfaces. Specialized in Figma, Adobe XD, and user research. Let's build something amazing together!",
    skills: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Interaction Design",
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Profile Header */}
       
        
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            
            
            {/* Right Column */}
            <div className="lg:w-2/3">
            
              
              {/* Experience Section (would be another component) */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Lead Designer at DesignCo</h4>
                    <p className="text-gray-600">2019 - Present</p>
                    <p className="text-gray-700 mt-1">
                      Leading a team of 5 designers to create products for Fortune 500 clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;