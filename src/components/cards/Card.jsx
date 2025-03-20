

import React from "react";
import { motion } from "framer-motion";



const Card = ({item}) => {

  return (
    <div className="flex flex-col md:flex-row items-center gap-4  shadow-2xl p-4 rounded-lg">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={`${import.meta.env.VITE_API}/images/${item?.image}`}
            alt="Piercing"
            loading="lazy"
            className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
          />
         
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 p-3 text-center md:text-left"
      >
        <h2 className="text-5xl font-bold text-blue-600 ch mb-4 pl-2 border-l-2 border-primary">
       {item?.title}
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        {item?.description}
        </p>

        {/* Pricing */}
        <div className="flex flex-col space-y-4">
  {item?.btn1Text && (
    <a
      className="w-full"
      href={item?.btn1Link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item?.btn1Text}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-1 py-3 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
      >
        {item?.btn1Text}
      </motion.button>
    </a>
  )}

  {item?.btn2Text && (
    <a
      className="w-full"
      href={item?.btn2Link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item?.btn2Text}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-1 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        {item?.btn2Text}
      </motion.button>
    </a>
  )}
</div>

      </motion.div>
    </div>
  );
};

export default Card;
