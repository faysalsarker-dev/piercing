
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Review from '../../components/Review';

import Contact from '../../components/Contact';
import Faq from '../../components/Faq';
import OnlineBooking from '../../components/OnlineBooking';
import Chat from '../../components/Chat';




const Home = () => {
  return (
    <div className='px-2'>
    {/* Hero Section (First Impression) */}
    <Hero />  
  
    <div className="max-w-6xl mx-auto flex flex-col">
      {/* Why Choose Us (Trust & Credibility) */}
      <WhyChooseUs />  
  
      {/* Services (Core Offerings) */}
      <Services />  
  
      {/* Showcases (Portfolio/Proof of Work) */}
      
  
      {/* Reviews (Customer Testimonials to Build Trust) */}
      <Review />  
  
      {/* Online Booking (Action-Oriented Call-to-Action) */}
      <OnlineBooking />  
  
      {/* FAQ (Common Questions & Concerns) */}
      <Faq />  
  
      {/* Contact (Final Step for Direct Communication) */}
      <Contact />  
      <Chat/>
    </div>
  </div>
  
  );
};

export default Home;