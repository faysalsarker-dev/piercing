import React from 'react';
import heroImge from "../assets/hero.jpg";
const Hero = () => {
    return (
        <div className=''>
          <div
  className="hero min-h-screen my-4 "
  style={{
    backgroundImage: `url(${heroImge})`,
  }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;