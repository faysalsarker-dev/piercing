import React from 'react';

const About = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row items-center gap-8  p-8 rounded-lg">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl font-bold border-l-3 border-l-primary pl-2.5">Our Commitment</h2>
    <p className="mt-4 text-gray-600">
      With years of experience, we specialize in safe & stylish piercings, ensuring the best customer experience.
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2"><span>✅</span> Certified & Experienced Piercers</li>
      <li className="flex items-center gap-2"><span>✅</span> 100% Sterile & Safe Equipment</li>
      <li className="flex items-center gap-2"><span>✅</span> Premium Quality Jewelry</li>
    </ul>
    <button className="mt-6 btn btn-primary">Book an Appointment</button>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2">
    <img src="https://img.freepik.com/free-photo/patient-undergoing-microneedling-procedure_23-2149374104.jpg?t=st=1741366324~exp=1741369924~hmac=4eb3c999ee9b06f8bd7d1fd091b818200700e096645b3965faffba1723c0bb1a&w=740" alt="Piercing Studio" className="rounded-lg shadow-lg w-full h-80 " />
  </div>
</div>

        </div>
    );
};

export default About;