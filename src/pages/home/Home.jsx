import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Review from '../../components/Review';
import MeetTheTeam from '../../components/MeetTheTeam';
import Contact from '../../components/Contact';
import Faq from '../../components/Faq';
import OnlineBooking from '../../components/OnlineBooking';

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='max-w-6xl mx-auto flex flex-col px-2'>
        <Services/>
        <WhyChooseUs/>
        <MeetTheTeam/>
        <OnlineBooking/>
        <Review/>
        <Faq/>
        <Contact/>
        </div>
    </div>
  );
};

export default Home;