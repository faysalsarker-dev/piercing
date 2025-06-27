import React, { useState } from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const PopUp = ({ item  ,refetch}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosCommon = useAxios();

  const formatDateFS = (dateString) => {
    return format(new Date(dateString), "EEEE, MMMM d, yyyy");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosCommon.put(`/online-booking/${info._id}?auth=admin`, {
        ...info,
        status: "cancelled",
      });
      return data;
    },
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
      toast.success("Booking cancelled successfully.");
    },
    onError: () => {
      toast.error("An error occurred while canceling your booking.");
    },
  });

  const handleCancelBooking = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (result.isConfirmed) {
      await mutateAsync(item);
    }
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.1 } }}
        >
          <div className="modal-box p-6 card-color rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700">Booking Details</h2>
            <div className="mt-4 space-y-3">
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
                <span className="font-semibold">Booking Date:</span>{" "}
                {formatDateFS(item.bookingDate)}
              </p>
              <p>
                <span className="font-semibold">Time Slot:</span> {item.slot}
              </p>
              <p>
                <span className="font-semibold">Services:</span>{" "}
                {item.servicesName}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {item.price}
              </p>
            </div>

            <div className="modal-action mt-4 flex justify-between gap-4">


              {item.status !== "cancelled" && (  

<button
    type="button"
    onClick={handleCancelBooking}
    disabled={isPending}
    className="btn border-0 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
  >
    Cancel Booking
  </button>

              )}
  
  <button
    type="button"
    className="btn bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
    onClick={closeModal}
  >
    Close
  </button>
</div>

          </div>
        </motion.dialog>
      )}
    </div>
  );
};

export default PopUp;
