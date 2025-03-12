import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import classNames from "react-day-picker/style.module.css";

const fakeBookedSlots = {
  "2025-03-11": ["10:00", "12:00", "15:00"],
  "2025-03-12": ["11:00", "14:00"],
};

const generateTimeSlots = (date) => {
  if (!date) return [];
  const day = date.getDay();
  if (day === 0) return []; 

  const isSaturday = day === 6;
  const startTime = 10;
  const endTime = isSaturday ? 15 : 18;
  return Array.from({ length: endTime - startTime + 1 }, (_, i) => `${startTime + i}:00`);
};

const OnlineBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const bookedSlots = fakeBookedSlots[formattedDate] || [];
  const availableSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(""); 
    reset(); 
  };

  const onSubmit = (data) => {
    console.log("Booking Confirmed:", { ...data, selectedDate, selectedTime });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Date Picker */}
      <div className="w-full md:w-1/2 flex flex-col items-center bg-white p-3 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Select Your Booking Date</h3>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          classNames={{
            ...classNames,
            selected: "bg-primary rounded-lg font-bold text-white",
            today: "text-black",
          }}
          disabled={(date) => date < today || date.getDay() === 0}
          className="border-0 p-4 rounded-lg shadow-md"
        />
      </div>

      {/* Time Slot Selection & Booking Form */}
      <div className="w-full md:w-1/2 bg-white p-3 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          Select a Time Slot ({format(selectedDate, "PP")})
        </h2>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => {
              const isBooked = bookedSlots.includes(slot);
              return (
                <button
                  key={slot}
                  onClick={() => !isBooked && setSelectedTime(slot)}
                  className={`btn btn-sm relative p-2 rounded-lg text-center transition-all duration-300 
                    ${isBooked ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white border border-gray-300"} 
                    ${selectedTime === slot ? "bg-blue-500 text-white" : "bg-white"}`}
                  disabled={isBooked}
                >
                  {slot}
                  {isBooked && (
                        <span className="block text-xs absolute inset-0 rotate-12 text-slate-400">
                          (Already Booked)
                        </span>
                      )}
                </button>
              );
            })
          ) : (
            <p className="col-span-3 text-red-500 text-center">No available slots</p>
          )}
        </div>

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
            <button type="submit" className="btn btn-primary w-full py-2 rounded-lg">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineBooking;