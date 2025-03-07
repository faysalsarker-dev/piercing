import React from 'react';
import { Link } from 'react-router';


const Card = ({services}) => {
    const { title, description, price, discount, rating, features,image , original_price} = services || {};
    console.log(services);
    return (
       <Link to={`/services/${services.id}`}>
            <div>
              <div className="card bg-base-100  shadow-md rounded-lg overflow-hidden border border-gray-200">
      <figure className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt="Professional Piercing Service"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">{discount}</div>
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {title}
        </h2>
        
        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐⭐⭐⭐⭐ <span className="text-gray-500">(4.8)</span>
        </div>
    
        <p className="text-gray-600 text-sm mt-2">
         {description}
        </p>
    
        {/* Service Features */}
        <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-700">
            {
                features?.map((feature, index) => (
                    <span key={index} className="badge badge-outline">{feature}</span>
                ))
            }
         
        </div>
    
        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold text-primary">${price} <span className="text-gray-500 text-sm line-through">${original_price}</span></span>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
    
            </div>
       </Link>
    );
};

export default Card;