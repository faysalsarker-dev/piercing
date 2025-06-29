import { Link } from "react-router";
import bgImage from '../assets/servicesbg.png';

const ServicesCard = ({ service }) => {
  return (
    <a
      href={service?.link || '#'}
      className="flex items-center gap-4 p-4 relative rounded-lg shadow-md hover:shadow-lg transition-all backdrop-blur-sm overflow-hidden bg-[#1f1f1f]"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Card Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1caa] to-transparent" />

      {/* Service Image */}
      {service?.image && (
        <div className="relative z-20 w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-white/10">
          <img
            src={`${import.meta.env.VITE_API_IMG}${service.image}`}
            alt={service?.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Service Info */}
      <div className="flex-1 z-20 text-white">
        <h2 className="text-lg font-semibold text-primary mb-1">{service?.title}</h2>
        <p className="text-sm text-gray-300">{service?.description}</p>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-end z-20">
        {service?.regularPrice && (
          <span className="text-sm text-gray-400 line-through">
            {service.regularPrice}
          </span>
        )}
        <span className="text-base font-bold text-orange-400">
          {service?.discountedPrice}
        </span>
      </div>
    </a>
  );
};

export default ServicesCard;
