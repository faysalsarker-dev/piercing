
import { format, parseISO,  subHours, isBefore } from 'date-fns';
import Swal from 'sweetalert2';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useApi from '../../Hooks/useApi';


const MyBook = ({bookings}) => {
      const now = new Date();

const api = useApi()



  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (info) => {
      const { data } = await api.put(`/online-booking/${info.id}?auth=user`, {
        status:info.status
      });
      
      return data; 
    },
    onSuccess: () => {




      toast.success("Booking confirmed successfully.",{
            style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
      });
  
    },
    onError: () => {
      toast.error("An error occurred while submitting your request.",{
            style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
      });
    },
  });






  const cancelBooking = () => {
    Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
  };

  const confirmCancel = (info) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this booking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it',
      cancelButtonText: 'No',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        cancelBooking(info._id);

const status = info.status === 'confirmed' ? 'cancelled' : info.status === 'cancelled' ? 'confirmed' : 'cancelled';
        mutateAsync({id:info._id,status});
      }
    });
  };









    return (
        <div>
               <div className="grid md:grid-cols-2 gap-6">
                         
                {bookings?.map((b) => {
                  const bookingDateTime = parseISO(`${b.bookingDate}T${b.slot}:00`);
                  const cancelDeadline = subHours(bookingDateTime, 2);
                  const canCancel = isBefore(now, cancelDeadline);
                
                  return (
                    <div
                      key={b._id}
                      className="relative bg-background bg-opacity-30 backdrop-blur-md border border-[#D6A354] rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.03] duration-300"
                    >
                      {/* Date Badge */}
                      <div className="absolute top-5 right-5 text-center rounded-md overflow-hidden shadow-md select-none w-16">
                        <div className="bg-[#D6A354] text-white py-1 text-xl font-semibold tracking-wide">
                          {format(parseISO(b.bookingDate), 'MMM')}
                        </div>
                        <div className=" text-black bg-white py-1 text-2xl font-extrabold">
                          {format(parseISO(b.bookingDate), 'dd')}
                        </div>
                      </div>
                
                      <h3 className="text-2xl font-bold mb-4 text-primary">{b.service} - {b.price}</h3>
                
                      <ul className="space-y-3  font-medium">
                        <li className="flex items-center gap-3">
                          <FaCalendarAlt className="text-primary" />
                          <span>{format(parseISO(b.bookingDate), 'EEEE, MMMM do, yyyy')}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaClock className="text-primary" />
                          <span>{b.slot}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaUser className="text-primary" />
                          <span>{b.name}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaEnvelope className="text-primary" />
                          <span>{b.email}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaPhone className="text-primary" />
                          <span>{b.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          {b.status === 'confirmed' ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : (
                            <FaTimesCircle className="text-red-500" />
                          )}
                          <span className={`font-semibold ${b.status === 'confirmed' ? 'text-green-700' : 'text-red-700'}`}>
                            {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                          </span>
                        </li>
                      </ul>
                
                      <div className="mt-6 flex justify-end">
                        {canCancel ? (
                          <button
                          disabled={isPending || b.status === 'cancelled'}
                            onClick={() => confirmCancel(b)}
                            className="btn btn-error btn-sm flex items-center gap-2 px-5 py-2 text-white hover:scale-105 transition-transform duration-200"
                            aria-label="Cancel Booking"
                          >
                            <FaTimesCircle />
                            {b.status === 'cancelled' ? 'Cancelled' : 'Cancel Booking'}
                            
                          </button>
                        ) : (
                          <p className="text-sm text-yellow-700 font-semibold">
                            Cannot cancel within 2 hours of booking time
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
                        </div>
        </div>
    );
};

export default MyBook;