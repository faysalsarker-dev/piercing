import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import classNames from "react-day-picker/style.module.css";
import { format } from 'date-fns';

const fakeBookedSlots = {
  "2025-03-11": ["10:00", "12:00", "15:00"], // Example booked slots
  "2025-03-12": ["11:00", "14:00"],
};

const generateTimeSlots = (date) => {
  const day = date.getDay();
  if (day === 0) return []; // Disable Sunday

  const isSaturday = day === 6;
  const startTime = 10;
  const endTime = isSaturday ? 15 : 18;
  const slots = [];

  for (let hour = startTime; hour <= endTime; hour++) {
    slots.push(`${hour}:00`);
  }

  return slots;
};

const OnlineBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
console.log(selectedDate,selectedTime,formData);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Ensure past dates are disabled

  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const bookedSlots = fakeBookedSlots[formattedDate] || [];
  const availableSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Date Picker */}
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        classNames={{ 
          ...classNames, 
          selected: 'bg-primary rounded-lg font-bold text-white',
          today:'text-black'
        }}
        disabled={(date) => date < today || date.getDay() === 0} // Disable past dates & Sundays
        className="border-0 bg-base-200 p-4 rounded-lg shadow-md"
      />

      {/* Time Slot Selection */}
      {selectedDate && (
        <div className="w-80">
          <h2 className="text-lg font-semibold text-center">
            Select a Time Slot ({format(selectedDate, "PP")})
          </h2>
          <div className="grid grid-cols-3 gap-2 mt-3">
            {/* {availableSlots.length > 0 ? (
              availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`btn btn-sm ${
                    selectedTime === slot ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {slot}
                </button>
              ))
            ) : (
              <p className="col-span-3 text-red-500 text-center">
                No available slots
              </p>
            )} */}


{availableSlots.length > 0 ? (
              availableSlots.map((slot) => {
                const isBooked = bookedSlots.includes(slot);
                return (
                  <button
                    key={slot}
                    onClick={() => !isBooked && setSelectedTime(slot)}
                    className={`btn btn-sm ${
                      isBooked
                        ? "btn-disabled relative bg-gray-300 text-gray-500 cursor-not-allowed"
                        : selectedTime === slot
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                    disabled={isBooked}
                  >
                    {slot}
                    {isBooked && (
                      <span className="block text-xs absolute inset-0 rotate-12 text-red-500">
                        (Already Booked)
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <p className="col-span-3 text-red-500 text-center">
                No available slots
              </p>
            )}
          
      






          </div>
        </div>
      )}

      {/* Booking Form */}
      {selectedTime && (
        <div className="w-80 bg-base-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center">Booking Details</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OnlineBooking;
