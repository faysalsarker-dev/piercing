
import { useQuery } from '@tanstack/react-query';
import useApi from '../../Hooks/useApi';
import MyBook from './BookCard';



const getStoredBookings = () => {
  const stored = localStorage.getItem('myBookings');
  return stored ? JSON.parse(stored) : [];
};



export default function MyBookingsPage() {
const api = useApi();


  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['myBookings'],
    queryFn: async () => {
      const storedIds = getStoredBookings();
      if (!storedIds.length) return [];

      const { data } = await api.get(`/my-bookings?ids=${storedIds.join(',')}`);

      const validIds = data.map((b) => b._id);
      const filtered = storedIds.filter((id) => validIds.includes(id));
      localStorage.setItem('myBookings', JSON.stringify(filtered));

      return data;
    },
    enabled: typeof window !== 'undefined' && getStoredBookings().length > 0,
  });






  return (
    <div className=" p-6 bg-background-secondary min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-4">Mina bokningar</h2>
      <p className="text-center mb-8 text-gray-200">
      Du kan avboka din bokning upp till 2 timmar före den schemalagda tiden.
      </p>
<div className="max-w-4xl mx-auto">
    
          {
         isLoading ? (
            
            <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
 <div key={i} className="relative bg-background bg-opacity-30 backdrop-blur-md border border-primary border-opacity-40 rounded-xl shadow-lg p-6 animate-pulse">
      {/* Date Badge */}
      <div className="absolute top-5 right-5 w-16 h-20 rounded-md overflow-hidden">
        <div className="bg-primary bg-opacity-70 rounded-t-md h-6 w-full"></div>
        <div className="bg-white bg-opacity-70 rounded-b-md h-10 w-full mt-1"></div>
      </div>

      {/* Title */}
      <div className="h-7 bg-primary bg-opacity-70 rounded w-3/4 mb-6"></div>

      {/* List items placeholders */}
      <ul className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <li key={i} className="h-5 bg-gray-300 rounded w-full max-w-[250px]"></li>
        ))}
      </ul>

      <div className="mt-6 flex justify-end">
        <div className="h-9 w-24 bg-error bg-opacity-70 rounded cursor-not-allowed"></div>
      </div>
    </div>      ))}
    </div>
          ) : error ? (
            <p className="text-center text-red-500">Error loading bookings: {error.message}</p>
          ) :
          
          bookings.length === 0 ? (
            <p className="text-center text-gray-500">You have no bookings.</p>
          ) : (
        <MyBook bookings={bookings}/>
          )}
</div>
    </div>
  );
}
