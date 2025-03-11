

import React from "react";
import { motion } from "framer-motion";

import nevel from "../../assets/nevel.jpg";

const Cardthree = () => {

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-base-100 shadow-2xl p-4 rounded-lg">
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
            src={nevel}
            alt="Ear Piercing"
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
        <h2 className="text-5xl font-bold text-primary mb-4 pl-2 border-l-2 border-primary">
        
Navel Piercing
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        En navelpiercing är ett elegant och feminint sätt att accentuera din kropp. Hos oss på Piercing Södermalm utför vi säkra och professionella navelpiercingar med sterila verktyg och smycken av titan.
        </p>

        {/* Pricing */}
        <div className="flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3  shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
          >
          350 kr ink. Titansmycke, Ord. 700 kr
          </motion.button>
      
        </div>
      </motion.div>
    </div>
  );
};

export default Cardthree;
