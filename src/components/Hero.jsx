import React from 'react';
import heroImge from "../assets/hero.jpg";
import { Link } from 'react-router';
const Hero = () => {
    return (
        <>
          <div
  className="hero relative lg:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[45vh] my-8 rounded-lg max-w-7xl mx-auto  "
  style={{
    backgroundImage: `url(${heroImge})`,
  }}>
  <div className="hero-overlay rounded-lg h-full"></div>
  <div className=" h-full  text-center flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-xl md:text-5xl font-bold leading-tight ">
            Välkommen till
          </h2>
          <h1 className="mb-1 text-5xl md:text-7xl font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
  Piercing Södermalm
</h1>

          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6">
          


            Din specialist på piercing och öronhåltagning i Stockholm.
Vi erbjuder trygga, professionella och hygieniska
<b> piercingar</b> för både vuxna, barn och bebisar. Vår picicare ar certifierad och har en bakgrund som sjuksköterska,



          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
  <Link to="/online-booking">
    <button className="px-6 py-2 bg-primary text-white font-semibold rounded-full shadow-lg border border-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent hover:text-primary">
    Boka nu
    </button>
  </Link>
  <Link to="/contactus">
    <button className="px-6 py-2 bg-secondary text-white font-semibold rounded-full shadow-lg border border-secondary transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent hover:text-secondary">
    kontakta
    </button>
  </Link>
</div>

        </div>
</div>
        </>
    );
};

export default Hero;