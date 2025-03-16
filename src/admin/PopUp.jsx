import React from "react";
import { format } from "date-fns";

const PopUp = ({ item }) => {
  // Format date using date-fns
  const formatDateFS = (dateString) => {
    return format(new Date(dateString), "EEEE, MMMM d, yyyy"); 
    // Example output: "Saturday, May 17, 2025"
  };

  return (
    <div>
      <button
        className="btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => document.getElementById("booking_modal").showModal()}
      >
       Details
      </button>

      <dialog id="booking_modal" className="modal">
        <div className="modal-box p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700">Booking Details</h2>
          <div className="mt-4 space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {item.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> 
              <a 
                href={`mailto:${item.email}`} 
                className="text-blue-600 hover:underline ml-1"
              >
                {item.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 
              <a 
                href={`tel:${item.phone}`} 
                className="text-blue-600 hover:underline ml-1"
              >
                {item.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold">Booking Date:</span> {formatDateFS(item.bookingDate)}
            </p>
            <p>
              <span className="font-semibold">Time Slot:</span> {item.slot}
            </p>
          </div>

          <div className="modal-action mt-4">
            <form method="dialog">
              <button className="btn bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PopUp;
