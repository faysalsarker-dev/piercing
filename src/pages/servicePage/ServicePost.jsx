import React from 'react';
import Review from '../../components/Review';

const ServicePost = () => {
  const serviceData = {
    id: 2,
    title: "Luxury Ear Piercing",
    image: "https://impro.usercontent.one/appid/oneComWsb/domain/piercingsodermalm.se/media/piercingsodermalm.se/onewebmedia/OIP.jpeg?etag=%224cc0-66a11ef8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=474%2B474&extract=59%2B22%2B407%2B360&quality=85",
    discount: "15% OFF",
    rating: 4.7,
    reviews: 95,
    description: "Experience painless and safe ear piercing with expert jewelers and top-quality materials.",
    features: ["🩺 Sterilized Tools", "⚡ Quick & Safe", "✨ Hypoallergenic"],
    price: 42.49,
    original_price: 419.99
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Two-Column Layout for Image and Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column (Image) */}
        <div className="lg:col-span-1">
          <img
            src={serviceData.image}
            alt={serviceData.title}
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Right Column (Content) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Service Title */}
          <h1 className="text-4xl sm:text-5xl font-semibold text-primary">{serviceData.title}</h1>

          {/* Service Description */}
          <p className="text-lg sm:text-xl mt-4 text-gray-600 max-w-3xl">{serviceData.description}</p>

          {/* Price and Discount */}
          <div className="flex items-center space-x-4 mt-6">
            <span className="text-2xl font-bold text-primary">${serviceData.price}</span>
            <span className="text-lg text-gray-500 line-through">${serviceData.original_price}</span>
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">{serviceData.discount}</span>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-primary">Key Features</h3>
            <ul className="list-inside list-disc mt-4 text-gray-600">
              {serviceData.features.map((feature, index) => (
                <li key={index} className="text-lg">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Book This Service Button */}
          <div className="mt-8">
            <button className="btn btn-primary text-white py-3 px-6 rounded-xl text-lg font-semibold">
              Book This Service
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
   

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-primary">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg text-gray-800">Is the piercing process painful?</h3>
            <p className="text-gray-600 mt-2">Our experts use specialized tools and numbing agents to ensure the process is as painless as possible.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg text-gray-800">How long does it take to heal?</h3>
            <p className="text-gray-600 mt-2">Healing time varies, but on average, it takes 6 to 8 weeks for your ear piercing to fully heal.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg text-gray-800">Can I change the jewelry after getting the piercing?</h3>
            <p className="text-gray-600 mt-2">We recommend waiting until the piercing is fully healed before changing jewelry. Consult with our experts for guidance.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
      
      <Review/>

      
     </div>
    </div>
  );
};

export default ServicePost;
