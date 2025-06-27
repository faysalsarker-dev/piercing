

import  { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import  "react-day-picker/style.css";
import { useQuery } from "@tanstack/react-query";

import { sv } from 'date-fns/locale';

import { Suspense } from "react";
import { format, isToday, parseISO } from 'date-fns';
import Slots from "./Slot";
import useApi from './../../Hooks/useApi';
import OfferBanners from './../../components/OfferBanners';






const customSwedishLocale = {
  ...sv,
  options: {
    ...sv.options,
    weekStartsOn: 1,
  },
};



const filterAvailableSlots = ({ slots, isDayOff }, selectedDate) => {
  if (isDayOff) {
    return [];
  }

  const selected = parseISO(selectedDate); 
  const now = new Date();

  if (isToday(selected)) {
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    return slots.filter(time => {
      const [hour, minute] = time.trim().split(':').map(Number);
      const slotMinutes = hour * 60 + minute;
      return slotMinutes > currentMinutes;
    });
  }

 
  return slots.map(t => t.trim());
};




const BookingPage = () => {
  const [date, setDate] = useState(null);
const api = useApi()

useEffect(() => {
  if (!date) {
    const newDate = format(new Date(), "yyyy-MM-dd");
    setDate(newDate);
  }
}, [date]);

const today = new Date();
  today.setHours(0, 0, 0, 0);
 

  const { data: slotdetails, isLoading, isError, refetch } = useQuery({
    queryKey: ["slotsdetails", date],
    queryFn: async ({ signal }) => {
      const { data } = await api.get(
        `/online-booking/check-slots/${date}`,
        { signal }
      );
      return data;
    },
    enabled: !!date,
  });






  const handleDateSelect = (selectedDate) => {
    if (!selectedDate) return;

    const formatted = format(selectedDate, "yyyy-MM-dd");
    if (formatted === date) return;

    setDate(formatted);
    refetch();
  };

  const filteredSlots = slotdetails
    ? filterAvailableSlots(slotdetails, date)
    : [];

  return (
    <div className="min-h-screen  bg-background-secondary">
      {/* Date Picker */}
  




      <div className="py-10 px-4 md:px-10 flex flex-col gap-8 md:flex-row justify-center items-start">
    <div className="w-full md:w-1/2 bg-background rounded-2xl shadow-md p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">boka tid</h2>
        <DayPicker
          mode="single"
          animate={true}
                classNames={{
            // ...classNames,
            selected: "bg-primary rounded-lg font-bold text-white",
            today: "text-blue-600 ",

          }}
          className="scale-[1.1]"
          selected={date}
          onSelect={handleDateSelect}
          disabled={(d) => d < today}
          locale={customSwedishLocale}
        />
      </div>

      {/* Booking Form */}
     <Suspense fallback={<p>Loading booking details...</p>}>
             <Slots date={date}  slotdetails={{ ...slotdetails, slots: filteredSlots }} isLoading={isLoading} isError={isError} refetch={refetch} />

      </Suspense>

      </div>


<section><OfferBanners /></section>


    </div>
  );
};

export default BookingPage;
