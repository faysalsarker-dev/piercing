import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useQuery, useMutation } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import classNames from "react-day-picker/style.module.css";
import { toast } from "react-hot-toast";

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

const AdminBookingPage = ({refetch:reload}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState(new Date());
  const [slot, setSlot] = useState("");
  const axiosCommon = useAxios();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const formattedDate = format(bookingDate, "yyyy-MM-dd");

  const { data: slotdetails = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["slotsdetails", formattedDate],
    queryFn: async ({ signal }) => {
      const { data } = await axiosCommon.get(
        `/online-booking/check-slots/${formattedDate}`,
        { signal }
      );
      return data;
    },
    enabled: !!formattedDate,
  });

  const bookedSlots = slotdetails?.map((b) => b.slot) || [];
  const availableSlots = generateTimeSlots(bookingDate);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosCommon.post(`/online-booking`, info);
      return data;
    },
    onSuccess: () => {
      toast.success("Booking confirmed successfully.");
      setIsOpen(false);
      refetch();
      reload();
      setSlot("");
    },
    onError: () => {
      toast.error("An error occurred while submitting your request.");
    },
  });

  const handleDateSelect = (date) => {
    if (!date) return;
    setBookingDate(date);
    setSlot("");
    refetch();
  };

  const handleBooking = async () => {
    if (!slot) {
      Swal.fire({
        icon: "warning",
        title: "No Slot Selected",
        text: "Please select a time slot before confirming.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    await mutateAsync({ bookingDate: formattedDate, slot ,  name: "N/A",  email: "N/A",  servicesName: "N/A",  price: "N/A",  phone: "N/A",});
    
  };

  return (
    <div className="my-5">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Add busy slot
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-4xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Offline Booking</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-lg"
                >
                  ✖
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2">Select Booking Date</h3>
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
                    className="border-0 p-4 rounded-lg shadow-md bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Select a Time Slot ({format(new Date(formattedDate), "EEEE, MMMM d, yyyy")})
                  </h3>
                  {isLoading ? (
                    <p className="text-center">Loading slots...</p>
                  ) : isError ? (
                    <p className="text-center text-red-500">Failed to load slots</p>
                  ) : (
                    <div className="grid grid-cols-3 gap-3">
                      {availableSlots.length > 0 ? (
                        availableSlots.map((time) => {
                          const isBooked = bookedSlots.includes(time);
                          return (
                            <button
                              key={time}
                              onClick={() => !isBooked && setSlot(time)}
                              className={`py-2 rounded-lg text-center transition-all duration-300 border ${
                                isBooked
                                  ? "border-gray-500 text-gray-400 cursor-not-allowed bg-gray-700"
                                  : "border-blue-500 hover:bg-blue-800"
                              } ${slot === time ? "bg-blue-500 text-white font-semibold" : "text-white"}`}
                              disabled={isBooked}
                            >
                              {time}
                              {isBooked && <span className="block text-xs text-red-400">(Booked)</span>}
                            </button>
                          );
                        })
                      ) : (
                        <p className="col-span-3 text-red-500 text-center">No available slots</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow-md"
              >
                Confirm Booking
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminBookingPage;
