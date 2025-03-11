import React from 'react';
import heroImge from "../assets/hero.jpg";
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto my-4 rounded-lg'>
          <div
  className="hero lg:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[45vh] my-6 rounded-lg"
  style={{
    backgroundImage: `url(${heroImge})`,
  }}>
  <div className="hero-overlay rounded-lg"></div>
  <div className="hero-content text-center flex flex-col text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight -mb-5">
            Välkommen till
          </h2>
          <h1 className=" text-5xl md:text-7xl font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
  Piercing Södermalm
</h1>

          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6">
            Din specialist på piercing och öronhåltagning i Stockholm. Vi erbjuder trygga,
            professionella och hygieniska behandlingar för både vuxna, barn och bebisar.
            Vår piercare är certifierad och har en bakgrund som sjuksköterska, vilket
            säkerställer högsta säkerhet och kvalitet.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
  <Link to="/online-booking">
    <button className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg border border-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent hover:text-primary">
    Boka nu
    </button>
  </Link>
  <Link to="/contact">
    <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-lg border border-secondary transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent hover:text-secondary">
    kontakta
    </button>
  </Link>
</div>

        </div>
</div>
        </div>
    );
};

export default Hero;