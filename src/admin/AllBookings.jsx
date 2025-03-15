import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Link } from 'react-router';

const AllBookings = () => {
    const axiosCommon = useAxios();
    const { data, isLoading, error } = useQuery({
        queryKey: ['all-booking'],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/online-booking`);
          return data;
        },
      });
    

      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error fetching data!</div>;
      }
    return (
        <div>
             <h3 className="text-2xl font-bold my-3">All Booking</h3>
                <div className="overflow-x-auto mt-10">
 
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

export default AllBookings;