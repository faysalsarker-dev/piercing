import { FaCheckCircle } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      title: "Piercing in Stockholm",
      description:
        "We perform all types of piercings, including navel, nose, septum, helix, daith, tragus, conch, and more.",
    },
    {
      title: "Ear Piercing for All Ages",
      description:
        "Gentle and safe ear piercing methods suitable for children, adults, and even babies.",
    },
    {
      title: "Sterile & Hypoallergenic Jewelry",
      description:
        "We use medical-grade jewelry made from titanium and nickel-free gold & silver-plated studs.",
    },
    {
      title: "Aftercare Guidance",
      description:
        "We provide comprehensive aftercare advice to ensure optimal healing and results.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 shadow-md rounded-lg transition-transform transform hover:scale-105"
            >
              <FaCheckCircle className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
