import React from "react";
import { Link } from "react-router";
import cover from "../assets/cover.jpg";


const OnlineBooking = () => {
  return (

    <div className="relative roboto bg-cover bg-center py-20 px-6 mx-4 md:mx-0 rounded-lg shadow-lg" 
      style={{ backgroundImage: `url(${cover})` }}>
      {/* Overlay */}
      <div className="absolute inset-0  hero-overlay rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Boka tid hos oss</h2>
        <p className="text-lg mb-6">
        Vill du ta en ny piercing eller få hål i öronen på ett tryggt och professionellt sätt? Boka din tid online, ring oss eller besök oss på drop-in!
        </p>
    <Link to="/online-booking">
          <button className="bg-accent roboto hover:bg-accent-dark text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition">
          Boka nu
          </button>
    </Link>
      </div>
    </div>
    
  );
};

export default OnlineBooking;
