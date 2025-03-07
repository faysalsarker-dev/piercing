import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Senior Piercing Artist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Emily Carter",
    position: "Professional Piercer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "James Miller",
    position: "Body Modification Specialist",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },

];

const MeetTheTeam = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Meet the Team ✨
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="card bg-base-100 shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto border-2 border-primary"
            />

            {/* Info */}
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center gap-3">
              <a href={member.social.linkedin} className="text-primary text-lg">
                <FaLinkedinIn />
              </a>
              <a href={member.social.facebook} className="text-primary text-lg">
                <FaFacebookF />
              </a>
              <a href={member.social.instagram} className="text-primary text-lg">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
