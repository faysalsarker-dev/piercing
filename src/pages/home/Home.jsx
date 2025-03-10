import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Review from '../../components/Review';

import Contact from '../../components/Contact';
import Faq from '../../components/Faq';
import OnlineBooking from '../../components/OnlineBooking';




const Home = () => {
  return (
    <div>
  <Hero />
  <div className="max-w-6xl mx-auto flex flex-col px-2">
    <WhyChooseUs />  {/* Establish trust early */}
    <Services />  {/* Show what you offer */}
    <OnlineBooking />  {/* CTA to convert users */}
    <Review />  {/* Build credibility with testimonials */}
    <Faq />  {/* Answer common concerns */}
    <Contact />  {/* Final CTA & location details */}
  </div>
</div>
  );
};

export default Home;