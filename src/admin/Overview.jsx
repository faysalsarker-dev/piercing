import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import PopUp from './PopUp';
import Loading from '../components/loading/Loading';
import AdminBookingPage from './AdminBookingPage';


const Overview = () => {
  const axiosCommon = useAxios();

  // State to store the formatted date
  const [bookingDate] = useState(new Date());
  const formattedDate = format(bookingDate, "yyyy-MM-dd");

  // Fetch today's booking data
  const { data, isLoading, error,refetch } = useQuery({
    queryKey: ['todays'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/online-booking/todays-book/${formattedDate}`);
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
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error fetching data!</p>
      </div>
    );
  }

  return (
    <div className="px-2 py-6 min-h-screen">
      {/* Booking Stats */}
      <div className="stats shadow-lg w-full h-auto card-color mb-5 text-white rounded-lg">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white">Today's Booking</div>
          <div className="stat-value text-white">{data.length}</div>
          <div className="stat-desc text-white">{formattedDate}</div>
        </div>
      </div>
<div>
  <AdminBookingPage/>
</div>
      {/* Booking Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 bg-gray-800 text-white rounded-lg">
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
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
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
                    <a
                      href={`mailto:${item.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {item.email}
                    </a>
                    <a
                      href={`tel:${item.phone}`}
                      className="text-blue-400 hover:underline"
                    >
                      {item.phone}
                    </a>
                  </div>
                </td>
                <td className="p-3">
                  <span className="block font-semibold">{item.servicesName}</span>
                  <span className="text-gray-400">price {item.price}</span>
                </td>
                <td className="p-3">
                  <span className="block font-semibold">
                    {format(new Date(item.bookingDate), "EEEE, MMMM d, yyyy")}
                  </span>
                  <span className="text-gray-400">{item.slot}</span>
                </td>
                <td className="p-3">
                  <PopUp refetch={refetch} item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
