import React from "react";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO, differenceInHours  } from "date-fns";
import {  FaRedo, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import useAxios from "../../Hooks/useAxios";
import Loading from "../../components/loading/Loading";


const getBookings = () => {
  const data = localStorage.getItem("myBookings");
  return data ? JSON.parse(data) : [];
};

export default function MyBookings() {
  const axiosCommon = useAxios();
  const navigate = useNavigate();

  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const storedIds = getBookings();
  
      if (!storedIds.length) return [];
  
      const { data } = await axiosCommon.get(
        `/my-bookings?ids=${storedIds.join(",")}`
      );
  
      // Extract only valid IDs returned from DB
      const validIds = data.map((item) => item._id);
  
      // Remove any invalid IDs from localStorage
      const filtered = storedIds.filter((id) => validIds.includes(id));
      localStorage.setItem("myBookings", JSON.stringify(filtered));
  
      return data;
    },
    enabled: !!getBookings().length,
  });
  
  const handleCancel = (id) => {
    const updatedBookings = bookings.filter((booking) => booking._id !== id);
    localStorage.setItem("myBookings", JSON.stringify(updatedBookings));
    window.location.reload();
  };

  const handleCancelConfirmation = (id) => {
    Swal.fire({
      title: "Är du säker?",
      text: "Vill du verkligen avboka denna bokning?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ja, avboka!",
      cancelButtonText: "Nej, behåll den",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCancel(id);
        Swal.fire("Avbokad!", "Din bokning har avbokats.", "success");
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error fetching data!</p>
      </div>
    );
  }


  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Mina bokningar</h2>
      <h2 className="text-xl font-bold mb-6 text-center">Kom ihåg att bokningar inte kan avbokas efter 2 timmar.</h2>

      {bookings.length === 0 ? (
  <p className="text-center text-gray-200">Inga bokningar hittades.</p>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {bookings.map((booking) => {
      const {
        _id,
        name,
        servicesName,
        price,
      
        bookingDate,
        slot,
        status,
        createdAt,
      } = booking;

      // Kontrollera om bokningen kan avbokas (inom 2 timmar)
      const canCancel = differenceInHours(new Date(), parseISO(createdAt)) < 2;

      return (
        <div className="card-color rounded-2xl shadow-md border-gray-600 border p-5 space-y-3 hover:shadow-lg transition relative">
          <h3 className="text-xl font-semibold">
            {servicesName} - {price} kr
          </h3>

          {/* Datumruta */}
          <div className="absolute top-5 right-5 w-24 h-24 text-white text-center">
            <p className="text-lg bg-blue-700 rounded-t-lg">
              {format(parseISO(bookingDate), "MMM")}
            </p>
            <p className="text-lg font-bold bg-gray-200 rounded-b-lg text-black">
              {format(parseISO(bookingDate), "dd")}
            </p>
          </div>

          <p>
            <span className="font-medium">Datum:</span>{" "}
            {format(parseISO(bookingDate), "EEEE, MMMM d, yyyy")}
          </p>
          <p>
            <span className="font-medium">Slutar kl:</span> {slot}
          </p>
          <p>
            <span className="font-medium">Ditt namn:</span> {name}
          </p>

          <p>
            <span className="font-medium">Bokningskod:</span>{" "}
            <span className="text-blue-600">{_id}</span>
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <span className={`font-semibold ${status === 'cancelled'?'text-red-500': 'text-green-600'} `}>{status}</span>
          </p>

          {/* Knappar */}
          <div className="flex gap-2 mt-3">
            {canCancel ? (
              <button
                onClick={() => handleCancelConfirmation(_id)}
                className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-700"
              >
                <FaTimesCircle /> Avboka
              </button>
            ) : (
              <p className="text-sm text-green-600 font-medium">
                Bokningstiden har passerat eller kan inte avbokas.
              </p>
            )}
            <button onClick={()=>navigate(-1)} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700">
              <FaRedo /> Boka mer
            </button>
          </div>
        </div>
      );
    })}
  </div>
)}
    </div>
  );
}
