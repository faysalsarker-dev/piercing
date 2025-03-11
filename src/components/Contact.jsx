import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
      Kontakt & plats 📍
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-base-100 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-primary mb-4">Hör av dig</h3>
          <p className="text-gray-600 mb-4">Har du frågor? Kontakta oss när som helst!</p>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-primary text-xl" />
            <a tel="08-6415057"><span className="text-lg text-gray-700">08-6415057</span></a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-primary text-xl" />
            <span className="text-lg text-gray-700">piercingsodermalm@gmail.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span className="text-lg text-gray-700">Piercing Södermalm, Åsögatan.128, 11624 Stockholm, Sweden</span>
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8102.089551448611!2d18.069998199999995!3d59.31328580000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fa0007f2c7%3A0x336e86dd54ddac79!2zw4hzw7ZnYXRhbiAxMjgsIDExNiAyNCBTdG9ja2hvbG0sIFN2ZXJpZ2U!5e0!3m2!1sen!2sse!4v1710156475281!5m2!1sen!2sse"
  allowFullScreen=""
  loading="lazy"
></iframe>

        </div>
      </div>
    </div>
  );
};

export default Contact;
