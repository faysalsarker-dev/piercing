import React from "react";
import { motion } from "framer-motion";

// Service Images
import earPiercing from "../assets/services1.jpeg";
import bodyPiercing from "../assets/services2.jpeg";
import servies4 from '../assets/services4.jpeg'
import aftercare from "../assets/advice.png";
import { Link } from "react-router";

const services = [
  {
    id: 1,
    title: "Piercing med nål - Steril och skonsam",
    description:
      " Professionell och skonsam piercing med nål. Upptäck vårt stora utbud av piercing!",
    image: earPiercing,
    path:'/piercing'
  },
  {
    id: 2,
    title: "Öronhåltagning med pistol – Snabbt och effektivt",
    description:
      "Vill du ha nya hål i öronen på ett snabbt och smidigt sätt? Med vår moderna håltagningspistol får du ett par vackra örhängen på nolltid!",
    image: bodyPiercing,
    path:'/oronhåltagning'
  },

  {
    id: 3,
    title: "After care & Rådgivning",
    description:
      "Att följa rätt eftervårds rutin hjälper din piercing att läka snabbt och utan problem.",
    image: aftercare,
    path:'/after-care'
  },
  {
    id: 4,
    title: "Silver smycke",
    description:
      "Vi erbjuder äkta 925 silversmycken, inklusive stilrena ringar, pluppar och örhängen – perfekta för alla tillfällen!",
    image: servies4,
    path:'/silver-smycke'
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: idx * 0.2, // Staggered effect
    },
  }),
};

const Services = () => {
  return (
    <div className="my-5">
      {/* Section Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-4xl font-extrabold text-center text-white ch mb-12"
      >
        Det här erbjuder vi!
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-6 gap-2">
        {services.map((service, idx) => (
          <motion.div
      key={service.id}
      custom={idx}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      className="group card-color rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 text-center relative overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full object-cover h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{service.description}</p>
      </div>
      <Link to={service.path} className="absolute inset-0" />
    </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
