import React from "react";

const OnlineBooking = () => {
  return (
    <div className="relative bg-cover bg-center py-20 px-6 mx-4 md:mx-0 rounded-lg shadow-lg" 
      style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Book an Appointment with Us</h2>
        <p className="text-lg mb-6">
          Do you want to get a new piercing or get your ears pierced in a safe and professional way? 
          Book your appointment online, call, or drop in.
        </p>
        <button className="bg-accent hover:bg-accent-dark text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default OnlineBooking;
