

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ServiceRequiredNotice from "./ServiceRequiredNotice";
import { useSearchParams } from "react-router";
import useApi from "../../Hooks/useApi";

const extractNumericPrice = (value) => {
  const match = String(value).match(/[\d.,]+/);
  if (!match) return 0;
  return parseFloat(match[0].replace(/,/g, ""));
};




const Slots = ({slotdetails, isLoading, isError, refetch, date}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
 const api = useApi()
  const { register, handleSubmit, reset } = useForm();

const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const price = searchParams.get('price');

  // const { data:serviesInfo } = useQuery({
  //   queryKey: ["services", id],
  //   queryFn: async () => {
  //     const { data } = await axiosInstance.get(
  //       `/price/${id}`
        
  //     );
  //     return {service:data?.title , price:extractNumericPrice(data?.discountedPrice)};
  //   },
  //   enabled: !!id,
  // });



  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await api.post(`/online-booking`, info);
      
      return data; 
    },
    onSuccess: (data) => {



      if (data?.booking?._id) {
  const existing = JSON.parse(localStorage.getItem("myBookings")) || [];
  if (!existing.includes(data.booking._id)) {
    const updated = [...existing, data.booking._id];
    localStorage.setItem("myBookings", JSON.stringify(updated));
  }
}

      toast.success("Booking confirmed successfully.",{
            style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
      });
      reset();
      refetch(); 
    },
    onError: (error) => {
      console.log(error.response?.data);
      toast.error("An error occurred while submitting your request.",{
            style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
      });
    },
  });







  const onSubmit = (data) => {
    const bookingData = {
      bookingDate: date,
        slot: selectedSlot,
        ...data,
        service:name,
       price: extractNumericPrice(price),                
        web:'piercingsodermalm',
    };
    console.log(bookingData);
    mutateAsync(bookingData);
  };









  useEffect(()=>{
    setSelectedSlot(null)
  },[date])

    return (
      <div className="w-full md:w-1/2 bg-background rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
   {!name ? null :` Välj din tid (${format(date, "PPP")}) `}

        </h2>

       

{
!name ? (
 <ServiceRequiredNotice />
)
:

isLoading ? (
  <div className="grid grid-cols-3 gap-3 mb-6">
    {[...Array(6)].map((_, i) => (
      <Skeleton
        key={i}
        height={40}
        baseColor="#0F0F0F"
        highlightColor="#D6A354"
        borderRadius={12}
        className="w-full"
      />
    ))}
  </div>
) : isError ? (
  <div className="w-full text-center py-10">
    <p className="text-red-500 font-semibold">
    Misslyckades med att ladda information om platsen. Försök igen.
    </p>
  </div>
) : slotdetails?.isDayOff ? (
  <div className="w-full text-center py-10">
    <p className="text-red-500 font-semibold">
      {slotdetails.message || "It's an off day. Please choose another date."}
    </p>
  </div>
) :

slotdetails?.slots?.length === 0 ? (
  <div className="w-full text-center py-10">
    <p className="text-red-500 font-semibold">
     Inga lediga tider för detta datum. Välj ett annat datum.
    </p>
  </div>
) :

(
  <div className="grid grid-cols-3  gap-4 mb-6">
    {slotdetails?.slots?.map((slot) => (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        key={slot}
        disabled={isPending }
        onClick={() => setSelectedSlot(slot)}
      className={`py-2 px-4 rounded-lg font-bold transition-all duration-200 border
            ${
              selectedSlot === slot
                ? "bg-primary text-white "
                : "bg-gray-500 text-white border-background-secondary hover:bg-primary hover:text-white hover:border-primary"
            }`}
      >
        {slot}
      </motion.button>
    ))}
  </div>
)}

     

 
<AnimatePresence mode="wait">
  {selectedSlot && (
    <motion.div
      key="bookingForm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full mt-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <input
          {...register("phone", { required: true })}
          placeholder="Phone"
          type="tel"
          className="p-3 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary btn hover:btn-primary/90 text-white py-3 rounded-lg font-medium transition-all"
        >
        {
          isPending ? (
     <span className="loading loading-bars loading-sm"></span>

          
          ) : 'Bekräfta bokning'}
       
        </button>
      </form>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    );
};

export default Slots;