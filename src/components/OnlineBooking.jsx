import React from "react";
import { Link } from "react-router";
import cover from "../assets/cover.jpg";

const OnlineBooking = () => {
  return (
    
    <div className="relative bg-cover bg-center py-20 px-6 mx-4 md:mx-0 rounded-lg shadow-lg" 
      style={{ backgroundImage: `url(${cover})` }}>
      {/* Overlay */}
      <div className="absolute inset-0  hero-overlay rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Book an Appointment with Us</h2>
        <p className="text-lg mb-6">
          Do you want to get a new piercing or get your ears pierced in a safe and professional way? 
          Book your appointment online, call, or drop in.
        </p>
    <Link to={'/online-booking'}>
          <button className="bg-accent hover:bg-accent-dark text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition">
            Book Now
          </button>
    </Link>
      </div>
    </div>
  );
};

export default OnlineBooking;
