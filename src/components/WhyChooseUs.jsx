import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-primary mb-8"
      >
        Why Choose Us?
      </motion.h2>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src="https://img.freepik.com/free-photo/patient-undergoing-microneedling-procedure_23-2149374104.jpg?t=st=1741366324~exp=1741369924~hmac=4eb3c999ee9b06f8bd7d1fd091b818200700e096645b3965faffba1723c0bb1a&w=740"
            alt="Why Choose Us"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Text & Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Experience top-tier services with our expert professionals,
            state-of-the-art facilities, and exceptional customer care. Your
            satisfaction is our priority.
          </p>

          {/* Feature List */}
          <div className="space-y-3">
            {[
              "Certified & Experienced Professionals",
              "Hygienic & Safe Procedures",
              "Premium Quality Equipment & Products",
              "100% Customer Satisfaction Guarantee",
              "Affordable & Transparent Pricing",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-gray-700 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                ✅ {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
