import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Contact & Location 📍
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-base-100 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-primary mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Have questions? Reach out to us anytime!</p>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-primary text-xl" />
            <span className="text-lg text-gray-700">+1 (234) 567-890</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-primary text-xl" />
            <span className="text-lg text-gray-700">info@piercingstudio.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span className="text-lg text-gray-700">123 Piercing St, New York, NY</span>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-primary text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-primary text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-primary text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.95373631531563!3d-37.81627917975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0f1290f%3A0x6c3b0c8cf389b7b9!2sPiercing%20Studio!5e0!3m2!1sen!2sus!4v1623321424515!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
