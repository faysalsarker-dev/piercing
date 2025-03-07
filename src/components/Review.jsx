import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Emily Rose",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "Absolutely love my new piercing! The staff was professional, and the hygiene standards were top-notch. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    review:
      "Great experience! The piercing process was smooth and painless. The studio has a great vibe, and the jewelry selection is amazing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    review:
      "Best piercing studio ever! The team made me feel comfortable, and I love how my piercing turned out. Definitely coming back for more!",
    rating: 5,
  },
  {
    id: 4,
    name: "Daniel Brown",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "The piercing process was quick, and the staff was super friendly. Love my new piercing!",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review:
      "Hands down the best piercing studio! Super clean and hygienic, and the staff is fantastic.",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        What Our Customers Say 
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 }, // Show 2 reviews on medium screens
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Show 3 reviews on large screens
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="card bg-base-100 shadow-xl p-6 mx-3">
              <div className="flex flex-col items-center">
                <FaQuoteLeft className="text-primary text-4xl mb-3" />
                <p className="text-gray-600 text-lg italic text-center">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <h3 className="font-semibold text-lg mt-2">{testimonial.name}</h3>
                <div className="rating rating-md">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      className="mask mask-star-2 bg-yellow-500"
                      checked
                      readOnly
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
