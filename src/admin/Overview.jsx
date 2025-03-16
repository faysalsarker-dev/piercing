import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import PopUp from './PopUp';
import Loading from '../components/loading/Loading';
 

const Overview = () => {
  const axiosCommon = useAxios();

  // State to store the formatted date
  const [bookingDate] = useState(new Date());
  const formattedDate = format(bookingDate, "yyyy-MM-dd");

  const { data, isLoading, error } = useQuery({
    queryKey: ['todays'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/online-booking/todays-book/${formattedDate}`);
      return data;
    },
  });



  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'><Loading/></div>;
  }

  if (error) {
    return <div>Error fetching data!</div>;
  }

  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="stats shadow w-full">
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
          <div className="stat-title">Today's Booking</div>
          <div className="stat-value">{data.length}</div> {/* Corrected from 'lenght' */}
          <div className="stat-desc">{formattedDate}</div> {/* Using the formatted date from state */}
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
      <table className="table w-full border border-gray-200">
        {/* Table Head */}
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-700">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Booking Date & Time</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="p-3">{idx + 1}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3 flex flex-col">
                <a 
                 
                >
                  {item.email}
                </a>
                <a 
                 
                >
                  {item.phone}
                </a>
              </td>
              <td className="p-3">
                <span className="block font-semibold">
                  {format(new Date(item.bookingDate), "EEEE, MMMM d, yyyy")}
                </span>
                <span className="text-gray-600">{item.slot}</span>
              </td>
              <td className="p-3">
                <PopUp item={item} />
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
