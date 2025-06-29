import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Loading from "./loading/Loading";


const Review = () => {
const axiosCommon = useAxios()
  const { data :testimonials, isLoading, error } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/review`);
      return data;
    },
    staleTime: 1200000, 
    cacheTime: 3600000, 
  });

  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'><Loading/></div>;
  }

  if (error) {
    return <div>Error fetching data!</div>;
  }
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-white ch mb-8">
      vad våra kunder
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
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="card card-color shadow-xl p-6 mx-3">
              <div className="flex flex-col items-center">
                <FaQuoteLeft className="text-blue-600 ch text-4xl mb-3" />
                <p className="text-gray-500 text-lg italic text-center">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <h3 className="font-semibold text-lg mt-2">{testimonial.name}</h3>
                <div className=" text-yellow-400">
                <Rating
        initialRating={testimonial.rating} // Initial rating  
        emptySymbol={<FaRegStar className="text-yellow-400" />} // Empty star
        fullSymbol={<FaStar className="text-yellow-400" />} // Full star
        fractions={2} 
        readonly={true} 
      />
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
