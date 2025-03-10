import React from 'react';
import heroImge from "../assets/hero.jpg";
const Hero = () => {
    return (
        <div className='max-w-6xl mx-auto my-4 rounded-lg'>
          <div
  className="hero min-h-screen my-4 rounded-lg"
  style={{
    backgroundImage: `url(${heroImge})`,
  }}>
  <div className="hero-overlay rounded-lg"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Piercing Södermalm</h1>
      <p className="mb-5">
      your specialist in piercing and ear piercing in Stockholm. We offer safe, professional and hygienic treatments for both adults, children and babies. Our piercer is certified and has a background as a nurse, which ensures the highest safety and quality.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;