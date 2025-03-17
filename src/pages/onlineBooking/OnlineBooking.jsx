import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import classNames from "react-day-picker/style.module.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "./../../Hooks/useAxios";
import toast from "react-hot-toast";
import Loading from "../../components/loading/Loading";

const generateTimeSlots = (date) => {
  if (!date) return [];
  const day = date.getDay();
  if (day === 0) return []; // No booking on Sundays

  const isSaturday = day === 6;
  const startTime = 10;
  const endTime = isSaturday ? 15 : 18;
  return Array.from({ length: endTime - startTime + 1 }, (_, i) => `${startTime + i}:00`);
};

const OnlineBooking = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const axiosCommon = useAxios();
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

  // Mutation for booking
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosCommon.post(`/online-booking`, info);
      return data;
    },
    onSuccess: () => {
      toast.success("Booking confirmed successfully.");
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
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Date Picker */}
      <div className="w-full md:w-1/2 flex flex-col items-center bg-white p-3 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Select Your Booking Date</h3>
        <DayPicker
          mode="single"
          selected={bookingDate}
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
      <div className="w-full md:w-1/2 bg-white p-3 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          Select a Time Slot ({formattedDate})
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
                      ${isBooked ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-blue-800 hover:text-white border border-gray-300"} 
                      ${slot === time ? "bg-blue-500 text-white" : "bg-white"}`}
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
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center mb-3">Booking Details</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full p-2 border rounded-lg"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full p-2 border rounded-lg"
            />
            <input
              {...register("phone", { required: true })}
              type="tel"
              placeholder="Your Phone"
              className="input input-bordered w-full p-2 border rounded-lg"
            />

            <button
              disabled={!slot || isLoading || isPending}
              type="submit"
              className="btn btn-primary w-full py-2 rounded-lg roboto "
            >
              {isPending ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div> 
    </div>
  );
};

export default OnlineBooking;
