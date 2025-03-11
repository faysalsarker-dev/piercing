import React from "react";
import { motion } from "framer-motion";

import Images from "../assets/whychooseus.jpg";

const WhyChooseUs = () => {
  return (
    <div className="my-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-primary mb-8"
      >
        Varför välja Piercing Södermalm?
      </motion.h2>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={Images}
            alt="Why Choose Us"
            className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          />
        </motion.div>

        {/* Text & Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Vad får oss att sticka ut?
          </h3>
          <p className="text-sm text-gray-700 mb-4">
          På Piercing Södermalm prioriterar vi säkerhet, professionalism och en exceptionell kundupplevelse. Här är anledningen till att vi är det bästa valet för din nästa piercing:
          </p>

          {/* Feature List */}
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
            {[
              "Erfarenhet och trygghet – Certifierad piercare med medicinsk bakgrund.",
              "Sterila verktyg och smycken – Vi följer strikta hygienrutiner för att minimera risk för infektioner.",
              "För alla åldrar – Vi piercar både vuxna och barn samt erbjuder skonsam öronhåltagning för bebisar.",
              "Centralt läge i Stockholm – Lättillgänglig piercingstudio på Södermalm.",
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="pl-1"
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
