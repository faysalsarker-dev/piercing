import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-lg shadow-lg p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/500x400/?team,office"
            className="w-full max-w-sm rounded-lg shadow-2xl"
            alt="About Us"
          />
          <div>
            <h1 className="text-4xl font-bold text-primary">Who We Are</h1>
            <p className="py-6 text-lg">
              We are a passionate team dedicated to providing the best solutions.
              Our mission is to bring innovation and creativity to the digital world.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-primary">Meet Our Team</h2>
        <p className="mt-2 text-gray-600">
          Our team is composed of skilled professionals with a passion for excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Team Member 1 */}
          <div className="card bg-base-100 shadow-md p-6">
            <img
              src="https://source.unsplash.com/150x150/?man,face"
              className="rounded-full mx-auto"
              alt="Team Member"
            />
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="card bg-base-100 shadow-md p-6">
            <img
              src="https://source.unsplash.com/150x150/?woman,face"
              className="rounded-full mx-auto"
              alt="Team Member"
            />
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-500">Lead Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="card bg-base-100 shadow-md p-6">
            <img
              src="https://source.unsplash.com/150x150/?man,profile"
              className="rounded-full mx-auto"
              alt="Team Member"
            />
            <h3 className="text-xl font-semibold mt-4">Michael Brown</h3>
            <p className="text-gray-500">Head of Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
