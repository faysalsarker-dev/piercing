import React from "react";
import { motion } from "framer-motion";

// Service Images
import earPiercing from "../assets/earrings.png";
import bodyPiercing from "../assets/piercing.png";
import jewelry from "../assets/piercings.png";
import aftercare from "../assets/advice.png";

const services = [
  {
    id: 1,
    title: "Öronpiercing",
    description:
      "Skonsamma och professionella öronpiercingar – från klassiska hål till unika kombinationer.",
    image: earPiercing,
  },
  {
    id: 2,
    title: "Kroppspiercing",
    description:
      "Vi erbjuder expertis inom alla typer av kroppspiercing, inklusive navel, tunga, septum och mer.",
    image: bodyPiercing,
  },
  {
    id: 3,
    title: "Smyckesbyte",
    description:
      "Högkvalitativa smycken i titan och guld – vi hjälper dig att byta smycken säkert och smidigt.",
    image: jewelry,
  },
  {
    id: 4,
    title: "Eftervård & Rådgivning",
    description:
      "Professionell eftervård och skötselråd för att säkerställa snabb och säker läkning.",
    image: aftercare,
  },
];

const Services = () => {
  return (
    <div className="my-5">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-primary mb-12"
      >
        Våra Piercingtjänster
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.id * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 text-center relative overflow-hidden"
          >
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
