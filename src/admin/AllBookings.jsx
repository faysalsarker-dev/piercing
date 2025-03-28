import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { format } from "date-fns";
import PopUp from "./PopUp";
import { useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/loading/Loading";

const AllBookings = () => {
    const axiosCommon = useAxios();
    const [tab, setTab] = useState('current');
      const [bookingDate] = useState(new Date());
      const formattedDate = format(bookingDate, "yyyy-MM-dd");
    const dateQuery = tab === 'current' ? 'today' : 'yesterday';
    
    const { data, isLoading, error ,refetch} = useQuery({
        queryKey: ['all-booking', dateQuery],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/online-booking?dateQuery=${dateQuery}&date=${formattedDate}`);
          return data;
        },
    });
    
    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        );
      }
    
    if (error) {
        return <div>Error fetching data!</div>;
    }
    
    return (
        <div className="">
            <h3 className="text-2xl font-bold my-3">All Booking</h3>
            <div className="flex gap-4 mb-5">
                <button 
                    className={`px-4 py-2 rounded-md ${tab === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setTab('current')}
                >
                    Current Booking
                </button>
                <button 
                    className={`px-4 py-2 rounded-md ${tab === 'previous' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setTab('previous')}
                >
                    Previous Booking
                </button>
            </div>
            <motion.div 
                key={tab} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                transition={{ duration: 0.3 }}
                className="overflow-x-auto mt-5"
            >
           <table className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg overflow-x-auto">
    <thead className="bg-gray-900">
        <tr className="text-left text-gray-300">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Service Info</th>
            <th className="p-3">Booking Date & Time</th>
            <th className="p-3">Action</th>
        </tr>
    </thead>
    <tbody>
        {data.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ):(

        data?.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
              <td
  className={`p-3 text-center ${
    item?.status === "cancelled" ? "text-red-500" : "text-green-500"
  }`}
>
  {idx + 1}
</td>

                <td className="p-3">{item.name}</td>
                <td className="p-3">
                    <div className="flex flex-col">
                        <a href={`mailto:${item.email}`} className="text-blue-400 hover:underline">{item.email}</a>
                        <a href={`tel:${item.phone}`} className="text-blue-400 hover:underline">{item.phone}</a>
                    </div>
                </td>
                <td className="p-3">
                    <span className="block font-semibold">{item.servicesName}</span>
                    <span className="text-gray-400">price {item.price}</span>
                </td>
                <td className="p-3">
                    <span className="block font-semibold">{format(new Date(item.bookingDate), "EEEE, MMMM d, yyyy")}</span>
                    <span className="text-gray-400">{item.slot}</span>
                </td>
                <td className="p-3">
                    <PopUp refetch={refetch} item={item} />
                </td>
            </tr>
        ))

      )
      
      }
        
     
    </tbody>
</table>

            </motion.div>
        </div>
    );
};

export default AllBookings;
