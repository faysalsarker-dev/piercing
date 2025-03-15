import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Link } from 'react-router';  

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

  console.log(formattedDate);

  if (isLoading) {
    return <div>Loading...</div>;
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
  <h3 className="text-2xl font-bold my-3">Today's Booking</h3>
  <table className="table">
    {/* Table head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Contact</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, idx) => (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{item.name}</td>
          <td>
            {item.email}
            <br />
            <span className="badge badge-ghost badge-sm">{item?.phone}</span>
          </td>
          <td>{item.slot}</td>
          <td>
            {/* Button to view booking details */}
     <Link to={`/booking/${item._id}`}>
              <button
               
                className="btn btn-primary"
              >
                View
              </button>
     </Link>
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
