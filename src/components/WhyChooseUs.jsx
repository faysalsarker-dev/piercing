import React from "react";
import { motion } from "framer-motion";

import Images from "../assets/whychooseus.jpg";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-primary mb-10"
      >
        Why choose Piercing Södermalm?
      </motion.h2>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          />
        </motion.div>

        {/* Text & Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Feature List */}
          <div className="space-y-4">
            {[
              "Experience and security – Certified piercer with a medical background.",
              "Sterile tools and jewelry – We follow strict hygiene procedures to minimize the risk of infections.",
              "For all ages – We pierce both adults and children and offer gentle ear piercing for babies.",
              "Central location in Stockholm – Easily accessible piercing studio on Södermalm.",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 text-gray-800 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
              >
               ⭐ {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
