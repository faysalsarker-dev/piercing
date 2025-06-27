import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-600 ch mb-8">
      Kontakt & plats 📍
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="card-color shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600 ch mb-4">Hör av dig</h3>
          <p className="text-gray-200 mb-4">Hör av dig – Vi finns här för dig!</p>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-blue-600 ch text-xl" />
            <a tel="08-6415057"><span className="text-lg text-gray-200">08-6415057</span></a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-blue-600 ch text-xl" />
            <span className="text-lg text-gray-200">piercingsodermalm@gmail.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="text-blue-600 ch text-xl" />
            <span className="text-lg text-gray-200">Piercing Södermalm, Åsögatan.128, 11624 Stockholm, Sweden</span>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex gap-4">
            <a href="https://www.facebook.com/SalongKlippSodermalm" target="_blank" className="text-blue-600 ch text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/klippsodermalm" target="_blank" className="text-blue-600 ch text-2xl">
              <FaInstagram />
            </a>
         
          </div>
        </div>

        {/* Google Maps Embed */}
      <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="map"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2036.1779290477377!2d18.0775879!3d59.3132858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fcd11d453d%3A0xeabf111cb28a4da0!2sPiercing%20S%C3%B6dermalm!5e0!3m2!1ssv!2sbd!4v1744034781667!5m2!1ssv!2sbd"

              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default Contact;
