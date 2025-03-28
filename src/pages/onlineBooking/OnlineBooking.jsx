import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import classNames from "react-day-picker/style.module.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "./../../Hooks/useAxios";
import toast from "react-hot-toast";
import Loading from "../../components/loading/Loading";
import { useNavigate, useSearchParams } from "react-router";

const generateTimeSlots = (date) => {
  if (!date) return [];
  
  const day = date.getDay();
  if (day === 0) return []; 

  const isSaturday = day === 6;
  const startTime = 10;
  const endTime = isSaturday ? 15 : 18;

  let timeSlots = [];
  
  
  for (let hour = startTime; hour <= endTime; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  return timeSlots;
};


const OnlineBooking = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const axiosCommon = useAxios();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("servicesName");
  const price = searchParams.get("price");
  const [selectedService, setSelectedService] = useState(name || "");
  const [selectedPrice, setSelectedPrice] = useState(price || "");

const navigate = useNavigate();


  const { data:prices } = useQuery({
      queryKey: ["price"],
      queryFn: async () => {
        const response = await axiosCommon.get("/price"
        );
        
        return response.data;
      },
      staleTime: 1200000, 
      cacheTime: 3600000, 
    });





  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);
  
    // Find price from the list
    const foundPrice = prices
      .flatMap(category => category.items)
      .find(item => item.name === service)?.price || "";
  
    setSelectedPrice(foundPrice);
  };




  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formattedDate = format(bookingDate, "yyyy-MM-dd");

  // Fetch available slots
  const { data: slotdetails = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["slotsdetails", formattedDate],
    queryFn: async ({ signal }) => {
      const { data } = await axiosCommon.get(`/online-booking/check-slots/${formattedDate}`,{ signal });
      return data;
    },
    enabled: !!formattedDate,
  });

  // Extract booked slots
  const bookedSlots = slotdetails?.map((b) => b.slot) || [];
  const availableSlots = generateTimeSlots(bookingDate);

  // Handle date selection
  const handleDateSelect = (date) => {
    if (!date || format(date, "yyyy-MM-dd") === formattedDate) return;
    setBookingDate(date);
    setSlot("");
    refetch();
    reset();
  };



  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosCommon.post(`/online-booking`, info);
      
      return data; // assuming server returns saved booking object with _id etc.
    },
    onSuccess: (data) => {

      navigate('/my-bookings')
      toast.success("Booking confirmed successfully.");

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem("myBookings")) || [];
      console.log(data.booking._id, "data.booking._id");
      const updated = [...existing, data.booking._id];
      localStorage.setItem("myBookings", JSON.stringify(updated));
  
      reset();
      refetch(); 
    },
    onError: () => {
      toast.error("An error occurred while submitting your request.");
    },
  });
  








  // Handle form submission
  const onSubmit = async (data) => {
    if (!slot) return toast.error("Please select a time slot.");
    await mutateAsync({ ...data, bookingDate: formattedDate, slot });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-3  min-h-screen">
      {/* Date Picker */}
      <div className="w-full md:w-1/2 flex flex-col items-center  p-3 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Välj ditt bokningsdatum</h3>
        <DayPicker
          mode="single"
          selected={bookingDate}
          animate={true}
          onSelect={handleDateSelect}
          classNames={{
            ...classNames,
            selected: "bg-primary rounded-lg font-bold text-white",
            today: "text-black",
          }}
          disabled={(date) => date < today || date.getDay() === 0}
          className="border-0 p-4 rounded-lg shadow-md roboto"
        />
      </div>

      {/* Time Slot Selection & Booking Form */}
      <div className="w-full md:w-1/2  p-3 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
        Välj en tidslucka ({format(new Date(formattedDate), 'EEEE, MMMM d, yyyy')   })
        </h2>

        {isLoading ? (
         <Loading/>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to load slots</p>
        ) : (
          <div className="grid grid-cols-3 gap-3 mb-5 roboto ">
            {availableSlots.length > 0 ? (
              availableSlots.map((time) => {
                const isBooked = bookedSlots.includes(time);
                return (
                  <button
                    key={time}
                    onClick={() => !isBooked && setSlot(time)}
                    className={` btn btn-sm relative p-2 rounded-lg text-center transition-all duration-300 
                      ${isBooked ? "  cursor-not-allowed border-gray-400" : "hover:bg-blue-800 hover:text-white border border-gray-300"} 
                      ${slot === time ? "bg-blue-500 text-white" : "card-color text-white"}`}
                    disabled={isBooked}
                  >
                    {time}
                    {isBooked && (
                      <span className="block text-xs absolute inset-0 rotate-12 text-violet-400">
                        (Booked)
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <p className="col-span-3 text-red-500 text-center">No available slots</p>
            )}
          </div>
        )}

        {/* Booking Form */}
        <div className="bg-gray-800 p-6 mt-2 rounded-lg shadow-lg  ">
  <h3 className="text-xl font-semibold text-center mb-4 text-white">Bokningsdetaljer</h3>
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
    {/* Name Input */}
    <div>
      <label className="text-gray-300 text-sm font-medium mb-1 block">Ditt namn</label>
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="ange ditt namn"
        className="input input-bordered w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>

    {/* Email Input */}
    <div>
      <label className="text-gray-300 text-sm font-medium mb-1 block">Din e-post</label>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="ange din e-postadress"
        className="input input-bordered w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>

    {/* Phone Input */}
    <div>
      <label className="text-gray-300 text-sm font-medium mb-1 block">Din telefon</label>
      <input
        {...register("phone", { required: true })}
        type="tel"
        placeholder="ange ditt telefonnummer"
        className="input input-bordered w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>

    {/* Service Selection */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Service Name */}
      <div>
        <label className="text-gray-300 text-sm font-medium mb-1 block">Tjänstens namn</label>
        {name ? (
          <input
            {...register("servicesName", { required: true })}
            value={selectedService}
            readOnly
            className="input input-bordered w-full bg-gray-600 cursor-not-allowed text-gray-400"
          />
        ) : (
          <select
            {...register("servicesName", { required: true })}
            onChange={handleServiceChange}
            value={selectedService}
            className="select select-bordered w-full card-color text-white focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="" disabled>
            valt en tjänst
            </option>
            {prices?.map((category) => (
              <optgroup key={category?.category} label={category?.category} className="font-bold text-gray-400">
                {category?.items?.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}  
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        )}
      </div>

      {/* Service Price */}
      <div>
        <label className="text-gray-300 text-sm font-medium mb-1 block">Servicepris</label>
        <input
          {...register("price", { required: true })}
          value={selectedPrice}
          readOnly
          className="input input-bordered w-full bg-gray-600 cursor-not-allowed text-gray-400"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      disabled={isLoading || isPending}
      type="submit"
      className="btn btn-primary text-white w-full py-2 mt-4 rounded-lg transition-all hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:ring-opacity-50"
    >
      {isPending ? "Bokning..." : "bekräfta bokningen"}
    </button>
  </form>
</div>

      </div> 
    </div>
  );
};

export default OnlineBooking;
