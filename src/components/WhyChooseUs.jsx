import React from "react";
import { motion } from "framer-motion";

import Images from "../assets/whyChoose.jpg";

const WhyChooseUs = () => {
  return (
    <div className="my-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-blue-600 ch mb-8"
      >
       Vad gör oss unika?
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
            loading="lazy"
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
     
          <p className="text-sm  mb-4">
            På Piercing Södermalm sätter vi säkerhet, Professionalism och en
            förstklassig kundupplevelse främsta rummet. Här är varför vi är det
            självklara valet för din nästa piercing:
          </p>

          {/* Feature List */}
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            {[
              "Erfarenhet och trygghet - Vår certifierade piercare har en medicinsk bakgrund för din säkerhet.",
              "Högsta hygienstandard - Vi använder sterila verktyg och smycken samt följer strikta hygienrutiner för att minimera infektionsrisken.",
              "För alla åldrar - Vi erbjuder piercing för både vuxna och barn samt skonsam öronhåltagning för bebisar.",
              "Centralt läge - Vår studio ligger på Södermalm i Stockholm, lättillgänglig för dig.",
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="pl-1"
              >
                <span className="font-bold">{feature.split(" - ")[0]} - </span>{feature.split(" - ")[1]}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
