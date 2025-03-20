import React, { useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion"; 

const PopUp = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const formatDateFS = (dateString) => {
    return format(new Date(dateString), "EEEE, MMMM d, yyyy");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <button
        className="btn bg-blue-600 text-white border-0 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={openModal}
      >
        Details
      </button>

      {isModalOpen && (
        <motion.dialog
          open
          className="modal"
        initial={{ opacity: 0, y: 50 }}  // Start below and invisible
          animate={{
            opacity: 1,      // Fade in
            y: 0,            // Move to original position
            transition: {
              duration: 0.1, // Faster animation (0.3 seconds)
            },
          }}
          exit={{
            opacity: 0,     // Fade out
            y: 50,          // Move down before exiting
            transition: {
              duration: 0.1,  // Same fast exit
            },
          }}
        >
          <div className="modal-box p-6 card-color rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700">Booking Details</h2>
            <div className="mt-4 space-y-3 ">
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
              <p>
                <span className="font-semibold">Services:</span> {item.servicesName}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {item.price}
              </p>
            </div>

            <div className="modal-action mt-4">
              <form method="dialog">
                <button
                  type="button"
                  className="btn bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </motion.dialog>
      )}
    </div>
  );
};

export default PopUp;
